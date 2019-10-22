import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		img_url: "https://www.qsgl520.com/themes/simplebootx_mobile/Public/assets/img/",
		u_name: "企山创业园1号",
		api :'https://www.ybcc.live:3355'
	},
	mutations: {
		change: function(state, img_url, u_name, api) {
			state.img_url = img_url;
			state.u_name = u_name;
			state.api = api;
		}
	}
})

export default store
