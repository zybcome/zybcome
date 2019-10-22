import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index/index'
import Footer from '@/components/footer/footer'
import Head from '@/components/head/head'
import Page2 from '@/components/page2/page2'
import Page3 from '@/components/page3/page3'
import Page4 from '@/components/page4/page4'
import Erji1 from '@/components/erji1/erji1'
import Erji2 from '@/components/erji1/erji2'
import Erji3 from '@/components/erji1/erji3'
import Erji4 from '@/components/erji1/erji4'
import Vuex from 'vuex'
Vue.use(Vuex);
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/footer',
      name: 'Footer',
      component: Footer
    },
    {
      path: '/head',
      name: 'Head',
      component: Head
    },
    {
      path: '/page2',
      name: 'Page2',
      component: Page2
    },
    {
      path: '/page3',
      name: 'Page3',
      component: Page3
    },
    {
      path: '/page4',
      name: 'Page4',
      component: Page4,
      children:[
        {
          path:"erji1",
          component:Erji1
        },
        {
          path:"erji2",
          component:Erji2
        },
        {
          path:"erji3",
          component:Erji3
        },
        {
          path:"erji4",
          component:Erji4
        },
      ]
    },
  ]
})
