<template>
	<view>
		<view class="index_title"><Head></Head></view>
		<view class="uni-padding-wrap" :class="vxin_lb">
			<view class="page-section swiper">
				<view class="page-section-spacing">
					<swiper class="swiper" id="swiper" :indicatorDots="false" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
						<swiper-item><view class="swiper-item" :style="'background:url(' + img_url + 'index_banner1.jpg) center/cover no-repeat'"></view></swiper-item>
						<swiper-item><view class="swiper-item" :style="'background:url(' + img_url + 'index_banner2.jpg) center/cover no-repeat'"></view></swiper-item>
						<swiper-item><view class="swiper-item" :style="'background:url(' + img_url + 'index_banner4.jpg) center/cover no-repeat'"></view></swiper-item>
					</swiper>
				</view>
			</view>
			<view class="cham_list">
				<view class="cham_gs_name">
					<view class="public_shu"></view>
					<p class="ljhm_title">立即核名</p>
				</view>
				<view class="cham_gs_name">
					<p class="cham_list_p">公司名称：</p>
					<input class="gs_name" type="text" v-model="gs_name" @blur="gs_name_1" placeholder="阿里巴巴网络技术有限公司" placeholder-class="gs_name_phd" />
				</view>
				<view class="cham_gs_name">
					<p class="cham_list_p">您的称呼：</p>
					<input class="gs_name" type="text" v-model="user_name" @blur="user_name_1" placeholder="您的姓名" placeholder-class="gs_name_phd" />
				</view>
				<view class="cham_gs_name">
					<p class="cham_list_p">手机号码：</p>
					<input class="gs_name" type="text" v-model="user_phone" @blur="user_phone_1" placeholder="您的手机号码" placeholder-class="gs_name_phd" />
				</view>
				<view class="cham_gs_name">
					<p class="cham_list_p gs_yanzm_p">验证码：</p>
					<input class="gs_name gs_yanzm" type="text" v-model="user_yzm" @blur="user_yzm_1" placeholder="输入验证码" placeholder-class="gs_name_phd" />
					<button class="huoq_yzm" @click="huoq_yzm" plain="true" type="primary">{{ btn_yzm }}</button>
				</view>
				<view class="cham_gs_name"><button class="tijiao_hm" @click="tijiao_hm" type="primary">提交核名</button></view>
			</view>
		</view>
		<view class="for_list">
			<view class="for_list_li" v-for="it in forList">
				<view class="for_list_li_img"><image :src="img_url + it.forListImg" mode=""></image></view>
				<view class="for_list_li_p">{{ it.forListText }}</view>
			</view>
		</view>
		<view class="for_big_list">
			<view class="for_big_list_li" v-for="im in forBigList">
				<view class="for_big_list_li_img" :style="'background: url(' + img_url + im.forListImg + ');background-size: 100%'">
					<view class="for_big_list_li_p">{{ im.forListText }}</view>
				</view>
			</view>
		</view>
		<view class="fw_list" v-for="ig in fw_list">
			<view class="cham_gs_name">
				<view class="public_shu"></view>
				<view class="ljhm_title1">{{ ig.title }}</view>
			</view>
			<view class="fw_list_xq">
				<view class="fw_list_li" v-for="il in ig.fw_list_center">
					<view class="fw_list_p">{{ il.center_title }}</view>
					<view class="fw_list_img" :style="'background: url(' + img_url + il.center_url + ') center no-repeat;background-size: 100%'"></view>
					<button class="fw_list_btn" plain="true" type="primary" @click="zixun">立即咨询</button>
				</view>
			</view>
		</view>
		<view>
			<uni-popup ref="popup" type="center">
				<view>{{ tanchu_center }}</view>
				<view class="tanchu_red">{{ tanchu_red }}</view>
				<button class="wei_login_btn" type="primary" v-show="wei_login" @click="tanchu_c">立即登录</button>
			</uni-popup>
		</view>
	</view>
</template>

