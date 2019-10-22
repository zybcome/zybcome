<template>
  <div class="all">
    <div v-for="it in images">
      <p>{{it.fileName}}</p>
      <img class="xs_img" :src="'http://www.ybcc.live/images/'+it.imageName" alt />
    </div>
  </div>
</template>
 
<script>
export default {
  name: "vueName",
  data() {
    return {
      msg: "Welcome to your vueName",
      images: ""
    };
  },
  mounted() {
    var that = this;
    this.axios
      .post("http://" + this.$store.state.ip + "/images")
      .then(function(data) {
        that.images = data.data;
        // console.log(that.images);
      });
  }
};
</script>
 
<style scoped lang = "less">
.xs_img{
  width: 100%;
}
</style>