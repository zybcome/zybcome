<template>
	<view>
		<publicTitle publicTitleImg="index_banner11.jpg"></publicTitle>
		<view class="rssb_sbfw">
			<view class="public_tt">
				<view class="public_shu"></view>
				<view class="public_title">社保服务</view>
			</view>
			<view class="rssb_sbfw_ul">
				<view class="rssb_sbfw_li">
					<view class="rssb_sbfw_top">
						<view class="rssb_sbfw_top_bk">
							<view class="rssb_sbfw_top_bk_img" :style="'background: white url(' + img_url + 'sbgl_tg.png) center no-repeat;background-size: 85%'"></view>
							<view class="rssb_sbfw_top_bk_title">社保托管(企业)</view>
						</view>
					</view>
					<view class="rssb_sbfw_center">
						<view class="rssb_sbfw_center_li"><view class="rssb_sbfw_center_li_p">为公司开社保专户</view></view>
						<view class="rssb_sbfw_center_li"><view class="rssb_sbfw_center_li_p">按月处理养老、医疗、失业、工伤等社保相关事宜</view></view>
						<view class="rssb_sbfw_center_li"><view class="rssb_sbfw_center_li_p">为企业提供增员、减员手续办理</view></view>
						<view class="rssb_sbfw_center_li"><view class="rssb_sbfw_center_li_p">明细按月报制送</view></view>
						<view class="rssb_sbfw_center_li"><view class="rssb_sbfw_center_li_p">社会保险年度申报</view></view>
						<view class="rssb_sbfw_center_li"><view class="rssb_sbfw_center_li_p">社保政策资讯等</view></view>
					</view>
				</view>
				<view class="rssb_sbfw_li">
					<view class="rssb_sbfw_top">
						<view class="rssb_sbfw_top_bk">
							<view class="rssb_sbfw_top_bk_img" :style="'background: white url(' + img_url + 'sbgl_gk.png) center no-repeat;background-size: 75%'"></view>
							<view class="rssb_sbfw_top_bk_title">社保挂靠(企业)</view>
						</view>
					</view>
					<view class="rssb_sbfw_center">
						<view class="rssb_sbfw_center_li"><view class="rssb_sbfw_center_li_p">可为在人力代理公司社保账户下的人员缴纳社保</view></view>
						<view class="rssb_sbfw_center_li"><view class="rssb_sbfw_center_li_p">由人力代理公司名义开户为其处理入库人员社保事宜</view></view>
						<view class="rssb_sbfw_center_li"><view class="rssb_sbfw_center_li_p">明细按月报制送</view></view>
						<view class="rssb_sbfw_center_li"><view class="rssb_sbfw_center_li_p">社会保险年度申报</view></view>
						<view class="rssb_sbfw_center_li"><view class="rssb_sbfw_center_li_p">社保政策咨询</view></view>
					</view>
				</view>
			</view>
		</view>
		<view class="rssb_sbhc">
			<view class="public_tt">
				<view class="public_shu"></view>
				<view class="public_title">企业缴社保的好处</view>
			</view>
			<view class="rssb_sbhc_ul">
				<view v-for="it in zcdx" class="rssb_sbhc_li">
					<view class="rssb_sbhc_img" :style="'background:url(' + img_url + it.url + ') center no-repeat;background-size: cover'"></view>
					<view class="rssb_sbhc_p1">{{ it.title }}</view>
					<view class="rssb_sbhc_p2">{{ it.center }}</view>
				</view>
			</view>
		</view>
		<view class="sbzl_weys">
			<view class="public_tt">
				<view class="public_shu"></view>
				<view class="public_title">我们的优势</view>
			</view>
			<view class="sbzl_weys_ul">
				<view v-for="it in weys" class="sbzl_weys_li">
					<view class="sbzl_weys_bk">
						<view class="sbzl_weys_title">{{ it.title }}</view>
						<view class="sbzl_weys_p1">{{ it.p1 }}</view>
						<view class="sbzl_weys_p2">{{ it.p2 }}</view>
						<view class="sbzl_weys_y"></view>
					</view>
				</view>
			</view>
		</view>
		<view class="rssb_fwlc">
			<view class="public_tt">
				<view class="public_shu"></view>
				<view class="public_title">社保服务流程</view>
			</view>
			<view class="rssb_fwlc_tit_img" :style="'background:url(' + img_url + 'csgl_dljz_zsm.png) bottom center/100% no-repeat'"></view>
			<view class="rssb_fwlc_ul">
				<view class="rssb_fwlc_li" v-for="it in dljz">
					<view class="rssb_fwlc_num">{{ it.num }}</view>
					<view class="rssb_fwlc_p">{{ it.title }}</view>
				</view>
			</view>
		</view>
		<view class="rssb_gdfw">
			<view class="public_tt">
				<view class="public_shu"></view>
				<view class="public_title">我们还能为您提供更多服务</view>
			</view>
			<view class="rssb_gdfw_ul">
				<view v-for="it in gdfw" class="rssb_gdfw_li">
					<view class="rssb_gdfw_img" :style="'background:url(' + img_url + it.url + ') center no-repeat;background-size: cover'"></view>
					<view class="rssb_gdfw_p1">{{ it.title }}</view>
				</view>
			</view>
		</view>
		<Footer></Footer>
	</view>
