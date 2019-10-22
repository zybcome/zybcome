<template>
  <div>
    <Head text="首页头部"></Head>
    <p>首页</p>
    <input type="text" v-model="name">
    <router-link to="/page2">
      <button @click="aa">查询</button>
    </router-link>
    <p>{{city}}</p>
    <p>{{ganmao}}</p>
  </div>
</template>

<script>
import Head from "@/components/head/head";
export default {
  components: {
    Head
  },
  data() {
    return {
      name: "",
      city: "",
      ganmao: ""
    };
  },
  methods: {
    aa() {
      this.axios
        .get("https://www.apiopen.top/weatherApi?city=" + this.name)
        .then(data => {
          this.ganmao = data.data.data.ganmao;
          this.city = data.data.data.city;
        })
        .catch(err => {
          console.log(err);
        });
      this.$store.state.count = this.city;
    }
  },
  beforeRouteEnter: function(to, from, next) {
    // console.log(to);
    // console.log(next);
    // console.log(from);
    next();
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当钩子执行前，组件实例还没被创建
  },
  beforeRouteUpdate: function(to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
    // next()
  },
  beforeRouteLeave: function(to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    console.log(to);
    console.log(next);
    console.log(from);
    if (to.path == "/page2") {
      console.log(1);
      this.$store.state.count = this.city;
      next();
    } else {
      console.log(2);
      next();
    }
  }
};
</script>
<style scoped>
</style>
