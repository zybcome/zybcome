import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        api: 'https://www.ybcc.live:3355',
        u_status: ''
    },
    mutations: {
    }
});
export default store;