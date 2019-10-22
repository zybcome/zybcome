// 创建vuex
import Vue from 'vue'
// 安装vuex
import Vuex from 'vuex'
Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        ip: 'www.ybcc.live:3355',
        LoginStatus: false,
        UserName:''
    }
})