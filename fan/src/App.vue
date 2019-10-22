<template>
  <div id="app">
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "@/components/footer/footer";
// import Head from "@/components/head/head";
export default {
  name: "App",
  components: {
    Footer,
    // Head
  }
};
</script>

<style>
 
</style>
