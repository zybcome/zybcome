<template>
	<view class="all">
		<view class="index_title"><Head></Head></view>
		<view v-if="!LoginStatus" class="public_title_top" :class="vxin_lb">
			<view class="my_toux" :style="'background: url(' + img_url + 'qs_logo_x.png);background-size: 100%'"></view>
			<view class="my_name">未登录</view>
			<navigator class="lj_login_a" url="../login/login"><button type="primary" class="lj_login">立即登录</button></navigator>
		</view>
		<view v-if="LoginStatus" class="public_title_top" :class="vxin_lb">
			<view class="login_title">
				<view class="login_toux" :style="'background: url(' + img_url + toux_url + ');background-size: 100%'"></view>
				<view class="login_name" @click="wanshan">
					<view class="login_name_p">{{ my_name }}</view>
					<view class="login_name_p1">{{ grxx }}</view>
				</view>
				<view class="login_yhq"><navigator url="./../../pages/my/coupon" class="login_name_p2">领取优惠券</navigator></view>
			</view>
			<view class="login_list"></view>
			<button type="primary" @click="tc_login">退出登录</button>
		</view>
		<view>
			<uni-popup ref="popup" type="center">
				<view>{{ tanchu_center }}</view>
				<view class="tanchu_red">{{ tanchu_red }}</view>
			</uni-popup>
		</view>
	</view>
</template>

<script>
import uniPopup from '@/components/uni-popup/uni-popup.vue';
import Head from './../head/head.vue';
import { mapState, mapMutations } from 'vuex';
export default {
	computed: {
		...mapState(['img_url', 'api'])
	},
	data() {
		return {
			vxin_lb: '',
			toux_url: 'qs_logo_x.png',
			my_name: '企山创业园1号',
			wdl_position: 'wdl_position',
			LoginStatus: false,
			grxx: '完善个人信息',
			user_nicename_v: '',
			company_v: '',
			user_email_v: '',
			address_v: '',
			tanchu_red: '',
			tanchu_center: ''
		};
	},
	components: {
		Head,
		uniPopup
	},
	onLoad() {
		// #ifdef  MP-WEIXIN
		this.vxin_lb = 'vxin_lb';
		// #endif
		// #ifdef  APP-PLUS
		this.vxin_lb = 'vxin_lb';
		// #endif
		var that = this;
		that.times_ = uni.getStorageSync('token');
		uni.request({
			header: {
				authorization: that.times_,
				'content-type': 'application/x-www-form-urlencoded'
			},
			url: that.api + '/qury_key',
			method: 'POST',
			success: res => {
				if (res.data != 1) {
					setTimeout(() => {
						that.LoginStatus = false;
						that.my_name = '企山创业园1号';
						that.tanchu_center = '登录以过期，请重新登录！';
						that.tanchu_red = '';
						that.$refs.popup.open();
					}, 1);
				}
			}
		});
	},
	onShow() {
		var that = this;
		if (uni.getStorageSync('token') !== '') {
			that.LoginStatus = true;
			that.my_name = JSON.parse(uni.getStorageSync('msg')).u_name;
			that.user_nicename_v = JSON.parse(uni.getStorageSync('msg')).name;
			that.company_v = JSON.parse(uni.getStorageSync('msg')).company;
			that.user_email_v = JSON.parse(uni.getStorageSync('msg')).u_email;
			that.address_v = JSON.parse(uni.getStorageSync('msg')).u_address;
			if (that.user_nicename_v !== '' && that.company_v !== '' && that.user_email_v !== '' && that.address_v !== '') {
				that.grxx = '修改个人信息';
			} else {
				that.grxx = '完善个人信息';
			}
		} else {
			that.LoginStatus = false;
			that.my_name = '企山创业园1号';
		}
	},
	methods: {
		wanshan() {
			uni.navigateTo({
				url: './../../pages/my/addmsg'
			});
		},
		tc_login() {
			var that = this;
			uni.setStorage({
				key: 'token',
				data: ''
			});
			uni.setStorage({
				key: 'msg',
				data: ''
			});
			uni.switchTab({
				url: './../../pages/index/index',
				success() {
					that.$store.state.u_name = '企山创业园1号';
					that.u_name = '';
				}
			});
		}
	}
};
</script>

<style lang="less">
.my_toux {
	width: 200upx;
	height: 200upx;
	margin: 20upx auto;
	border-radius: 50%;
	box-shadow: 0 0 10upx 0upx #b9b9b9;
	background-size: 100%;
}
.my_name {
	text-align: center;
	font-size: 32upx;
	margin: 40upx;
}
.lj_login_a {
	width: 50%;
	display: block;
	margin: 0 auto;
}
.lj_login {
	width: 100%;
	margin: 0 auto;
	font-size: 36upx;
}
.login_title {
	background: #f5f5f5;
	zoom: 1;
	.login_toux {
		width: 150upx;
		height: 150upx;
		margin: 40upx;
		border-radius: 50%;
		box-shadow: 0 0 10upx 0upx #b9b9b9;
		background-size: 100%;
		float: left;
	}
	.login_name {
		float: left;
		.login_name_p {
			margin-top: 60upx;
			font-size: 40upx;
			color: #333;
		}
		.login_name_p1 {
			margin-top: 20upx;
			font-size: 28upx;
			color: #969696;
		}
	}
	.login_yhq {
		float: left;
		.login_name_p2 {
			margin-top: 66upx;
			margin-left: 60upx;
			font-size: 24upx;
			color: red;
			border: 1upx solid #969696;
			padding: 5upx 10upx;
			border-radius: 10upx;
		}
	}
}
.login_title::after {
	clear: both;
	display: block;
	content: '';
}
</style>
