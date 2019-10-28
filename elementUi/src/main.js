// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store'
import ajax from './api/ajax'
import intercept from './api/lanjie'
Vue.use(VueAxios, axios);
Vue.use(Element)
Vue.use(Element, { size: 'small' })
Vue.config.productionTip = false
Vue.use(ajax);
intercept();






/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})



