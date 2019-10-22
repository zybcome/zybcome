<template>
  <div>
    <p>页面4</p>
    <router-link to="/page4/erji1">
        <span>二级路由1</span>
    </router-link>
    <router-link to="/page4/erji2">
        <span>二级路由2</span>
    </router-link>
    <router-link to="/page4/erji3">
        <span>二级路由3</span>
    </router-link>
    <router-link to="/page4/erji4">
        <span>二级路由4</span>
    </router-link>
    <router-view></router-view>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
</style>