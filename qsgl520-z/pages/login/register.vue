<template>
	<view class="login_title">
		<view class="login_logo" :style="'background: url(' + img_url + 'qs_logo.png) no-repeat center;background-size: cover;'"></view>
		<view class="login_center">
			<view class="login_uesr">
				<view class="login_uesr_img" :style="'background: url(' + img_url + 'user_name.png) rgba(255, 255, 255, 0.19) no-repeat center;background-size: 80%;'"></view>
				<input class="login_uesr_input" type="text" v-model="user_name" @blur="user_name_2" placeholder="输入用户名" placeholder-style="color:white" />
			</view>
			<view class="login_uesr">
				<view class="login_phone_img" :style="'background: url(' + img_url + 'user_phone.png) rgba(255, 255, 255, 0.19) no-repeat center;background-size: 80%;'"></view>
				<input class="login_uesr_input" type="text" v-model="user_phone" @blur="user_phone_2" placeholder="输入手机号" placeholder-style="color:white" />
			</view>
			<view class="login_uesr">
				<view class="login_yzm_img" :style="'background: url(' + img_url + 'user_yzm.png) rgba(255, 255, 255, 0.19) no-repeat center;background-size: 80%;'"></view>
				<input class="login_yzm_input" type="text" v-model="user_yzm" @blur="user_yzm_2" placeholder="输入验证码" placeholder-style="color:white" />
				<button class="login_yzm_btn" @click="huoq_yzm" plain="true">{{ btn_yzm }}</button>
			</view>
			<view class="login_uesr">
				<view class="login_psw_img" :style="'background: url(' + img_url + 'user_psw.png) rgba(255, 255, 255, 0.19) no-repeat center;background-size: 80%;'"></view>
				<input class="login_psw_input" type="password" v-model="user_psw" @blur="user_psw_2" placeholder="请输入密码" placeholder-style="color:white" />
			</view>
			<view class="login_uesr">
				<view class="login_psw_img" :style="'background: url(' + img_url + 'user_psw.png) rgba(255, 255, 255, 0.19) no-repeat center;background-size: 80%;'"></view>
				<input class="login_psw_input" type="password" v-model="user_psw1" @blur="user_psw1_2" placeholder="请确认输入密码" placeholder-style="color:white" />
			</view>
			<view class="login_uesr"><view class="login_uesr_btn" @click="lj_register">立即注册</view></view>
			<view class="login_uesr">
				<navigator url="login" class="login_uesr_p1">立即登录</navigator>
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
		...mapState(['img_url', 'api'])
	},
	components: {
		uniPopup
	},
	data() {
		return {
			user_name: '',
			user_phone: '',
			user_yzm: '',
			user_psw: '',
			user_psw1: '',
			user_name_1: false,
			user_phone_1: false,
			user_yzm_1: false,
			user_psw_1: false,
			user_psw1_1: false,
			btn_yzm: '获取验证码',
			yzm_num: '',
			yzm: false,
			tanchu_center: '',
			tanchu_red: '',
			user_name_zz: /^[-_a-zA-Z0-9]{4,16}$/,
			user_phone_zz: /^1[34578]\d{9}$/,
			user_yzm_zz: /^[0-9]{4}$/,
			user_psw_zz: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,}$/,
			times_: ''
		};
	},
	onLaunch: function() {
		// uni.request({
		// 	header: {
		// 		'content-type': 'application/x-www-form-urlencoded'
		// 	},
		// 	url: 'https://www.qsgl520.com/index.php?g=user&m=login&a=is_login',
		// 	method: 'POST',
		// 	success: res => {
		// 		console.log(res);
		// 	}
		// });
	},
	methods: {
		lj_register() {
			// console.log(this.user_name_1, this.user_phone_1, this.user_yzm_1, this.user_psw_1, this.user_psw1_1);
			var that = this;
			that.times_ = uni.getStorageSync('token');
			if (this.user_name_1 && this.user_phone_1 && this.user_yzm_1 && this.user_psw_1 && this.user_psw1_1) {
				uni.request({
					header: {
						authorization: that.times_,
						'content-type': 'application/x-www-form-urlencoded'
					},
					url: that.api + '/register',
					method: 'POST',
					data: {
						u_name: that.user_name,
						u_phone: that.user_phone,
						u_psw: that.user_psw1
					},
					success: res => {
						if (res.data == 1) {
							that.tanchu_center = '恭喜您注册成功，1秒后自动跳转至登录页面！';
							that.tanchu_red = '';
							that.$refs.popup.open();
							setTimeout(function(){
								uni.navigateTo({
									url: './../../pages/login/login',
									success() {}
								});
							},1000);
						} else {
							that.tanchu_center = res.data;
							that.tanchu_red = '';
							that.$refs.popup.open();
						}
					}
				});
			} else {
				this.tanchu_center = '请正确填写注册信息！';
				this.tanchu_red = '（按要求填写！）';
				this.$refs.popup.open();
			}
		},
		user_name_2() {
			if (this.user_name == '' || !this.user_name_zz.test(this.user_name)) {
				this.tanchu_center = '请输入您正确的用户名！';
				this.tanchu_red = '（个人姓名只能包含数字、字母、下划线！）';
				this.user_name_1 = false;
				// this.$refs.popup.open();
			} else {
				this.user_name_1 = true;
			}
		},
		user_phone_2() {
			if (this.user_phone == '' || !this.user_phone_zz.test(this.user_phone)) {
				this.tanchu_center = '请输入您正确的手机号码！';
				this.tanchu_red = '（请输入11位有效号码！）';
				this.user_phone_1 = false;
				// this.$refs.popup.open();
			} else {
				this.user_phone_1 = true;
			}
		},
		user_yzm_2() {
			if (this.user_yzm == '' || !this.user_yzm_zz.test(this.user_yzm)) {
				this.tanchu_center = '请输入您正确的手机验证码！';
				this.tanchu_red = '（请输入6位有效验证码！）';
				this.user_yzm_1 = false;
				// this.$refs.popup.open();
			} else {
				this.user_yzm_1 = true;
			}
		},
		user_psw_2() {
			if (this.user_psw == '' || !this.user_psw_zz.test(this.user_psw)) {
				this.tanchu_center = '请输入密码！';
				this.tanchu_red = '（请输入只包含数字、字母、且不少于6位的密码！）';
				this.user_psw_1 = false;
				// this.$refs.popup.open();
			} else {
				this.user_psw_1 = true;
			}
		},
		user_psw1_2() {
			if (this.user_psw1 !== this.user_psw) {
				this.tanchu_center = '两次输入密码不相同！';
				this.tanchu_red = '（请输入只包含数字、字母、且不少于6位的密码！）';
				this.user_psw1_1 = false;
				// this.$refs.popup.open();
			} else {
				this.user_psw1_1 = true;
			}
		},
		huoq_yzm() {
			if (this.btn_yzm == '获取验证码') {
				if (this.user_phone_1) {
					this.btn_yzm = 60;
					var that = this;
					// uni.request({
					// 	url: 'https://www.qsgl520.com/index.php?g=user&m=index&a=get_phone_code', //仅为示例，并非真实接口地址。
					// 	method: 'GET',
					// 	data: {
					// 		mobile: that.user_phone
					// 	},
					// 	success: res => {
					var time = setInterval(function() {
						that.btn_yzm -= 1;
						if (that.btn_yzm == 0) {
							clearInterval(time);
							that.btn_yzm = '获取验证码';
						}
					}, 1000);
					// 		that.tanchu_center = '短信验证码已发送，请注意查收！';
					// 		that.tanchu_red = '';
					// 		that.$refs.popup.open();
					// 		// 验证码保存
					// 		that.yzm_num = '';
					// 		// console.log(res);
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
			}
			.login_phone_img {
				float: left;
				width: 60upx;
				height: 60upx;
			}
			.login_yzm_img {
				float: left;
				width: 60upx;
				height: 60upx;
			}
			.login_psw_img {
				float: left;
				width: 60upx;
				height: 60upx;
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
			.login_yzm_input {
				background: rgba(255, 255, 255, 0.19);
				width: 180upx;
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
				border: none;
			}
			.login_yzm_btn {
				width: 140upx;
				color: white;
				font-size: 24upx;
				height: 60upx;
				text-align: center;
				line-height: 60upx;
				border: 1px solid rgba(255, 255, 255, 0.19);
				padding: 0 5upx;
				margin-left: 10upx;
				float: left;
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
