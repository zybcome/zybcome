<template>
  <div class="register">
    <div class="input_">
      <p class="title_register">注册</p>
      <el-input
        placeholder="请输入账号"
        size="medium"
        prefix-icon="el-icon-mobile-phone"
        v-model="u_name"
      ></el-input>
      <el-input
        placeholder="请输入手机号"
        size="medium"
        prefix-icon="el-icon-mobile-phone"
        v-model="u_phone"
      ></el-input>
      <el-input
        placeholder="请输入密码"
        size="medium"
        prefix-icon="el-icon-date"
        v-model="u_psw"
        type="password"
      ></el-input>
      <router-link to="/">已有账号？立即登录</router-link>
      <el-button type="primary" @click="register">立即注册</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      u_name: "",
      u_psw: "",
      u_phone: ""
    };
  },
  methods: {
    register() {
      var that = this;
      this.axios
        .post(that.$store.state.api + "/register", {
          u_name: that.u_name,
          u_psw: that.u_psw,
          u_phone: that.u_phone
        })
        .then(function(res) {
          if (res.data == 1) {
            that.$confirm("恭喜您注册成功，是否立即登录？", "", {
              confirmButtonText: "确定",
              cancelButtonText: "取消"
            })
              .then(() => {
                  that.$router.push({ path: "/" });
              })
              .catch(() => {
                that.$message({
                  type: "info",
                  message: "已取消"
                });
              });
          } else {
          }
        })
        .catch(function(err) {});
    }
  }
};
</script>

<style lang="less" scoped>
.input_ {
  width: 270px;
  margin: 200px auto;
  .title_register {
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