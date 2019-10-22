<template>
  <div class="all">
    <p>{{UserName}}</p>
    <input v-show="LoginStatus" @change="file_" type="file" id="img"/>
    <div>
      <img :src="fileImg" class="sc_img" />
    </div>
    <button v-show="LoginStatus" @click="fileSc">立即上传</button>
    <button v-show="!LoginStatus" @click="login_">立即登录</button>
    <button v-show="LoginStatus" @click="look_pic">查看照片</button>
  </div>
</template>
 
<script>
export default {
  name: "vueName",
  data() {
    return {
      LoginStatus: this.$store.state.LoginStatus,
      UserName: "",
      fileName: "",
      fileImg: "",
      fileDate: "",
      fileType: ""
    };
  },
  beforeMount() {
    var that = this;
    // console.log(localStorage.token)
    this.axios
      .post("http://" + this.$store.state.ip + "/checkUser", {
        token: localStorage.token,
        user_name: localStorage.user_name
      })
      .then(function(data) {
        if (data.data.status === 10010) {
          that.$store.state.LoginStatus = false;
          alert("登录以超时，请重新登录!");
          that.UserName = "登录以超时，请重新登录!";
        } else if (data.data.status === 10000) {
          that.$store.state.LoginStatus = true;
          that.$store.state.UserName = localStorage.user_name;
          if (
            that.$store.state.LoginStatus &&
            that.$store.state.UserName != ""
          ) {
            that.UserName =
              "恭喜您" + that.$store.state.UserName + "，登录成功！";
            that.fileName = that.$store.state.UserName;
            that.LoginStatus = that.$store.state.LoginStatus;
          } else {
            that.UserName = "请您先登录!";
          }
        }
      });
  },
  methods: {
    file_(e) {
      let that = this;
      let fileReader = new FileReader();
      fileReader.readAsDataURL(e.target.files[0]);
      this.fileDate = new Date().getTime();
      this.fileType = e.target.files[0].type;
      fileReader.onload = function() {
        let imgBase64Data = this.result;
        that.fileImg = imgBase64Data;
      };
    },
    fileSc() {
      if (
        this.fileName != "" &&
        this.fileImg != "" &&
        this.fileDate != "" &&
        this.fileType != ""
      ) {
        if (this.fileType == "image/png" || this.fileType == "image/jpeg") {
          var that = this;
          this.axios
            .post("http://" + this.$store.state.ip + "/user/fileImg", {
              fileName: this.fileName,
              fileImg: this.fileImg,
              fileDate: this.fileDate,
              fileType: this.fileType
            })
            .then(function(data) {
              if (data.data) {
                alert("上传成功！");
                that.$router.push("/image");
              } else {
                alert("上传失败，图片以存在");
              }
            });
        } else {
          alert("只允许上传png或jpg格式图片！");
        }
      } else {
        alert("请先选择文件！");
      }
    },
    login_() {
      this.$router.push("/login");
    },
    look_pic() {
      this.$router.push("/image");
    }
  }
};
</script>
 
<style scoped lang = "less">
.sc_img {
  width: 100%;
}
</style>