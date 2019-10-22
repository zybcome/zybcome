<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Login from "@/components/login/login";
import Index from "@/components/index/index";
import Register from "@/components/index/index";
export default {
  name: "App",
  components: {
    Login,
    Index,
    Register
  },
};
</script>

<style>
</style>
