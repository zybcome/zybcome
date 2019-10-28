import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import UpLoad from '@/components/upload'
import Login from '@/components/login'
import Register from '@/components/register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/UpLoad',
      name: 'UpLoad',
      component: UpLoad
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/Index',
      name: 'Index',
      component: Index
    }
  ]
})