</template>

<script>
import publicTitle from './../head/publicTitle.vue';
import Footer from './../footer/footer.vue';
import { mapState, mapMutations } from 'vuex';
export default {
	components: {
		publicTitle,
		Footer
	},
	computed: {
		...mapState(['img_url'])
	},
	data() {
		return {
			zcdx: [
				{
					url: 'sbzcdx_1.png',
					title: '政策规定',
					center: '防控风险'
				},
				{
					url: 'sbzcdx_2.png',
					title: '见底劳务',
					center: '用工风险'
				},
				{
					url: 'sbzcdx_3.png',
					title: '省去麻烦',
					center: '有效提升工作效率'
				}
			],
			weys: [
				{
					title: '高效率',
					p1: '即办即生效',
					p2: '方便快捷'
				},
				{
					title: '无隐形收费',
					p1: '一对一服务',
					p2: '价格透明'
				},
				{
					title: '轻松办理',
					p1: '一站式服务，电子合同',
					p2: '永久保存，省时省心'
				},
				{
					title: '品牌保证',
					p1: '12年服务外包管理经验',
					p2: '专业顾问就对靠谱'
				},
				{
					title: '售后保障',
					p1: '贴心售后',
					p2: '及时发送最新政策'
				},
				{
					title: '全国覆盖',
					p1: '全国50+城市',
					p2: '均可办理'
				}
			],
			dljz: [
				{
					num: '1',
					title: '签订协议'
				},
				{
					num: '2',
					title: '收集客户资料'
				},
				{
					num: '3',
					title: '办理开户'
				},
				{
					num: '4',
					title: '生成账单'
				},
				{
					num: '5',
					title: '代码及发票开据'
				},
				{
					num: '6',
					title: '开始社保服务'
				}
			],
			gdfw: [
				{
					url: 'rs_geren.png',
					title: '个税筹划'
				},
				{
					url: 'rs_canjiren.png',
					title: '残疾人就业安置'
				},
				{
					url: 'rs_baoxian.png',
					title: '商业保险'
				}
			]
		};
	},
	methods: {}
};
</script>

