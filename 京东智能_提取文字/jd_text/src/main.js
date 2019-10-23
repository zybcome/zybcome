// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import md5 from 'js-md5';
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.prototype.$md5 = md5;
Vue.use(VueAxios,axios);
Vue.use(Element)
Vue.use(Element, { size: 'small' })
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
