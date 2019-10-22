<template>
	<view class="head">
		<view class="list_right">
			<view class="list_all_right" @click="tanchu1"><image :src="img_url+'index_list.png'" mode=""></image></view>
			<uni-drawer :visible="active1" :mode="fangx1" @close="close_1">
				<view style="padding:30upx;">
					<view class="my_center_title_logo"><image :src="img_url+'qs_logo.png'" mode=""></image></view>
				</view>
			</uni-drawer>
		</view>
	</view>
</template>

<script>
import uniDrawer from '@/components/uni-drawer.1/uni-drawer.vue';
import { mapState, mapMutations } from 'vuex';
export default {
	computed: {
		...mapState(['img_url'])
	},
	components: { uniDrawer },
	data() {
		return {
			active1: false,
			fangx1: 'right'
		};
	},
	methods: {
		close_1() {
			this.active1 = false;
		},
		tanchu1() {
			this.active1 = true;
		}
	}
};
</script>

<style lang="less">
.list_all_right {
	float: right;
	image {
		width: 60upx;
		height: 60upx;
	}
}
.my_center_title_logo {
	image {
		width: 100%;
		height: 60px;
	}
}
.list_right {
	float: right;
}
</style>