<style lang="less">
.rssb_sbfw {
	width: 90%;
	margin: 0 auto;
	margin-top: -40upx;
	border-radius: 10upx;
	overflow: hidden;
	box-shadow: 0 0 10upx 0upx #e2e2e2;
	background: white;
	.rssb_sbfw_ul {
		overflow: hidden;
		background: white;
		overflow: hidden;
		.rssb_sbfw_li {
			width: 95%;
			margin: 10upx auto;
			.rssb_sbfw_top {
				background: #1977c6;
				height: 80upx;
				.rssb_sbfw_top_bk {
					width: 340upx;
					color: white;
					margin: 0 auto;
					overflow: hidden;
					.rssb_sbfw_top_bk_img {
						width: 70upx;
						height: 70upx;
						border-radius: 50%;
						margin-top: 5upx;
						float: left;
					}
					.rssb_sbfw_top_bk_title {
						line-height: 80upx;
						float: left;
						margin-left: 15upx;
					}
				}
			}
			.rssb_sbfw_center {
				overflow: hidden;
				.rssb_sbfw_center_li {
					width: 100%;
					float: left;
					border: 1px solid #1977c6;
					border-top: none;
					box-sizing: border-box;
					overflow: hidden;
					.rssb_sbfw_center_li_p {
						text-align: center;
						line-height: 60upx;
						font-size: 26upx;
					}
				}
			}
		}
	}
}
.rssb_sbhc {
	width: 90%;
	margin: 40upx auto;
	border-radius: 10upx;
	overflow: hidden;
	box-shadow: 0 0 10upx 0upx #e2e2e2;
	background: white;
	.rssb_sbhc_ul {
		background: white;
		zoom: 1;
		overflow: hidden;
		.rssb_sbhc_li {
			width: 90%;
			margin: 10upx auto;
			overflow: hidden;
			border: 1px solid #1977c6;
			border-radius: 10upx;
			.rssb_sbhc_img {
				width: 20%;
				height: 126upx;
				display: block;
				margin: 20upx auto;
			}
			.rssb_sbhc_p1 {
				text-align: center;
				font-size: 40upx;
				font-weight: bold;
				color: #1977c6;
			}
			.rssb_sbhc_p2 {
				text-align: center;
				font-size: 24upx;
				margin-bottom: 40upx;
				line-height: 60upx;
			}
		}
	}
}
.sbzl_weys {
	width: 90%;
	margin: 0 auto;
	margin-top: 40upx;
	border-radius: 10upx;
	overflow: hidden;
	box-shadow: 0 0 10upx 0upx #e2e2e2;
	background: white;
	.sbzl_weys_ul {
		overflow: hidden;
		background: white;
		.sbzl_weys_li {
			width: 50%;
			margin: 20upx auto;
			float: left;
			.sbzl_weys_bk {
				width: 95%;
				margin: 0 auto;
				background: #f39800;
				border-radius: 10upx;
				box-sizing: border-box;
				text-align: center;
				overflow: hidden;
				position: relative;
				color: white;
				.sbzl_weys_title {
					font-size: 32upx;
					line-height: 60upx;
					font-weight: bold;
					margin: 10upx 0;
				}
				.sbzl_weys_p1 {
					font-size: 26upx;
					line-height: 50upx;
				}
				.sbzl_weys_p2 {
					font-size: 26upx;
					line-height: 50upx;
					margin-bottom: 10upx;
				}
				.sbzl_weys_y {
					position: absolute;
					width: 25upx;
					height: 25upx;
					top: 10px;
					left: 10px;
					border-radius: 50%;
					background: white;
				}
			}
		}
	}
}
.rssb_fwlc {
	width: 90%;
	margin: 40upx auto;
	border-radius: 10upx;
	overflow: hidden;
	box-shadow: 0 0 10upx 0upx #e2e2e2;
	.rssb_fwlc_tit_img {
		width: 100%;
		height: 500upx;
	}
	.rssb_fwlc_ul {
		overflow: hidden;
		background: white;
		.rssb_fwlc_li {
			width: 50%;
			float: left;
			overflow: hidden;
			margin: 20upx 0;
			background: #f5f5f5;
			.rssb_fwlc_num {
				float: left;
				width: 60upx;
				height: 60upx;
				margin-left: 20upx;
				background: #1977c6;
				color: white;
				text-align: center;
				line-height: 60upx;
				border-radius: 50%;
			}
			.rssb_fwlc_p {
				margin-left: 20upx;
				float: left;
				font-size: 28upx;
				height: 60upx;
				line-height: 60upx;
			}
		}
	}
}
.rssb_gdfw {
	width: 90%;
	margin: 40upx auto;
	border-radius: 10upx;
	overflow: hidden;
	box-shadow: 0 0 10upx 0upx #e2e2e2;
	background: white;
	.rssb_gdfw_ul {
		background: white;
		zoom: 1;
		overflow: hidden;
		.rssb_gdfw_li {
			width: 90%;
			margin: 10upx auto;
			overflow: hidden;
			border: 1px solid #1977c6;
			background: #1977c6;
			border-radius: 10upx;
			.rssb_gdfw_img {
				width: 20%;
				height: 126upx;
				display: block;
				margin: 20upx auto;
			}
			.rssb_gdfw_p1 {
				text-align: center;
				font-size: 40upx;
				color: white;
				margin-bottom: 20upx;
			}
		}
	}
}
</style>
