import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store({
    namespaced: true,
    state: {
        api: "https://www.ybcc.live:3355",
        status: false,
        u_msg:''
        // api: "http://127.0.0.1:3356"
    }, 
    mutations: {
        
    }
});
export default store;