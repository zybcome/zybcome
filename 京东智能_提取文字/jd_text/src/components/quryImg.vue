<template>
  <div>
    <h3>您好：{{u_msg.u_name}}</h3>
    <el-image
      class="img_up_list"
      v-for="(itm,k) in img_msg"
      style="width: 50%;"
      :src="itm"
      :alt="itm"
      :preview-src-list="img_list"
      :key="k"
    ></el-image>
    <outLogin></outLogin>
  </div>
</template>

<script>
import outLogin from "./outLogin";
export default {
  data() {
    return {
      u_msg: "",
      img_list: [],
      img_msg: []
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
            that.ajax
              .readToken(
                "/user/allImg",
                { u_id: that.u_msg.u_id },
                localStorage.getItem("token")
              )
              .then(res => {
                that.img_msg = res;
                that.img_list = res;
              });
          }
        });
    }
  },
  methods: {}
};
</script>

<style scoped lang="less">
.title {
  text-align: center;
}
.btn_tz {
  display: block;
  margin-top: 20px;
}
.img_up_list {
  display: block;
  width: 50%;
  margin: 20px auto;
}
</style>
