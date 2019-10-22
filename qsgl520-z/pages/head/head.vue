<template>
	<view class="head">
		<view class="my_left">
			<view class="list_all_left" @click="tanchu2"><image :src="img_url + 'index_my.png'" mode=""></image></view>
			<uni-drawer :visible="active2" :mode="fangx2" @close="close_2">
				<view style="padding:30upx;" class="my_center_title" @click="addmsg">
					<view class="my_center_title_img"><image :src="img_url + 'qs_logo_x.png'" mode=""></image></view>
					<view class="my_center_title_right">
						<view class="my_center_title_right_p1">{{ u_name }}</view>
						<view class="my_center_title_right_p2">立即编辑更多</view>
					</view>
				</view>
			</uni-drawer>
		</view>
		<view class="title_logo"><image :src="img_url + 'qs_logo.png'" mode=""></image></view>
		<FwList></FwList>
		<view>
			<uni-popup ref="popup" type="center">
				<view>{{ tanchu_center }}</view>
				<view class="tanchu_red">{{ tanchu_red }}</view>
				<button class="wei_login_btn" type="primary" @click="tanchu_c">立即登录</button>
			</uni-popup>
		</view>
	</view>
</template>

<script>
import uniDrawer from '@/components/uni-drawer/uni-drawer.vue';
import FwList from '@/pages/fwList/fwList.vue';
import uniPopup from '@/components/uni-popup/uni-popup.vue';
import { mapState, mapMutations } from 'vuex';
export default {
	computed: {
		...mapState(['img_url', 'u_name', 'api'])
	},
	components: { uniDrawer, FwList, uniPopup },
	data() {
		return {
			active2: false,
			fangx2: 'left',
			tanchu_center: '',
			tanchu_red: ''
		};
	},
	onLoad() {},
	methods: {
		tanchu_c() {
			if ((this.tanchu_center = '登录领取优惠券')) {
				uni.switchTab({
					url: './../../pages/my/my',
					success: ()=>{
						this.$refs.popup.close();
					}
				});
			}
		},
		close_2() {
			this.active2 = false;
		},
		tanchu2() {
			this.active2 = true;
		},
		addmsg() {
			var that = this;
			that.times_ = uni.getStorageSync('token');
			if (that.times_ !== '' && uni.getStorageSync('msg') !== '') {
				uni.request({
					header: {
						authorization: that.times_,
						'content-type': 'application/x-www-form-urlencoded'
					},
					url: that.api + '/quer_id',
					data: {
						u_id: JSON.parse(uni.getStorageSync('msg')).u_id
					},
					method: 'POST',
					success: res => {
						console.log(res.data[0].u_id);
						if (res.data[0].u_id ==JSON.parse(uni.getStorageSync('msg')).u_id) {
							uni.navigateTo({
								url: './../../pages/my/addmsg'
							});
						} else {
							that.tanchu_center = '登录以过期，请重新登录！';
							that.tanchu_red = '';
							that.$refs.popup.open();
						}
					}
				});
			}else{
				that.tanchu_center = '请先登录哦！';
				that.tanchu_red = '';
				that.$refs.popup.open();
			}
		}
	}
};
</script>

<style lang="less">
.my_center_title {
	zoom: 1;
	.my_center_title_img {
		float: left;
	}
	.my_center_title_right {
		float: left;
		.my_center_title_right_p1 {
			margin-top: 28upx;
			font-size: 36upx;
			margin-left: 20upx;
			color: #333;
		}
		.my_center_title_right_p2 {
			font-size: 24upx;
			margin-top: 10upx;
			margin-left: 20upx;
			color: #969696;
		}
	}
}
.my_center_title::after {
	content: '';
	display: block;
	clear: both;
}

.title_logo {
	width: 29%;
	float: left;
	height: 60upx;
	margin-left: 180upx;
	uni-image {
		width: 100%;
		height: 60upx;
	}
	image {
		width: 100%;
		height: 60upx;
	}
}
.list_all_left {
	float: left;
	image {
		width: 60upx;
		height: 60upx;
	}
}
.my_left {
	float: left;
}
</style>
