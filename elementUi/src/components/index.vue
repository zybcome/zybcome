<template>
  <div>
    <el-container>
      <el-header>
        <div class="title">
          <a href>企山集团后台管理系统{{u_name}}</a>

          <el-button v-if="!login_status" type="success">
            <router-link to="/login">登录</router-link>
          </el-button>
          <el-button v-if="!login_status" type="primary">
            <router-link to="/register">注册</router-link>
          </el-button>
          <el-button v-if="login_status" type="danger" @click="out_login">退出登录</el-button>
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-col :span="24">
            <el-menu
              default-active="1"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
              @select="handleSelect"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b"
            >
              <el-menu-item index="1">
                <i class="el-icon-setting"></i>
                <span slot="title">首页</span>
              </el-menu-item>
              <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">用户管理</span>
              </el-menu-item>
              <el-menu-item index="3">
                <i class="el-icon-setting"></i>
                <span slot="title">订单管理</span>
              </el-menu-item>
              <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">留言管理</span>
              </el-menu-item>
              <el-menu-item index="5">
                <i class="el-icon-setting"></i>
                <span slot="title">导航三</span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-aside>
        <el-main>
          <div v-show="this.user">
            <User></User>
          </div>
          <div v-show="this.oder">订单信息</div>
          <el-tabs v-show="this.index" v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="用户管理" name="first"></el-tab-pane>
            <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
            <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
            <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
          </el-tabs>
          <div v-show="this.leav"><Leav></Leav></div>
          <div v-show="this.dh3"><Upload></Upload></div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import User from "@/components/user";
import Leav from "@/components/leav";
import Upload from "@/components/upload";
export default {
  data() {
    return {
      activeName: "first",
      index: true,
      user: false,
      oder: false,
      leav: false,
      dh3: false,
      login_status: false,
      u_name: ""
    };
  },
  components: {
    User,Leav,Upload
  },
  beforeMount() {
    if (
      localStorage.getItem("token") &&
      JSON.parse(localStorage.getItem("msg"))
    ) {
      this.login_status = true;
      this.u_name = "-" + JSON.parse(localStorage.getItem("msg")).u_name;
    } else {
    }
  },
  methods: {
    out_login() {
      localStorage.clear();
      this.$router.push({ path: "/" });
    },
    handleSelect(key, keyPath) {
      switch (key) {
        case "1":
          this.index = true;
          this.user = false;
          this.oder = false;
          this.leav = false;
          this.dh3 = false;
          break;
        case "2":
          this.index = false;
          this.user = true;
          this.oder = false;
          this.leav = false;
          this.dh3 = false;
          var that = this;
          if (JSON.parse(localStorage.getItem("msg"))) {
            if (that.$store.state.u_status == 2) {
              that.$message({
                type: "info",
                message: `登陆过期,请重新登录`
              });
              return;
            } else if (that.$store.state.u_status == 3) {
              that.$message({
                type: "info",
                message: `查询失败,请先登录`
              });
              return;
            } else if (that.$store.state.u_status == 5) {
              that.$message({
                type: "info",
                message: `查询失败,没有权限`
              });
              return;
            } else if (that.$store.state.u_status == 4) {
              that.$message({
                type: "info",
                message: `查询失败,没有权限`
              });
              // that.$alert("查询失败", "没有权限", {
              //   confirmButtonText: "确定",
              //   callback: action => {
              //     that.$message({
              //       type: "info",
              //       message: `没有权限`
              //     });
              //   }
              // });
              return;
            }
          } else {
          }
          break;
        case "3":
          this.index = false;
          this.user = false;
          this.oder = true;
          this.leav = false;
          this.dh3 = false;
          break;
        case "4":
          this.index = false;
          this.user = false;
          this.oder = false;
          this.leav = true;
          this.dh3 = false;
          break;
        case "5":
          this.index = false;
          this.user = false;
          this.oder = false;
          this.leav = false;
          this.dh3 = true;
          break;
      }
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.title {
  text-align: right;
  a {
    float: left;
    font-size: 20px;
    color: white;
    text-decoration: none;
  }
}
.el-header,
.el-footer {
  background-color: #1977c6;
  text-align: center;
  line-height: 60px;
}

// .el-aside {
// }

// .el-main {
// }

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
