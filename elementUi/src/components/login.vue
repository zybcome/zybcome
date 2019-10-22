<template>
  <div class="login">
    <div class="input_">
      <p class="title_login">登录</p>
      <el-input
        placeholder="请输入账号"
        size="medium"
        prefix-icon="el-icon-mobile-phone"
        v-model="u_name"
      ></el-input>
      <el-input
        placeholder="请输入密码"
        size="medium"
        prefix-icon="el-icon-date"
        v-model="u_psw"
        type="password"
      ></el-input>
      <router-link to="/register">没有账号？立即注册</router-link>
      <el-button type="primary" @click="login">立即登录</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      u_name: "",
      u_psw: ""
    };
  },
  mounted() {
    this.ajax.forPost("/admin_login", {
      u_name: 15555536670,
      u_psw: "zz123456"
    }).then((res)=>{
      console.log(res);
    });
  },
  methods: {
    login() {
      var that = this;
      this.axios
        .post(that.$store.state.api + "/admin_login", {
          u_name: that.u_name,
          u_psw: that.u_psw
        })
        .then(function(res) {
          console.log(res);
          if (res.data.token) {
            localStorage.setItem("msg", JSON.stringify(res.data.data));
            localStorage.setItem("token", res.data.token);
            that.$router.push({ path: "/index" });
          } else {
            that.$alert(res.data, "登陆失败", {
              confirmButtonText: "确定",
              callback: action => {
                that.$message({
                  type: "info",
                  message: `请重新登录`
                });
              }
            });
          }
        })
        .catch(function(err) {
          that.$alert("用户名不存在", "登录失败", {
            confirmButtonText: "确定",
            callback: action => {
              that.$message({
                type: "info",
                message: `请重新登录`
              });
            }
          });
        });
    }
  }
};
</script>

<style lang="less" scoped>
.input_ {
  width: 270px;
  margin: 200px auto;
  .title_login {
    color: #409eff;
    text-align: center;
    font-size: 40px;
  }
  .el-input,
  .el-button {
    margin: 10px auto;
    display: block;
    width: 100%;
  }
}
</style>