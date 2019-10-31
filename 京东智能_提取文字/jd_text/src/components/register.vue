<template>
  <div class="register">
    <div class="input_">
      <p class="title_register">注册</p>
      <el-form ref="form" :rules="rules" :model="form">
        <el-form-item prop="u_name">
          <el-input
            placeholder="请输入用户名"
            size="medium"
            prefix-icon="el-icon-user-solid"
            class="inp"
            v-model="form.u_name"
            auto-complete="true"
          ></el-input>
        </el-form-item>
        <el-form-item prop="u_phone">
          <el-input
            placeholder="请输入手机号"
            size="medium"
            prefix-icon="el-icon-phone"
            class="inp"
            v-model="form.u_phone"
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
      <router-link to="/login">已有账号？立即登录</router-link>
      <el-button type="primary" @click="register">立即注册</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    // 由26个英文字母组成
    var nameReg = /^\w+$/;
    // 以字母开头，长度在6-18之间，只能包含字符、数字和下划线。
    var pswReg = /^[a-zA-Z]\w{5,17}$/;
    // 验证11位手机号码
    var phoneReg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
    var validateName = (rule, value, callback) => {
      if (!nameReg.test(value)) {
        this.u_name_1 = false;
        callback(new Error("格式有误(由数字或字母或下划线组成)"));
      } else {
        this.u_name_1 = true;
        callback();
      }
    };
    var validatePhone = (rule, value, callback) => {
      if (!phoneReg.test(value)) {
        this.u_phone_1 = false;
        callback(new Error("格式有误(11位有效手机号码)"));
      } else {
        this.u_phone_1 = true;
        callback();
      }
    };
    var validatePsw = (rule, value, callback) => {
      if (!pswReg.test(value)) {
        this.u_psw_1 = false;
        callback(new Error("格式有误(以字母开头，长度在6-18之间)"));
      } else {
        this.u_psw_1 = true;
        callback();
      }
    };
    return {
      form: {
        u_name: "",
        u_psw: "",
        u_phone: "",
        u_name_1: false,
        u_psw_1: false,
        u_phone_1: false
      },
      // 校验规则
      rules: {
        // 校验手机号码，主要通过validator来指定验证器名称
        u_name: [
          { required: true, message: "用户名不能为空!", trigger: "blur" },
          { validator: validateName, trigger: "blur" }
        ],
        u_psw: [
          { required: true, message: "密码不能为空!", trigger: "blur" },
          { validator: validatePsw, trigger: "blur" }
        ],
        u_phone: [
          { required: true, message: "手机号码不能为空!", trigger: "blur" },
          { validator: validatePhone, trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    register() {
      var that = this;
      if (
        that.u_name_1 == true &&
        that.u_phone_1 == true &&
        that.u_psw_1 == true
      ) {
        this.axios
          .post(that.$store.state.api + "/register", {
            u_name: that.form.u_name,
            u_psw: that.form.u_psw,
            u_phone: that.form.u_phone
          })
          .then(function(res) {
            if (res.data == 1) {
              that
                .$confirm("恭喜您注册成功，是否立即登录？", "", {
                  confirmButtonText: "确定",
                  cancelButtonText: "取消"
                })
                .then(() => {
                  that.$router.push({ path: "/login" });
                })
                .catch(() => {
                  that.$message({
                    type: "info",
                    message: "已取消"
                  });
                });
            } else {
              that.$alert("用户名或手机号已存在", "注册失败", {
                confirmButtonText: "确定",
                callback: action => {
                  that.$message({
                    type: "info",
                    message: `请重新填写`
                  });
                }
              });
            }
          })
          .catch(function(err) {
            that.$alert(err, "注册失败", {
              confirmButtonText: "确定",
              callback: action => {
                that.$message({
                  type: "info",
                  message: `请重新填写`
                });
              }
            });
          });
      } else {
        that.$alert("输入格式不正确", "注册失败", {
          confirmButtonText: "确定",
          callback: action => {
            that.$message({
              type: "info",
              message: `请重新填写`
            });
          }
        });
      }
    }
  }
};
</script>

<style lang="less" scoped>
.input_ {
  width: 270px;
  margin: 100px auto;
  .title_register {
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