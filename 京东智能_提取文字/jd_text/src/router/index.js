import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import UpLoad from '@/components/upload'
import Login from '@/components/login'
import QuryImg from '@/components/quryImg'
import Register from '@/components/register'
import FaceCompare from '@/components/faceCompare'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/upLoad',
      name: 'UpLoad',
      component: UpLoad
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/quryImg',
      name: 'QuryImg',
      component: QuryImg
    },
    {
      path: '/faceCompare',
      name: 'FaceCompare',
      component: FaceCompare
    }
  ]
})