<script>
import uniPopup from '@/components/uni-popup/uni-popup.vue';
import Head from './../head/head.vue';
import { mapState, mapMutations } from 'vuex';
export default {
	components: {
		Head,
		uniPopup
	},
	computed: {
		...mapState(['img_url', 'u_name', 'api'])
	},
	data() {
		return {
			wei_login: true,
			fw_list: [
				{
					title: '工商服务',
					fw_list_center: [
						{
							center_title: '公司注册',
							center_url: 'index_tab_1.png'
						},
						{
							center_title: '工商变更',
							center_url: 'index_tab_2.png'
						},
						{
							center_title: '工商注销',
							center_url: 'index_tab_3.png'
						},
						{
							center_title: '更多服务',
							center_url: 'index_tab_19.png'
						}
					]
				},
				{
					title: '财税服务',
					fw_list_center: [
						{
							center_title: '财税管理',
							center_url: 'index_tab_4.png'
						},
						{
							center_title: '代理记账',
							center_url: 'index_tab_5.png'
						},
						{
							center_title: '合理避税',
							center_url: 'index_tab_6.png'
						},
						{
							center_title: '更多服务',
							center_url: 'index_tab_19.png'
						}
					]
				},
				{
					title: '创业扶持',
					fw_list_center: [
						{
							center_title: '创业孵化',
							center_url: 'index_tab_7.png'
						},
						{
							center_title: '创业优惠',
							center_url: 'index_tab_8.png'
						},
						{
							center_title: '资金支持',
							center_url: 'index_tab_9.png'
						},
						{
							center_title: '更多服务',
							center_url: 'index_tab_19.png'
						}
					]
				},
				{
					title: '特殊许可证',
					fw_list_center: [
						{
							center_title: '食品经营许可证',
							center_url: 'index_tab_10.png'
						},
						{
							center_title: '烟酒许可证',
							center_url: 'index_tab_11.png'
						},
						{
							center_title: '医疗器械经营许可证',
							center_url: 'index_tab_12.png'
						},
						{
							center_title: '更多服务',
							center_url: 'index_tab_19.png'
						}
					]
				},
				{
					title: '建厂选址',
					fw_list_center: [
						{
							center_title: '园区招商',
							center_url: 'index_tab_13.png'
						},
						{
							center_title: '企业落户',
							center_url: 'index_tab_14.png'
						},
						{
							center_title: '厂房租售',
							center_url: 'index_tab_15.png'
						},
						{
							center_title: '更多服务',
							center_url: 'index_tab_19.png'
						}
					]
				},
				{
					title: '更多服务',
					fw_list_center: [
						{
							center_title: '人事社保',
							center_url: 'index_tab_16.png'
						},
						{
							center_title: '商标专利',
							center_url: 'index_tab_17.png'
						},
						{
							center_title: '网站建设',
							center_url: 'index_tab_18.png'
						},
						{
							center_title: '更多服务',
							center_url: 'index_tab_19.png'
						}
					]
				}
			],
			forList: [
				{
					forListImg: 'for_list_1.png',
					forListText: '服务订单'
				},
				{
					forListImg: 'for_list_2.png',
					forListText: '企业服务'
				},
				{
					forListImg: 'for_list_3.png',
					forListText: '问题咨询'
				},
				{
					forListImg: 'for_list_4.png',
					forListText: '邀请豪礼'
				}
			],
			forBigList: [
				{
					forListImg: 'xzdljz_bk.jpg',
					forListText: '工商服务'
				},
				{
					forListImg: 'xzdljz_bk1.jpg',
					forListText: '财税服务'
				},
				{
					forListImg: 'xzdljz_bk4.jpg',
					forListText: '建厂选址'
				},
				{
					forListImg: 'xzdljz_bk.jpg',
					forListText: '网站建设'
				}
			],
			background: ['color1', 'color2', 'color3'],
			indicatorDots: true,
			autoplay: true,
			interval: 3000,
			duration: 500,
			btn_yzm: '获取验证码',
			sb_zt: '',
			vxin_lb: '',
			gs_name: '',
			user_name: '',
			user_phone: '',
			user_yzm: '',
			gs_name1: false,
			user_name1: false,
			user_phone1: false,
			user_yzm1: false,
			han: /^[\u4e00-\u9fa5]+$/,
			phone: /^1[34578]\d{9}$/,
			yzm: /^[0-9]{4}$/,
			tanchu_center: '',
			tanchu_red: ''
		};
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
		if (that.times_ !== '' && uni.getStorageSync('msg') !== '') {
			setTimeout(function() {
				that.$store.state.u_name = JSON.parse(uni.getStorageSync('msg')).u_name;
				that.tanchu_center = '登录成功';
				that.tanchu_red = '';
				that.wei_login = false;
				// that.$refs.popup.open();
			}, 1);
		} else {
			setTimeout(function() {
				that.tanchu_center = '登录领取优惠券';
				that.tanchu_red = '';
				that.wei_login = true;
				that.$refs.popup.open();
			}, 1);
		};
		// uni.request({
		// 	url: 'https://www.qsgl520.com/index.php?g=user&m=login&a=is_login',
		// 	data: {
		// 		time: that.times_
		// 	},
		// 	header: {
		// 		'content-type': 'application/x-www-form-urlencoded'
		// 	},
		// 	method: 'POST',
		// 	success: res => {
		// 		// console.log(res);
		// 		if (!res.data.id) {
		// 			this.tanchu_center = '登录领取优惠券';
		// 			this.tanchu_red = '';
		// 			this.$refs.popup.open();
		// 			this.wei_login = true;
		// 		} else {
		// 			this.tanchu_center = '登录成功';
		// 			this.tanchu_red = '';
		// 			this.$refs.popup.open();
		// 			this.wei_login = false;
		// 			that.times_ = uni.getStorageSync('session');
		// 			uni.request({
		// 				header: {
		// 					'content-type': 'application/x-www-form-urlencoded'
		// 				},
		// 				url: 'https://www.qsgl520.com/index.php?g=user&m=login&a=is_login',
		// 				data: {
		// 					time: that.times_
		// 				},
		// 				method: 'POST',
		// 				success: res => {
		// 					that.$store.state.u_name = res.data.user_login;
		// 				}
		// 			});
		// 		}
		// 	}
		// });
	},
	onShow() {
		// 	var that = this;
		// 	that.times_ = uni.getStorageSync('session');
		// 	uni.request({
		// 		header: {
		// 			'content-type': 'application/x-www-form-urlencoded'
		// 		},
		// 		url: 'https://www.qsgl520.com/index.php?g=user&m=login&a=is_login',
		// 		data: {
		// 			time: that.times_
		// 		},
		// 		method: 'POST',
		// 		success: res => {
		// 			// console.log(res);
		// 			if (!res.data.id) {
		// 				this.tanchu_center = '登录领取优惠券';
		// 				this.tanchu_red = '';
		// 				this.wei_login = true;
		// 				this.$refs.popup.open();
		// 			} else {
		// 				this.wei_login = false;
		// 			}
		// 		}
		// 	});
	},
	methods: {
		tanchu_c() {
			if ((this.tanchu_center = '登录领取优惠券')) {
				uni.switchTab({
					url: './../../pages/my/my',
					success: () => {
						this.$refs.popup.close();
					}
				});
			}
		},
		zixun() {
			uni.navigateTo({
				url: './../../pages/my/contact'
			});
		},
		gs_name_1() {
			if (this.gs_name == '' || !this.han.test(this.gs_name)) {
				this.tanchu_center = '请输入正确的公司名称！';
				this.tanchu_red = '（公司名称只能包含汉字！）';
				this.gs_name1 = false;
				// this.$refs.popup.open();
			} else {
				this.gs_name1 = true;
			}
		},
		user_name_1() {
			if (this.user_name == '' || !this.han.test(this.user_name)) {
				this.tanchu_center = '请输入您正确的姓名！';
				this.tanchu_red = '（个人姓名只能包含汉字！）';
				this.user_name1 = false;
			} else {
				this.user_name1 = true;
			}
		},
		user_phone_1() {
			if (this.user_phone == '' || !this.phone.test(this.user_phone)) {
				this.tanchu_center = '请输入您正确的手机号码！';
				this.tanchu_red = '（请输入11位有效号码！）';
				this.user_phone1 = false;
			} else {
				this.user_phone1 = true;
			}
		},
		user_yzm_1() {
			if (this.user_yzm == '' || !this.yzm.test(this.user_yzm)) {
				this.tanchu_center = '请输入您正确的手机验证码！';
				this.tanchu_red = '（请输入6位有效验证码！）';
				this.user_yzm1 = false;
			} else {
				this.user_yzm1 = true;
			}
		},
		tijiao_hm() {
			if (this.gs_name1 && this.user_name1 && this.user_phone1 && this.user_yzm1) {
				var that = this;
				uni.request({
					url: that.api + '/add_hm',
					method: 'POST',
					data: {
						company: that.gs_name,
						name: that.user_name,
						phone: that.user_phone
					},
					success: res => {
						if (res.data == 1) {
							that.tanchu_center = '恭喜您核名提交成功！';
							that.tanchu_red = '（我们将尽快与您取得联系，请您务必保持的手机畅通！）';
							that.$refs.popup.open();
						} else {
							that.tanchu_center = '提交失败！';
							that.tanchu_red = '';
							that.$refs.popup.open();
						}
					}
				});
			} else {
				this.tanchu_center = '请完成信息填写！';
				this.tanchu_red = '（以上信息均为必填项！）';
				this.$refs.popup.open();
			}
		},
		huoq_yzm() {
			if (this.btn_yzm == '获取验证码') {
				if (this.user_phone1) {
					this.btn_yzm = 60;
					var that = this;
					// uni.request({
					// 	url: 'https://www.qsgl520.com/index.php?g=user&m=index&a=get_phone_code', //仅为示例，并非真实接口地址。
					// 	method: 'GET',
					// 	data: {
					// 		mobile: that.user_phone
					// 	},
					// 	success: res => {
					// 		var time = setInterval(function() {
					// 			that.btn_yzm -= 1;
					// 			if (that.btn_yzm == 0) {
					// 				clearInterval(time);
					// 				that.btn_yzm = '获取验证码';
					// 			}
					// 		}, 1000);
					// 		that.tanchu_center = '短信验证码已发送，请注意查收！';
					// 		that.tanchu_red = '';
					// 		that.$refs.popup.open();
					// 		// 验证码保存
					// 		that.yzm_num = '';
					// 	}
					// });
				} else {
					this.tanchu_center = '请输入真实手机号码！';
					this.tanchu_red = '（手机号码不正确！）';
					this.$refs.popup.open();
				}
			} else {
				this.tanchu_center = '请您稍后重试！';
				this.tanchu_red = '';
				this.$refs.popup.open();
			}
		},
		changeIndicatorDots(e) {
			this.indicatorDots = !this.indicatorDots;
		},
		changeAutoplay(e) {
			this.autoplay = !this.autoplay;
		},
		intervalChange(e) {
			this.interval = e.target.value;
		},
		durationChange(e) {
			this.duration = e.target.value;
		}
	}
};
</script>

