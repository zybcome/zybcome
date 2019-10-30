<template>
  <div>
    <div class="updata">
      <h1 class="title">人脸对比程序</h1>
      <div v-if="!this.$store.state.status">
        <p class="title_p">您还未登录</p>
        <p class="title_p">登录后才可使用该功能</p>
        <el-button type="primary" @click="ac_login">立即登录</el-button>
      </div>
      <h3>{{title_text}}</h3>
      <el-upload
        class="upload-demo"
        ref="upload"
        :action="this.$store.state.api+'/user/autoImg'"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :auto-upload="true"
        :on-success="success_"
        :on-error="error_"
        :before-upload="beforeUpload"
        :on-progress="progress"
        :data="u_msg"
        :headers="token"
        :on-change="on_change"
        list-type="picture-card"
        v-if="this.$store.state.status"
        :limit="2"
        :on-exceed="exceed_"
      >
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-button v-if="compare_btn" class="face_btn" @click="face_btn" type="primary">立即对比</el-button>
      <!-- <img v-for="isq in img_base" :src="isq" alt=""> -->
      <img :src="img_base" alt="">
    </div>
  </div>
</template>
 
<script>
import imageConversion from "image-conversion";
export default {
  data() {
    return {
      loading: false,
      u_msg: {},
      token: {
        authorization: ""
      },
      url_list: [],
      title_text: "点击上传图片",
      compare_btn: false,
      img_base:[]
    };
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
                that.$store.state.status = false;
                that.$router.push({ path: "/login" });
              }
            });
          } else {
            that.$store.state.status = true;
          }
        });
    }
  },
  methods: {
    face_btn() {
        var that = this;
      this.ajax
        .readToken(
          "/user/imgCompare",
          { img_data: this.url_list },
          localStorage.getItem("token")
        )
        .then(res => {
            that.img_base = res;
          console.log(res);
        });
    },
    exceed_(files, fileList) {
      if (files) {
        this.$alert("已经上传两张图片，现在可以进行对比啦！", "提示", {
          confirmButtonText: "确定",
          callback: action => {}
        });
      }
    },
    ac_login() {
      this.$router.push({ path: "/login" });
    },
    submitUpload() {
      this.$refs.upload.submit();
    },
    handleRemove(file, fileList) {},
    handlePreview(file) {},
    on_change(file, fileList) {
      // console.log(file);
    },
    success_(response, file, fileList) {
      var that = this;
      if (response.path) {
        var img_url_ = [];
        for (let j in fileList) {
            img_url_.push(fileList[j].response.url);
        }
        this.url_list = img_url_;
        console.log(this.url_list);
        if (this.url_list.length == 0) {
          this.title_text = "点击上传图片";
          this.compare_btn = false;
        } else if (this.url_list.length == 1) {
          this.title_text = "请上传第二张图片";
          this.compare_btn = false;
        } else if (this.url_list.length == 2) {
          this.title_text = "现在可以进行对比啦";
          this.compare_btn = true;
        } else {
          this.title_text = "最多只能上传两张图片";
        }
      } else {
        this.$alert("上传失败，请重新上传", "提示", {
          confirmButtonText: "确定",
          callback: action => {}
        });
      }
    },
    error_(err, file, fileList) {
      if (err) {
        this.$alert("图片上传失败", "提示", {
          confirmButtonText: "确定",
          callback: action => {}
        });
      }
    },
    beforeUpload(file) {
      this.u_msg = JSON.parse(localStorage.getItem("msg"));
      this.token.authorization = localStorage.getItem("token");
      // console.log(this.u_msg, this.token);
      // 图片不大于4m,宽度不大于2000
      return new Promise((resolve, reject) => {
        let _URL = window.URL || window.webkitURL;
        let isLt2M = file.size / 1024 / 1024 > 4; // 判定图片大小是否小于4MB
        // 这里需要计算出图片的长宽
        let img = new Image();
        img.onload = function() {
          file.width = img.width; // 获取到width放在了file属性上
          file.height = img.height; // 获取到height放在了file属性上
          let valid = img.width > 2000; // 图片宽度大于2000
          // console.log(11, file)
          // 这里我只判断了图片的宽度,compressAccurately有多个参数时传入对象
          if (valid || isLt2M) {
            imageConversion
              .compressAccurately(file, {
                size: 400,
                width: 2000
              })
              .then(res => {
                // console.log(33, res)
                resolve(res);
              });
          } else resolve(file);
        }; // 需要把图片赋值
        img.src = _URL.createObjectURL(file);
      });
    },
    progress(event, file, fileList) {}
  }
};
</script>
 
<style scoped lang='less'>
.face_btn {
  margin-top: 20px;
}
.updata {
  width: 100%;
}
.title {
  text-align: center;
}
.title_p {
  font-size: 12px;
  text-align: center;
  color: #333;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.up_ul {
  max-width: 100%;
  .up_li {
    width: 100%;
    margin: 20px auto;
    border: 1px dashed #333;
    padding: 20px 0;
    h3 {
      width: 100%;
      text-align: center;
    }
    .up_list {
      width: 100%;
      .up_list_li {
        width: 50%;
        margin: 0 auto;
        text-align: left;
      }
    }
  }
}
</style>