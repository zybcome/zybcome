<template>
  <div>
    <Head text="页面2"></Head>
    <p>{{this.$store.state.count}}</p>
  </div>
</template>
<script>
import Head from "@/components/head/head";
export default {
  components: {
    Head
  },
  mounted() {
    // 打印vuex中的state数据
    console.log(this.$store.state.count);
  }
};
</script>
<style scoped>
</style>