<style lang="less">
.fw_list {
	padding: 20upx 20upx;
	.fw_list_xq {
		zoom: 1;
		box-shadow: 0 0 10upx 0upx #e2e2e2;
		border-radius: 10upx;
		padding: 20upx 0;
		margin-top: 20upx;
		background: white;
		.fw_list_li {
			box-sizing: border-box;
			border-right: 1px solid #e2e2e2;
			float: left;
			width: 25%;
			padding: 20upx 0;
			.fw_list_p {
				height: 80upx;
				font-size: 30upx;
				color: #333;
				text-align: center;
			}
			.fw_list_img {
				width: 100upx;
				height: 130upx;
				margin: 20upx auto;
			}
			.fw_list_btn {
				font-size: 24upx;
				line-height: 40upx;
				width: 70%;
				padding: 0 10upx;
			}
		}
		.fw_list_li:last-child {
			border-right: none;
		}
	}
	.fw_list_xq::after {
		clear: both;
		display: block;
		content: '';
	}
}
.for_list {
	padding: 0 20upx;
	zoom: 1;
	.for_list_li {
		float: left;
		width: 25%;
		.for_list_li_img {
			width: 100upx;
			margin: 0 auto;
			border-radius: 10upx;
			uni-image {
				width: 100upx;
				height: 100upx;
				margin: 0 auto;
				display: block;
			}
			image {
				width: 100upx;
				height: 100upx;
				margin: 0 auto;
				display: block;
			}
		}
		.for_list_li_p {
			margin-top: 10upx;
			text-align: center;
			font-size: 26upx;
			color: #333;
		}
	}
}
.for_big_list {
	padding: 0 20upx;
	margin-top: 20upx;
	zoom: 1;
	.for_big_list_li {
		float: left;
		width: 50%;
		.for_big_list_li_img {
			width: 95%;
			margin: 10upx auto;
			overflow: hidden;
			border-radius: 10upx;
			.for_big_list_li_p {
				margin-top: 100upx;
				color: white;
				line-height: 60upx;
				font-size: 28upx;
				text-indent: 1em;
			}
		}
	}
}
.for_big_list::after {
	clear: both;
	display: block;
	content: '';
}
.for_list::after {
	clear: both;
	display: block;
	content: '';
}
.gs_name_phd {
	font-size: 24upx;
	color: #bfbfbf;
}
.tijiao_hm {
	width: 264upx;
	font-size: 26upx;
	float: left;
	height: 64upx;
	line-height: 64upx;
	margin-left: 180upx;
}

