<template>
  <div
    v-loading="loading"
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)"
  >
    <div class="updata">
      <h1 class="title">识别图片文字</h1>
      <div v-if="!this.$store.state.status">
        <p class="title_p">您还未登录</p>
        <p class="title_p">登录后才可使用该功能</p>
        <el-button type="primary" @click="ac_login">立即登录</el-button>
      </div>
      <el-upload
        class="upload-demo"
        ref="upload"
        :action="this.$store.state.api+'/user/fileImg'"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :auto-upload="false"
        :on-success="success_"
        :on-error="error_"
        :before-upload="beforeUpload"
        :on-progress="progress"
        :data="u_msg"
        :headers="token"
        :on-change="on_change"
        v-if="this.$store.state.status"
      >
        <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
        <el-button
          style="margin-left: 10px;"
          size="small"
          type="success"
          @click="submitUpload"
        >识别图片中的文字</el-button>
        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
    </div>

    <ul class="up_ul">
      <li class="up_li" v-for="(it,i) in img_msg" :key="i">
        <h3>{{it.originalname}}</h3>
        <div class="look_img_btn">
          <el-button v-if="i!==i_num" style="margin-top:20px" type="primary" @click="look_img(i)">查看第{{i+1}}张原图</el-button>
          <el-button v-if="i==i_num" style="margin-top:20px" type="primary" @click="close_img">关闭第{{i+1}}张原图</el-button>
        </div>
        <el-image
          style="width: 50%;"
          v-show="i==i_num"
          :src="it.url"
          :alt="it.filename"
          :preview-src-list="img_list"
        ></el-image>
        <ul class="up_list">
          <li class="up_list_li" v-for="(is,j) in it.resultData" :key="j">{{is.text}}</li>
        </ul>
      </li>
    </ul>
  </div>
</template>
 
<script>
import imageConversion from "image-conversion";
export default {
  data() {
    return {
      img_msg: [],
      img_list: [],
      loading: false,
      u_msg: {},
      token: {
        authorization: ""
      },
      i_num: -1
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
    close_img() {
      this.i_num = -1;
    },
    look_img(i) {
      this.i_num = i;
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
      // console.log(response);
      var that = this;
      if (response.message == "success") {
        new Promise((resolve, reject) => {
          let param = []; // 定义变量保存文字的y值
          response.resultData.map(value => {
            param.push(value.location.y); //获取y值push进去
          });
          let newArr = param.sort(function(a, b) {
            return a - b;
          });
          resolve(newArr);
        })
          .then(newArr => {
            var newMsg = [];
            for (var i = 0; i < newArr.length; i++) {
              // 循环原数组
              for (var j = 0; j < response.resultData.length; j++) {
                // 原数组的y值与排序后数组的y值进行对比
                if (response.resultData[j].location.y == newArr[i]) {
                  //如果结果值的y值等于排序后的y值 push进去msg
                  newMsg.push(response.resultData[j]);
                }
              }
            }
            return newMsg;
          })
          .then(newMsg => {
            this.loading = false;
            response.resultData = newMsg;
            this.img_msg.unshift(response);
            this.img_list.unshift(response.url);
          });
      } else {
        this.$alert(response, "提示", {
          confirmButtonText: "确定",
          callback: action => {
            // this.$message({
            //   type: "info",
            //   message: `action: ${action}`
            // });
            that.loading = false;
            that.$router.push({ path: "/login" });
            localStorage.removeItem("token");
          }
        });
      }
    },
    error_(err, file, fileList) {
      if (err) {
        this.$alert("图片上传失败", "提示", {
          confirmButtonText: "确定",
          callback: action => {
            // this.$message({
            //   type: "info",
            //   message: `action: ${action}`
            // });
          }
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
    progress(event, file, fileList) {
      // console.log(event);
      this.loading = true;
    }
  }
};
</script>
 
<style scoped lang='less'>
.look_img_btn{
  margin-bottom: 20px;
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