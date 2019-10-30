<template>
  <div>
    <!-- <input @change="file_" type="file" id="img" />
    <button @click="fileSc">立即上传</button>-->
    <h3 v-if="this.$store.state.status">欢迎您:{{u_msg.u_name}}</h3>
    <h3 v-if="!this.$store.state.status">您还未登录</h3>
    <h1 class="title">小功能</h1>
    <router-link class="btn_tz" to="UpLoad">
      <el-button type="primary">识别图片文字</el-button>
    </router-link>
    <router-link class="btn_tz" to="quryImg">
      <el-button type="primary">查看历史图片</el-button>
    </router-link>
    <router-link v-if="false" class="btn_tz" to="faceCompare">
      <el-button type="primary">人脸对比程序</el-button>
    </router-link>
    <outLogin></outLogin>
  </div>
</template>

<script>
import outLogin from "./outLogin";
export default {
  data() {
    return {
      fileImg: "",
      fileDate: "",
      fileType: "",
      u_msg: ""
    };
  },
  components: {
    outLogin
  },
  mounted() {
    var that = this;
    if (
      localStorage.getItem("token") == null ||
      localStorage.getItem("token") == "" ||
      localStorage.getItem("msg") == null ||
      localStorage.getItem("msg") == ""
    ) {
      that.$store.state.status = false;
      that.$alert("登录后才可以使用该功能！", "未登录", {
        confirmButtonText: "立即登录",
        callback: action => {
          localStorage.removeItem("token");
          that.$router.push({ path: "/login" });
        }
      });
    } else {
      that.ajax
        .readToken("/qury_key", "", localStorage.getItem("token"))
        .then(res => {
          if (res != 1) {
            that.$alert("登录以过期，请重新登录！", "未登录", {
              confirmButtonText: "确定",
              callback: action => {
                localStorage.removeItem("token");
                that.$store.state.status = false;
                that.$router.push({ path: "/login" });
              }
            });
          } else {
            that.$store.state.status = true;
            that.u_msg = JSON.parse(localStorage.getItem("msg"));
          }
        });
    }
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
      if (this.fileImg != "" && this.fileDate != "" && this.fileType != "") {
        if (this.fileType == "image/png" || this.fileType == "image/jpeg") {
          var that = this;
          this.axios
            .post(that.$store.state.api + "/user/fileImg1", {
              fileName: this.fileName,
              fileImg: this.fileImg,
              fileDate: this.fileDate,
              fileType: this.fileType
            })
            .then(function(data) {
              // console.log(data);
            });
        } else {
          alert("只允许上传png或jpg格式图片！");
        }
      } else {
        alert("请先选择文件！");
      }
    }
  }
};
</script>

<style scoped lang="less">
.title {
  text-align: center;
}
.btn_tz{
  display: block;
  margin-top: 20px;
}
</style>