.ljhm_title {
	color: #333;
	height: 60upx;
	line-height: 60upx;
	font-size: 36upx;
	margin-left: 20upx;
	float: left;
}
.ljhm_title1 {
	color: #333;
	height: 60upx;
	line-height: 60upx;
	font-size: 32upx;
	margin-left: 20upx;
	float: left;
}
.huoq_yzm {
	width: 180upx;
	font-size: 24upx;
	float: left;
	height: 64upx;
	line-height: 64upx;
	margin-left: 20upx;
}
.cham_list_p {
	float: left;
	height: 64upx;
	line-height: 64upx;
	font-size: 28upx;
	margin-left: 20upx;
	color: #333;
}
.gs_name {
	width: 460upx;
	float: left;
	height: 60upx;
	line-height: 60upx;
	font-size: 32upx;
	border: 1px solid #8e8e8e;
	color: #333;
	border-radius: 5upx;
	text-indent: 0.5em;
	margin-left: 20upx;
	font-size: 24upx;
}
.gs_yanzm_p {
	margin-left: 30upx;
}
.gs_yanzm {
	margin-left: 38upx;
	width: 260upx;
}
.cham_gs_name {
	margin-top: 20upx;
	width: 100%;
	height: 64upx;
	zoom: 1;
}
.cham_gs_name::after {
	display: block;
	clear: both;
	content: '';
}

.uni-padding-wrap {
	position: relative;
	overflow: hidden;
	width: 100%;
	padding-top: 20upx;
	height: 950upx;
}
.swiper {
	height: 300upx;
}
.swiper-item {
	image {
		width: 100%;
		height: 300upx;
	}
}
.cham_list {
	width: 90%;
	margin: 0 auto;
	background: white;
	position: absolute;
	top: 400upx;
	left: 36upx;
	box-shadow: 0 0 10upx 0upx #b9b9b9;
	border-radius: 10upx;
	padding: 0 0 30upx;
}
</style>
