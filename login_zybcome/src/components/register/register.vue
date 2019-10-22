<template>
  <div class="register">
    <h1 class="title">注册</h1>
    <router-link to="/login">已有账号立即登录</router-link>
    <ul class="register_ul">
      <li class="register_li">
        <img class="user_img" src="./../../assets/user_img.png" alt />
        <input
          class="register_input register_name"
          v-model="register_name"
          type="text"
          placeholder="请输入用户名"
          @blur="yz_name"
          :class="[userName_show?'register_input_yes':'register_input_no']"
        />
        <p class="tshi_p" v-show="userName_show">请输入4到16位（字母，数字，下划线，减号）</p>
      </li>
      <li class="register_li">
        <img class="user_img" src="./../../assets/psw_img.png" alt />
        <input
          class="register_input register_psw"
          v-model="register_psw"
          type="password"
          placeholder="请输入密码"
          @blur="yz_psw"
          :class="[userPsw_show?'register_input_yes':'register_input_no']"
        />
        <p class="tshi_p" v-show="userPsw_show">请输入最少6位，包括至少1个小写字母，1个数字</p>
      </li>
      <li class="register_li">
        <img class="user_img" src="./../../assets/psw_img.png" alt />
        <input
          class="register_input register_psw"
          v-model="register_psw1"
          type="password"
          placeholder="请确认密码"
          @blur="yz_psw1"
          :class="[userPsw1_show?'register_input_yes':'register_input_no']"
        />
        <p class="tshi_p" v-show="userPsw1_show">两次输入密码不相同，并且不能为空！</p>
      </li>

      <li class="register_li">
        <button @click="register_" class="register_btn">注册</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "vueName",
  data() {
    return {
      register_name: "",
      register_psw: "",
      register_psw1: "",
      userName_show: false,
      userPsw_show: false,
      userPsw1_show: false
    };
  },
  methods: {
    yz_name() {
      var yz_name = /^[a-zA-Z0-9_-]{4,16}$/;
      if (!yz_name.test(this.register_name)) {
        this.register_name = "";
        this.userName_show = true;
      }else{
        this.userName_show = false;
      }
    },
    yz_psw() {
      var yz_psw = /^.*(?=.{6,})(?=.*\d)(?=.*[a-z]).*$/;
      if (!yz_psw.test(this.register_psw)) {
        this.register_psw = "";
        this.userPsw_show = true;
      }else{
        this.userPsw_show = false;
      }
    },
    yz_psw1() {
      if (this.register_psw !== this.register_psw1||this.register_psw1==='') {
        this.register_psw1 = "";
        this.userPsw1_show = true;
      }else{
        this.userPsw1_show = false;
      }
    },
    register_() {
      if (this.register_name !== "" && this.register_psw !== "") {
        var that = this;
        this.axios
          .post("http://" + this.$store.state.ip + "/user/msg", {
            user_name: this.register_name,
            user_psw: this.register_psw
          })
          .then(function(data) {
            console.log(data);
            if (data.data) {
              alert("恭喜您" + that.register_name + "注册成功！");
              that.$store.state.LoginStatus = true;
              console.log(that.$store.state.LoginStatus);
              that.$router.push("/login");
            } else {
              alert("注册失败！");
              that.$store.state.LoginStatus = false;
              console.log(that.$store.state.LoginStatus);
            }
          });
        return;
      } else {
        alert("注册用户名密码不能为空！");
        return;
      }
    }
  }
};
</script>
 
<style scoped lang = "less">
.register {
  width: 300px;
  margin: 100px auto;
  box-shadow: 0px 0px 15px 0px #bababa;
  border-radius: 5px;
  padding: 10px;
  .title {
    text-align: center;
  }
  .register_ul {
    width: 100%;
    padding: 0;
    .register_li {
      margin-top: 10px;
      overflow: hidden;
      list-style: none;
      .register_input {
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
      .tshi_p{
        float: left;
        font-size: 12px;
        color: red;
        margin-left: 20px;
      }
      .register_btn {
        display: block;
        margin: 0 auto;
        width: 100px;
      }
      .register_input_yes{
        border: 2px solid red;
      }
      .register_input_no{
        border: 2px solid green;
      }
    }
  }
}
</style>