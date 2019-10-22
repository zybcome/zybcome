<template>
  <el-upload
    class="upload-demo"
    drag
    action="http://127.0.0.1:3355/user/fileImg"
    :auto-upload="true"
    :on-success="upload"
    multiple
    enctype="multipart/form-data"
    name="file"
  >
    <i class="el-icon-upload"></i>
    <div class="el-upload__text">
      将文件拖到此处，或
      <em>点击上传</em>
    </div>
    <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
  </el-upload>
</template>

<script>
export default {
  data: function() {
    return {
      objc: {
        data: ""
      }
      //   image: ""
    };
  },
  mounted() {},
  methods: {
    // gaibian(file, fileList) {
    //   //   var that = this;
    //     this.objc.data = file.raw;
    //   console.log(this.objc);
    //   getBase64(file.raw).then(res => {
    //     // console.log(res);
    //     // console.log(fileList);
    //   });
    //   function getBase64(file) {
    //     return new Promise(function(resolve, reject) {
    //       let reader = new FileReader();
    //       let imgResult = "";
    //       reader.readAsDataURL(file);
    //       reader.onload = function() {
    //         imgResult = reader.result;
    //       };
    //       reader.onerror = function(error) {
    //         reject(error);
    //       };
    //       reader.onloadend = function() {
    //         resolve(imgResult);
    //       };
    //     });
    //   }
    // },
    upload(response, file, fileList) {
      //   console.log(file)
      //   console.log(fileList)
      console.log(response);
    }
  }
};
</script>
 
<style scoped lang = "less">
</style>