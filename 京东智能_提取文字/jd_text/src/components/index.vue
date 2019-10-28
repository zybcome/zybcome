<template>
  <div>
    <!-- <input @change="file_" type="file" id="img" />
    <button @click="fileSc">立即上传</button> -->
    <h1 class="title">小功能</h1>
    <router-link to="UpLoad"><el-button type="primary">打开识别图片文字功能</el-button></router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fileImg: "",
      fileDate: "",
      fileType: ""
    };
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
        this.fileImg != "" &&
        this.fileDate != "" &&
        this.fileType != ""
      ) {
        if (this.fileType == "image/png" || this.fileType == "image/jpeg") {
          var that = this;
          this.axios
            .post(that.$store.state.api+"/user/fileImg1", {
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
.title{
  text-align: center;
}
</style>
