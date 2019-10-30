<template>
  <div class="outLogin">
    <el-button
      style="margin-top:20px"
      v-if="this.$store.state.status"
      type="danger"
      @click="outLogin"
    >退出登录</el-button>
    <el-button
      style="margin-top:20px"
      v-if="!this.$store.state.status"
      type="primary"
      @click="actLogin"
    >立即登录</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {
    outLogin() {
      localStorage.removeItem("token");
      this.$store.state.status = false;
      this.$router.push({ path: "/login" });
    },
    actLogin() {
      localStorage.removeItem("token");
      this.$store.state.status = false;
      this.$router.push({ path: "/login" });
    }
  }
};
</script>

<style lang="less" scoped>
</style>