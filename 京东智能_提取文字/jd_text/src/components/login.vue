<template>
  <div class="login">
    <div class="input_">
      <p class="title_login">登录</p>
      <el-form ref="form" :rules="rules" :model="form">
        <el-form-item prop="u_name">
          <el-input
            placeholder="请输入用户名或手机号"
            size="medium"
            prefix-icon="el-icon-user-solid"
            class="inp"
            v-model="form.u_name"
            auto-complete="true"
          ></el-input>
        </el-form-item>
        <el-form-item prop="u_psw">
          <el-input
            :show-password="true"
            placeholder="请输入密码"
            size="medium"
            prefix-icon="el-icon-s-goods"
            type="password"
            class="inp"
            v-model="form.u_psw"
            auto-complete="true"
          ></el-input>
        </el-form-item>
      </el-form>
      <router-link to="/Register">没有账号？立即注册</router-link>
      <el-button type="primary" @click="login">立即登录</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        u_name: "",
        u_psw: ""
      },
      // 校验规则
      rules: {
        // 校验手机号码，主要通过validator来指定验证器名称
        u_name: [{ required: true, message:'用户名或手机号不能为空', trigger: "blur" }],
        u_psw: [{ required: true, message:'输入密码不能为空', trigger: "blur" }]
      }
    };
  },
  mounted() {
    if (
      localStorage.getItem("token") == null ||
      localStorage.getItem("token") == "" ||
      localStorage.getItem("msg") == null ||
      localStorage.getItem("msg") == ""
    ) {
      this.$store.state.status = false;
    } else {
      this.$store.state.status = true;
      this.$router.push({ path: "/" });
    }
  },
  methods: {
    login() {
      var that = this;
      this.axios
        .post(that.$store.state.api + "/login", {
          u_name: that.form.u_name,
          u_psw: that.form.u_psw
        })
        .then(function(res) {
          //   console.log(res);
          if (res.data.token) {
            localStorage.setItem("msg", JSON.stringify(res.data.data));
            localStorage.setItem("token", res.data.token);
            that.$store.state.u_name = res.data.data;
            that.$router.push({ path: "/" });
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
  margin: 100px auto;
  .title_login {
    color: #409eff;
    text-align: center;
    font-size: 40px;
  }
  .el-input,
  .el-button {
    margin: 0 auto;
    display: block;
    width: 100%;
  }
  .el-button {
    margin-top: 10px;
  }
}
</style>