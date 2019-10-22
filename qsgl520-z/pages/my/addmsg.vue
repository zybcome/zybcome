<template>
	<view class="login_title">
		<view class="login_logo" :style="'background: url(' + img_url + 'qs_logo.png) no-repeat center;background-size: cover;'"></view>
		<view class="login_center">
			<view class="login_uesr">
				<view class="login_uesr_img" :style="'background: url(' + img_url + 'user_phone.png) rgba(255, 255, 255, 0.19) no-repeat center; background-size: 80%;'"></view>
				<input
					class="login_uesr_input"
					type="text"
					value=""
					@blur="user_nicename_2"
					v-model="user_nicename"
					:placeholder="user_nicename_v"
					placeholder-style="color:white"
				/>
			</view>
			<view class="login_uesr">
				<view class="login_uesr_img" :style="'background: url(' + img_url + 'user_phone.png) rgba(255, 255, 255, 0.19) no-repeat center; background-size: 80%;'"></view>
				<input class="login_uesr_input" type="text" value="" @blur="company_2" v-model="company" :placeholder="company_v" placeholder-style="color:white" />
			</view>
			<view class="login_uesr">
				<view class="login_uesr_img" :style="'background: url(' + img_url + 'user_phone.png) rgba(255, 255, 255, 0.19) no-repeat center; background-size: 80%;'"></view>
				<input class="login_uesr_input" type="text" value="" @blur="user_email_2" v-model="user_email" :placeholder="user_email_v" placeholder-style="color:white" />
			</view>
			<view class="login_uesr">
				<view class="login_uesr_img" :style="'background: url(' + img_url + 'user_phone.png) rgba(255, 255, 255, 0.19) no-repeat center; background-size: 80%;'"></view>
				<input class="login_uesr_input" type="text" value="" @blur="address_2" v-model="address" :placeholder="address_v" placeholder-style="color:white" />
			</view>
			<view class="login_uesr">
				<view class="login_uesr_btn" @tap="lj_wanshan">{{ btn_an }}</view>
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
			user_nicename: '',
			company: '',
			user_email: '',
			address: '',
			user_nicename_1: false,
			company_1: false,
			user_email_1: false,
			address_1: false,
			times_: '',
			u_id: '',
			user_nicename_v: '姓名',
			company_v: '公司名称',
			user_email_v: '电子邮箱',
			address_v: '联系地址',
			btn_an: '立即完善'
		};
	},
	onShow() {
		var that = this;
		that.times_ = uni.getStorageSync('token');
		uni.request({
			header: {
				authorization: that.times_,
				'content-type': 'application/x-www-form-urlencoded'
			},
			url: that.api + '/quer_id',
			method: 'POST',
			data: {
				u_id: JSON.parse(uni.getStorageSync('msg')).u_id
			},
			success: res => {
				uni.setStorageSync('msg', JSON.stringify(res.data[0]));
				that.$store.state.u_name = JSON.parse(uni.getStorageSync('msg')).u_name;
				if (JSON.parse(uni.getStorageSync('msg')).name == undefined && uni.getStorageSync('msg').company == undefined && uni.getStorageSync('msg').u_email == undefined && uni.getStorageSync('msg').u_address == undefined) {
					that.btn_an = '立即完善';
				} else {
					if (that.user_nicename_v != undefined) {
						that.user_nicename_v = JSON.parse(uni.getStorageSync('msg')).name;
						that.btn_an = '立即修改';
					}
					if (that.company_v != undefined) {
						that.company_v = JSON.parse(uni.getStorageSync('msg')).company;
						that.btn_an = '立即修改';
					}
					if (that.user_email_v != undefined) {
						that.user_email_v = JSON.parse(uni.getStorageSync('msg')).u_email;
						that.btn_an = '立即修改';
					}
					if (that.address_v != undefined) {
						that.address_v = JSON.parse(uni.getStorageSync('msg')).u_address;
						that.btn_an = '立即修改';
					}
				}
			}
		});
	},

	methods: {
		lj_wanshan() {
			var that = this;
			that.times_ = uni.getStorageSync('token');
			if (that.times_ !== '' && uni.getStorageSync('msg') !== '') {
				if (this.user_nicename_1 && this.company_1 && this.user_email_1 && this.address_1) {
					uni.request({
						header: {
							authorization: that.times_,
							'content-type': 'application/x-www-form-urlencoded'
						},
						url: that.api + '/add_msg',
						method: 'POST',
						data: {
							u_id: JSON.parse(uni.getStorageSync('msg')).u_id,
							name: that.user_nicename,
							company: that.company,
							u_email: that.user_email,
							u_address: that.address
						},
						success: res => {
							that.tanchu_center = '恭喜您资料完善成功！';
							that.tanchu_red = '';
							this.$refs.popup.open();
						}
					});
				} else {
					this.tanchu_center = '请输入正确格式添加信息！';
					this.tanchu_red = '';
					this.$refs.popup.open();
				}
			} else {
				this.tanchu_center = '请登录！';
				this.tanchu_red = '';
				this.$refs.popup.open();
			}
		},
		user_nicename_2() {
			if (this.user_nicename == '') {
				this.tanchu_center = '输入的姓名不能为空！';
				this.tanchu_red = '';
				this.user_nicename_1 = false;
				// this.$refs.popup.open();
			} else {
				this.user_nicename_1 = true;
			}
		},
		company_2() {
			if (this.company == '') {
				this.tanchu_center = '输入的公司名称不能为空！';
				this.tanchu_red = '';
				this.company_1 = false;
				// this.$refs.popup.open();
			} else {
				this.company_1 = true;
			}
		},
		user_email_2() {
			if (this.user_email == '') {
				this.tanchu_center = '输入的邮箱不能为空！';
				this.tanchu_red = '';
				this.user_email_1 = false;
				// this.$refs.popup.open();
			} else {
				this.user_email_1 = true;
			}
		},
		address_2() {
			if (this.address == '') {
				this.tanchu_center = '输入的地址不能为空！';
				this.tanchu_red = '';
				this.address_1 = false;
				// this.$refs.popup.open();
			} else {
				this.address_1 = true;
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
