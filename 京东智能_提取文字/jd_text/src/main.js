// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import Vuex from 'vuex'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import md5 from 'js-md5';
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from "./store/index.js";
// import ajax from "./api/ajax.js";
Vue.prototype.$md5 = md5;
Vue.use(VueAxios, axios);
Vue.use(Element);
// Vue.use(ajax);
Vue.use(Element, { size: 'small' });
Vue.config.productionTip = false;

/* eslint-disable no-new */
export default new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

