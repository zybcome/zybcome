<template>
	<view class="footer_">
		<view class="contact_as">
			<view class="public_tt">
				<view class="public_shu"></view>
				<view class="public_title">联系我们</view>
			</view>
			<view class="contact_as_ul">
				<view class="contact_as_li">
					<view class="contact_as_li_left"><view class="contact_as_li_left_p">公司名称:</view></view>
					<view class="contact_as_li_right"><input class="contact_as_li_right_input" type="text" v-model="company" placeholder="如：阿里巴巴网络科技有限公司" /></view>
				</view>
				<view class="contact_as_li">
					<view class="contact_as_li_left"><view class="contact_as_li_left_p">姓名:</view></view>
					<view class="contact_as_li_right"><input class="contact_as_li_right_input" type="text" v-model="full_name" placeholder="请输入您的真实姓名" /></view>
				</view>
				<view class="contact_as_li">
					<view class="contact_as_li_left"><view class="contact_as_li_left_p">电话:</view></view>
					<view class="contact_as_li_right"><input class="contact_as_li_right_input" type="text" v-model="mobile" placeholder="请输入您的手机号码" /></view>
				</view>
				<view class="contact_as_li">
					<view class="contact_as_li_left"><view class="contact_as_li_left_p">请您留言:</view></view>
					<view class="contact_as_li_right">
						<textarea class="contact_as_li_right_text" id="" cols="2" rows="5" v-model="msg" placeholder="请简要输入您的需求"></textarea>
					</view>
				</view>
				<view class="contact_as_li"><view class="tijiao_liuy" @click="tijiao_">立即提交</view></view>
			</view>
		</view>
		<view class="qscy_fw">
			<view class="public_tt">
				<view class="public_shu"></view>
				<view class="public_title">企山创业园服务保障</view>
			</view>
			<view class="qscy_fw_ul">
				<view v-for="it in fubz" class="qscy_fw_li">
					<view class="qscy_fw_img" :style="'background:url(' + img_url + it.url + ') center no-repeat;background-size: cover'"></view>
					<view class="qscy_fw_p1">{{ it.title }}</view>
					<view class="qscy_fw_p2">{{ it.center }}</view>
				</view>
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
import uniDrawer from '@/components/uni-drawer/uni-drawer.vue';
import uniPopup from '@/components/uni-popup/uni-popup.vue';
import FwList from '@/pages/fwList/fwList.vue';
import { mapState, mapMutations } from 'vuex';
export default {
	computed: {
		...mapState(['img_url', 'api'])
	},
	components: { uniDrawer, FwList, uniPopup },
	data() {
		return {
			fubz: [
				{
					url: '3_jingyan.png',
					title: '经验丰富',
					center: '多年经验为您保驾护航'
				},
				{
					url: '3_fuwu.png',
					title: '一站式服务',
					center: '各个环节保障服务顺畅'
				},
				{
					url: '3_gaoxiao.png',
					title: '一对一高效服务',
					center: '专业对接人员,帮你节省不必要环节'
				},
				{
					url: '3_zhuanye.png',
					title: '专业品质',
					center: '服务均由3年以上资深人士操作保障品质'
				},
				{
					url: '3_baomi.png',
					title: '信息保密',
					center: '自有服务器保障客户数据安全专业人士保障客户资料免遭外泄'
				},
				{
					url: '3_quancheng.png',
					title: '全程保密',
					center: '售前咨询,下单5分钟内响应关键环节100%提醒'
				}
			],
			times_: '',
			company: '',
			full_name: '',
			mobile: '',
			msg: '',
			tanchu_center: '',
			tanchu_red: ''
		};
	},
	onLoad() {},
	methods: {
		tijiao_() {
			if (this.company == '' || this.full_name == '' || this.mobile == '' || this.msg == '') {
				this.tanchu_center = '请填写完整的信息！';
				this.tanchu_red = '(不能为空)';
				this.$refs.popup.open();
			} else {
				var that = this;
				uni.request({
					url: that.api + '/add_hm',
					method: 'POST',
					data: {
						company: that.company,
						name: that.full_name,
						phone: that.mobile,
						leav: that.msg
					},
					success: res => {
						if (res.data == 1) {
							that.tanchu_center = '恭喜您提交成功！';
							that.tanchu_red = '（我们将尽快与您取得联系，请您务必保持的手机畅通！）';
							that.$refs.popup.open();
						} else {
							that.tanchu_center = '提交失败！';
							that.tanchu_red = '';
							that.$refs.popup.open();
						}
					}
				});
			}
		}
	}
};
</script>

<style lang="less">
.contact_as {
	width: 90%;
	margin: 40upx auto;
	border-radius: 10upx;
	overflow: hidden;
	box-shadow: 0 0 10upx 0upx #e2e2e2;
	.contact_as_ul {
		background: white;
		overflow: hidden;
		.contact_as_li {
			width: 100%;
			display: block;
			overflow: hidden;
			margin-top: 40upx;
			.contact_as_li_left {
				width: 25%;
				float: left;
				.contact_as_li_left_p {
					text-align: right;
					font-size: 32upx;
					line-height: 60upx;
				}
			}
			.contact_as_li_right {
				width: 75%;
				float: left;
				.contact_as_li_right_input {
					width: 80%;
					border-bottom: 1px solid #999999;
					height: 60upx;
					box-sizing: border-box;
					font-size: 28upx;
					margin-left: 20upx;
					padding-left: 10upx;
				}
				.contact_as_li_right_text {
					padding: 10upx;
					width: 80%;
					border: 1px solid #999999;
					box-sizing: border-box;
					font-size: 28upx;
					margin-left: 20upx;
				}
			}
			.tijiao_liuy {
				width: 45%;
				border: #007aff 1px solid;
				text-align: center;
				margin: 0 auto;
				border-radius: 30upx;
				height: 60upx;
				background: #007aff;
				line-height: 60upx;
				color: white;
				margin-bottom: 40upx;
				font-size: 30upx;
			}
		}
	}
}
.qscy_fw {
	width: 90%;
	margin: 40upx auto;
	border-radius: 10upx;
	overflow: hidden;
	box-shadow: 0 0 10upx 0upx #e2e2e2;
	.qscy_fw_ul {
		background: white;
		overflow: hidden;
		.qscy_fw_li {
			width: 50%;
			display: block;
			padding: 20upx 0;
			float: left;
			.qscy_fw_img {
				width: 100upx;
				height: 100upx;
				display: block;
				margin: 20upx auto;
			}
			.qscy_fw_p1 {
				text-align: center;
				font-size: 32upx;
				margin-top: 20upx;
				margin-bottom: 20upx;
			}
			.qscy_fw_p2 {
				text-align: center;
				font-size: 24upx;
				margin-bottom: 20upx;
				color: #007aff;
				padding: 0 28upx;
			}
		}
	}
}
</style>
