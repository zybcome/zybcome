<template>
	<view class="login_title">
		<view class="login_logo" :style="'background: url(' + img_url + 'qs_logo.png) no-repeat center;background-size: cover;'"></view>
		<view class="login_center">
			<view class="login_uesr">
				<view class="login_uesr_img" :style="'background: url(' + img_url + 'user_phone.png) rgba(255, 255, 255, 0.19) no-repeat center; background-size: 80%;'"></view>
				<input class="login_uesr_input" type="text" value="" @blur="user_phone_2" v-model="user_phone" placeholder="输入用户名/手机号码" placeholder-style="color:white" />
			</view>
			<view class="login_uesr">
				<view class="login_psw_img" :style="'background: url(' + img_url + 'user_psw.png) rgba(255, 255, 255, 0.19) no-repeat center; background-size: 80%;'"></view>
				<input class="login_psw_input" type="password" value="" @blur="user_psw_2" v-model="user_psw" placeholder="请输入密码" placeholder-style="color:white" />
			</view>
			<view class="login_uesr"><view class="login_uesr_btn" @tap="lj_login">立即登录</view></view>
			<view class="login_uesr">
				<navigator url="register" class="login_uesr_p1">立即注册</navigator>
				<navigator url="forgetPsw" class="login_uesr_p2">忘记密码</navigator>
			</view>
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
import { mapState, mapMutations } from 'vuex';
export default {
	computed: {
		...mapState(['img_url', 'u_name', 'api'])
	},
	components: {
		uniPopup
	},
	data() {
		return {
			tanchu_center: '',
			tanchu_red: '',
			user_psw: '',
			user_phone: '',
			user_phone_1: false,
			user_psw_1: false,
			times_: ''
		};
	},
	onLoad() {
	},

	methods: {
		lj_login() {
			var that = this;
			if (that.user_phone_1 && that.user_psw_1) {
				uni.request({
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					url: that.api + '/login',
					method: 'POST',
					data: {
						u_name: that.user_phone,
						u_psw: that.user_psw
					},
					success: res => {
						if (res.data == '输入密码错误！') {
							that.tanchu_center = '输入密码错误！，请重新输入！';
							that.tanchu_red = '';
							that.$refs.popup.open();
						}else if (res.data == '用户名或手机号码不存在！') {
							that.tanchu_center = '用户名或手机号码不存在！，请重新输入！';
							that.tanchu_red = '';
							that.$refs.popup.open();
						} else if (res.data) {
							uni.setStorageSync('token', res.data.token);
							uni.setStorageSync('msg', JSON.stringify(res.data.data));
							that.$store.state.u_name = JSON.parse(uni.getStorageSync('msg')).u_name;
							that.times_ = uni.getStorageSync('token');
							uni.switchTab({
								url: './../../pages/index/index',
								success() {}
							});
						}
					}
				});
			} else {
				this.tanchu_center = '请输入正确格式的手机号、密码！';
				this.tanchu_red = '';
				this.$refs.popup.open();
			}
		},
		user_phone_2() {
			if (this.user_phone == '') {
				this.tanchu_center = '输入的手机号不能为空！';
				this.tanchu_red = '';
				this.user_phone_1 = false;
			} else {
				this.user_phone_1 = true;
			}
		},
		user_psw_2() {
			if (this.user_psw == '') {
				this.tanchu_center = '输入的密码不能为空！';
				this.tanchu_red = '';
				this.user_spw_1 = false;
			} else {
				this.user_psw_1 = true;
			}
		}
	}
};
</script>

<style lang="less">
.login_title {
	width: 100%;
	height: 100%;
	overflow: hidden;
	.login_logo {
		width: 50%;
		height: 100upx;
		background-size: cover;
		margin: 20upx auto;
	}
	.login_center {
		margin: 30upx auto;
		padding: 80upx 0;
		background: #0e6eb8;
		.login_uesr {
			padding: 20upx 170upx;
			zoom: 1;
			.login_uesr_p1 {
				color: white;
				font-size: 24upx;
				float: left;
			}
			.login_uesr_p2 {
				color: white;
				font-size: 24upx;
				float: right;
			}
			.login_uesr_img {
				float: left;
				width: 60upx;
				height: 60upx;
				// background: url(./../../static/img/user_phone.png) #ffffff30 no-repeat center;
				background-size: 80%;
			}
			.login_psw_img {
				background: rgba(255, 255, 255, 0.19);
				float: left;
				width: 60upx;
				height: 60upx;
				// background: url(./../../static/img/user_psw.png) #ffffff30 no-repeat center;
				background-size: 80%;
			}
			.login_uesr_input {
				background: rgba(255, 255, 255, 0.19);
				width: 330upx;
				float: left;
				margin-left: 20upx;
				height: 60upx;
				border: none;
				color: white;
				text-indent: 1em;
				font-size: 24upx;
			}
			.login_psw_input {
				background: rgba(255, 255, 255, 0.19);
				width: 330upx;
				float: left;
				margin-left: 20upx;
				height: 60upx;
				border: none;
				color: white;
				text-indent: 1em;
				font-size: 24upx;
			}
			.login_uesr_btn {
				background: rgba(255, 255, 255, 0.19);
				color: white;
				font-size: 30upx;
				height: 80upx;
				text-align: center;
				line-height: 80upx;
			}
		}
		.login_uesr::after {
			content: '';
			clear: both;
			display: block;
		}
	}
}
</style>
