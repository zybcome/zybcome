<template>
  <div class="login">
    <h1 class="title">登录</h1>
    <router-link to="/register">没有账号立即注册</router-link>
    <ul class="login_ul">
      <li class="login_li">
        <img class="user_img" src="./../../assets/logo.png" alt />
        <input class="login_input login_name" v-model="login_name" type="text" placeholder="请输入用户名" />
      </li>
      <li class="login_li">
        <img class="user_img" src="./../../assets/logo.png" alt />
        <input
          class="login_input login_psw"
          v-model="login_psw"
          type="password"
          placeholder="请输入密码"
        />
      </li>
      <li class="login_li">
          <button @click="login_" class="login_btn">登录</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "vueName",
  data() {
    return {
      login_name: "",
      login_psw: ""
    };
  },
  methods: {
    login_() {
      var that = this;
      this.axios
        .post("http://" + this.$store.state.ip + "/user/login", {
          user_name: this.login_name,
          user_psw: this.login_psw
        })
        .then(function(data) {
          if (data.data === that.login_name) {
            // alert("登陆成功！");
            that.$store.state.LoginStatus = true;
            console.log(that.$store.state.LoginStatus);
            that.$router.push('/index')
          } else {
            alert("用户名或密码错误！");
            that.$store.state.LoginStatus = false;
            console.log(that.$store.state.LoginStatus);
          }
        });
    }
  }
};
</script>
 
<style scoped lang = "less">
.login {
  width: 300px;
  margin: 100px auto;
  box-shadow: 0px 0px 15px 0px #bababa;
  border-radius: 5px;
  padding: 10px;
  .title {
    text-align: center;
  }
  .login_ul {
    width: 100%;
    padding: 0;
    .login_li {
      margin-top: 10px;
      overflow: hidden;
      list-style: none;
      .login_input {
        width: 80%;
        float: right;
        height: 30px;
        text-indent: 1em;
      }
      .user_img {
        width: 10%;
        float: left;
        margin-top: 5px;
        margin-left: 5px;
      }
      .login_btn {
        display: block;
        margin: 0 auto;
        width: 100px;
      }
    }
  }
}
</style>