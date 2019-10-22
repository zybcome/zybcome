<template>
	<view>
		<publicTitle publicTitleImg="index_banner10.jpg"></publicTitle>
		<view class="sbzl_zcsb">
			<view class="public_tt">
				<view class="public_shu"></view>
				<view class="public_title">为什么要注册商标</view>
			</view>
			<view class="sbzl_zcsb_ul" :style="'background:url(' + img_url + 'xzdljz_bk.jpg) center/cover no-repeat'">
				<view class="sbzl_zcsb_li">
					<view class="sbzl_zcsb_bk">
						<view class="sbzl_zcsb_num">1</view>
						<view class="sbzl_zcsb_tit">利用企业品牌宣传推广</view>
						<view class="sbzl_zcsb_tit1">提升市场竞争力，商标即是品牌，消费者相信品牌产品才会更可靠，产品才能买的更好。</view>
					</view>
				</view>
				<view class="sbzl_zcsb_li">
					<view class="sbzl_zcsb_bk">
						<view class="sbzl_zcsb_num">2</view>
						<view class="sbzl_zcsb_tit">入住知名电商平台</view>
						<view class="sbzl_zcsb_tit1">入驻型超市或电商平台（如入住京东、天猫...）运营的必要条件。</view>
					</view>
				</view>
				<view class="sbzl_zcsb_li1">
					<view class="sbzl_zcsb_bk">
						<view class="sbzl_zcsb_num">3</view>
						<view class="sbzl_zcsb_tit">创立无形资产</view>
						<view class="sbzl_zcsb_tit1">商标可转让、继承资产投资、抵押贷款等。</view>
					</view>
				</view>
				<view class="sbzl_zcsb_li1">
					<view class="sbzl_zcsb_bk">
						<view class="sbzl_zcsb_num">4</view>
						<view class="sbzl_zcsb_tit">申请官方认证</view>
						<view class="sbzl_zcsb_tit1">如申请QQ、微信公众平台、微博等官方认证。</view>
					</view>
				</view>
				<view class="sbzl_zcsb_li1">
					<view class="sbzl_zcsb_bk">
						<view class="sbzl_zcsb_num">5</view>
						<view class="sbzl_zcsb_tit">防止他人盗用</view>
						<view class="sbzl_zcsb_tit1">商标核准注册后，避免您的品牌存在山寨风险</view>
					</view>
				</view>
			</view>
		</view>
		<view class="sbzl_sbgc">
			<view class="public_tt">
				<view class="public_shu"></view>
				<view class="public_title">什么是商标（商标的构成）</view>
			</view>
			<view class="sbzl_sbgc_ul">
				<view v-for="it in sbgc" class="sbzl_sbgc_li">
					<view class="sbzl_sbgc_img" :style="'background:url(' + img_url + it.url + ') center no-repeat;background-size: cover'"></view>
					<view class="sbzl_sbgc_p1">{{ it.title }}</view>
					<view class="sbzl_sbgc_p2">{{ it.day }}</view>
				</view>
			</view>
		</view>
		<view class="sbzl_zcdx">
			<view class="public_tt">
				<view class="public_shu"></view>
				<view class="public_title">商标注册对象</view>
			</view>
			<view class="sbzl_zcdx_ul">
				<view v-for="it in zcdx" class="sbzl_zcdx_li">
					<view class="sbzl_zcdx_img" :style="'background:url(' + img_url + it.url + ') center no-repeat;background-size: cover'"></view>
					<view class="sbzl_zcdx_p1">{{ it.title }}</view>
					<view class="sbzl_zcdx_p2">{{ it.center }}</view>
				</view>
			</view>
		</view>
		<view class="sbzl_sblc">
			<view class="public_tt">
				<view class="public_shu"></view>
				<view class="public_title">注册商标流程</view>
			</view>
			<view class="sbzl_sblc_ul">
				<view v-for="it in sblc" class="sbzl_sblc_li">
					<view class="sbzl_sblc_bk">
						<view class="sbzl_sblc_num" :style="'background: white url(' + img_url + it.url + ') center no-repeat;background-size: 70%'"></view>
						<view class="sbzl_sblc_tit">{{ it.title }}</view>
						<view class="sbzl_sblc_tit1">{{ it.p1 }}</view>
						<view class="sbzl_sblc_tit1">{{ it.p2 }}</view>
					</view>
				</view>
			</view>
		</view>
		<view class="sbzl_sxzl">
			<view class="public_tt">
				<view class="public_shu"></view>
				<view class="public_title">注册商标所需要的资料</view>
			</view>
			<view class="sbzl_sxzl_ul">
				<view class="sbzl_sxzl_li">
					<view class="sbzl_sxzl_top">
						<view class="sbzl_sxzl_top_bk">
							<view class="sbzl_sxzl_top_bk_img" :style="'background: white url(' + img_url + 'sbzcdx_2.png) center no-repeat;background-size: 85%'"></view>
							<view class="sbzl_sxzl_top_bk_title">企业</view>
						</view>
					</view>
					<view class="sbzl_sxzl_center">
						<view class="sbzl_sxzl_center_li">
							<view class="sbzl_sxzl_center_li_img" :style="'background: white url(' + img_url + 'sbzl_sxzl_2.png) center no-repeat;background-size: 85%'"></view>
							<view class="sbzl_sxzl_center_li_p">商标样式</view>
						</view>
						<view class="sbzl_sxzl_center_li">
							<view class="sbzl_sxzl_center_li_img" :style="'background: white url(' + img_url + 'sbzl_sxzl_3.png) center no-repeat;background-size: 85%'"></view>
							<view class="sbzl_sxzl_center_li_p">营业执照复印件</view>
						</view>
					</view>
				</view>
				<view class="sbzl_sxzl_li">
					<view class="sbzl_sxzl_top">
						<view class="sbzl_sxzl_top_bk">
							<view class="sbzl_sxzl_top_bk_img" :style="'background: white url(' + img_url + 'sbzcdx_1.png) center no-repeat;background-size: 85%'"></view>
							<view class="sbzl_sxzl_top_bk_title">个人</view>
						</view>
					</view>
					<view class="sbzl_sxzl_center">
						<view class="sbzl_sxzl_center_li">
							<view class="sbzl_sxzl_center_li_img" :style="'background: white url(' + img_url + 'sbzl_sxzl_2.png) center no-repeat;background-size: 85%'"></view>
							<view class="sbzl_sxzl_center_li_p">商标样式</view>
						</view>
						<view class="sbzl_sxzl_center_li">
							<view class="sbzl_sxzl_center_li_bk">
								<view class="sbzl_sxzl_center_li_img" :style="'background: white url(' + img_url + 'sbzl_sxzl_3.png) center no-repeat;background-size: 85%'"></view>
								<view class="sbzl_sxzl_center_li_img" :style="'background: white url(' + img_url + 'sbzl_sxzl_1.png) center no-repeat;background-size: 85%'"></view>
							</view>
							<view class="sbzl_sxzl_center_li_p">营业执照和身份证复印件</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="sbzl_hdcl">
			<view class="public_tt">
				<view class="public_shu"></view>
				<view class="public_title">注册成功后您所获得的材料</view>
			</view>
			<view class="sbzl_hdcl_ul">
				<view class="sbzl_hdcl_li">
					<view class="sbzl_hdcl_li_img" :style="'background: white url(' + img_url + 'sbzl_hd_tzs.png) center no-repeat;background-size: 100%'">
						<view class="sbzl_hdcl_li_p">
							商标受理
							<br />
							通知书
						</view>
					</view>
				</view>
				<view class="sbzl_hdcl_li">
					<view class="sbzl_hdcl_li_img" :style="'background: white url(' + img_url + 'sbzl_hd_rzs.png) center no-repeat;background-size: 100%'">
						<view class="sbzl_hdcl_li_p">
							商标
							<br />
							注册证
						</view>
					</view>
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
			sblc: [
				{
					url: 'sbzclc_1.png',
					title: '免费查询商标',
					p1: '查询能否注册',
					p2: '如何注册'
				},
				{
					url: 'sbzclc_2.png',
					title: '准备材料提交',
					p1: '准备商标申请材料',
					p2: '次日拿到申请号'
				},
				{
					url: 'sbzclc_3.png',
					title: '官方审查',
					p1: '3个月拿到受理通知书',
					p2: '6-9个月进入初审公告期'
				},
				{
					url: 'sbzclc_4.png',
					title: '注册成功',
					p1: '12个月领取',
					p2: '商标注册证书'
				},
				{
					url: 'sbzclc_5.png',
					title: '相关材料交接',
					p1: '完成商标注册的',
					p2: '相关材料交接'
				}
			],
			zcdx: [
				{
					url: 'sbzcdx_1.png',
					title: '个人商标注册',
					center: '以个人或个体工商户名义注册'
				},
				{
					url: 'sbzcdx_2.png',
					title: '企业商标注册',
					center: '以公司和企业名称注册'
				},
				{
					url: 'sbzcdx_3.png',
					title: '国际商标注册',
					center: '完善品牌国际进程'
				}
			],
			sbgc: [
				{
					url: 'sbgc_1.png',
					title: '文字',
					day: '由各种文字组成'
				},
				{
					url: 'sbgc_2.png',
					title: '图形',
					day: '由符号、几何图形等构成'
				},
				{
					url: 'sbgc_3.png',
					title: '字母',
					day: '由各种字母等构成'
				},
				{
					url: 'sbgc_4.png',
					title: '数字',
					day: '由数字或中文字大写数字构成'
				},
				{
					url: 'sbgc_5.png',
					title: '三维标志',
					day: '由三维立体物构成'
				},
				{
					url: 'sbgc_6.png',
					title: '颜色组合',
					day: '由两种或两种以上的颜色构成'
				}
			],
			weys: [
				{
					title: '平台托管商标',
					p1: '商标注册全程平台托管监控',
					p2: '对每一步服务进度负责'
				},
				{
					title: '极速提交申请',
					p1: '最快30分钟内提交商标申请',
					p2: '同步商标局注册进度更新'
				},
				{
					title: '平台保险保障',
					p1: '太平洋保险提供服务保障',
					p2: '为每一个商标服务投保'
				},
				{
					title: '终身免费咨询',
					p1: '知识产权顾问升级',
					p2: '一次沟通可以终身免费咨询'
				}
			]
		};
	},
	methods: {}
};
</script>

<style lang="less">
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
					position:relative;
					color:white;
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
.sbzl_hdcl {
	width: 90%;
	margin: 0 auto;
	margin-top: 40upx;
	border-radius: 10upx;
	overflow: hidden;
	box-shadow: 0 0 10upx 0upx #e2e2e2;
	background: white;
	.sbzl_hdcl_ul {
		overflow: hidden;
		background: white;
		.sbzl_hdcl_li {
			width: 95%;
			margin: 20upx auto;
			.sbzl_hdcl_li_img {
				width: 100%;
				box-sizing: border-box;
				border: 1px solid #333;
				height: 900upx;
				.sbzl_hdcl_li_p {
					line-height: 60upx;
					font-size: 26upx;
					color: white;
					text-align: center;
					background: #1977c6;
					width: 120upx;
				}
			}
		}
	}
}
.sbzl_sxzl {
	width: 90%;
	margin: 0 auto;
	margin-top: 40upx;
	border-radius: 10upx;
	overflow: hidden;
	box-shadow: 0 0 10upx 0upx #e2e2e2;
	background: white;
	.sbzl_sxzl_ul {
		overflow: hidden;
		background: white;
		overflow: hidden;
		.sbzl_sxzl_li {
			width: 95%;
			margin: 10upx auto;
			.sbzl_sxzl_top {
				background: #f39800;
				height: 80upx;
				.sbzl_sxzl_top_bk {
					width: 180upx;
					color: white;
					margin: 0 auto;
					overflow: hidden;
					.sbzl_sxzl_top_bk_img {
						width: 70upx;
						height: 70upx;
						border-radius: 50%;
						margin-top: 5upx;
						float: left;
					}
					.sbzl_sxzl_top_bk_title {
						line-height: 80upx;
						float: left;
						margin-left: 15upx;
					}
				}
			}
			.sbzl_sxzl_center {
				overflow: hidden;
				.sbzl_sxzl_center_li {
					width: 50%;
					float: left;
					border: 1px solid #f39800;
					border-top: none;
					box-sizing: border-box;
					overflow: hidden;
					.sbzl_sxzl_center_li_img {
						width: 50%;
						margin: 20upx auto;
						height: 150upx;
					}
					.sbzl_sxzl_center_li_p {
						text-align: center;
						line-height: 60upx;
						font-size: 26upx;
						margin-bottom: 20upx;
					}
					.sbzl_sxzl_center_li_bk {
						width: 100%;
						overflow: hidden;
						.sbzl_sxzl_center_li_img {
							width: 50%;
							float: left;
							margin: 20upx auto;
							height: 150upx;
						}
						.sbzl_sxzl_center_li_p {
							text-align: center;
							line-height: 60upx;
							font-size: 26upx;
							margin-bottom: 20upx;
						}
					}
				}
			}
		}
	}
}
.sbzl_sblc {
	width: 90%;
	margin: 0 auto;
	margin-top: 40upx;
	border-radius: 10upx;
	overflow: hidden;
	box-shadow: 0 0 10upx 0upx #e2e2e2;
	background: white;
	.sbzl_sblc_ul {
		overflow: hidden;
		background: #1977c6;
		.sbzl_sblc_li {
			width: 50%;
			float: left;
			overflow: hidden;
		}
		.sbzl_sblc_li1 {
			width: 33.3%;
			float: left;
			overflow: hidden;
		}
		.sbzl_sblc_bk {
			width: 95%;
			margin: 5px auto;
			overflow: hidden;
			border: 1px solid white;
			border-radius: 10upx;
			.sbzl_sblc_num {
				height: 100upx;
				width: 100upx;
				text-align: center;
				margin: 20px auto;
				border-radius: 50%;
				padding: 10upx;
			}
			.sbzl_sblc_tit {
				text-align: center;
				color: white;
				margin-bottom: 20upx;
				line-height: 60upx;
				font-size: 32upx;
			}
			.sbzl_sblc_tit1 {
				text-align: center;
				color: white;
				font-size: 26upx;
				padding: 5upx;
				line-height: 45upx;
			}
		}
	}
}
.sbzl_zcdx {
	width: 90%;
	margin: 40upx auto;
	border-radius: 10upx;
	overflow: hidden;
	box-shadow: 0 0 10upx 0upx #e2e2e2;
	background: white;
	.sbzl_zcdx_ul {
		background: white;
		zoom: 1;
		overflow: hidden;
		.sbzl_zcdx_li {
			width: 90%;
			margin: 10upx auto;
			overflow: hidden;
			border: 1px solid #1977c6;
			border-radius: 10upx;
			.sbzl_zcdx_img {
				width: 20%;
				height: 126upx;
				display: block;
				margin: 20upx auto;
			}
			.sbzl_zcdx_p1 {
				text-align: center;
				font-size: 40upx;
			}
			.sbzl_zcdx_p2 {
				text-align: center;
				font-size: 24upx;
				margin-bottom: 40upx;
				line-height: 60upx;
			}
		}
	}
}
.sbzl_sbgc {
	width: 90%;
	margin: 40upx auto;
	border-radius: 10upx;
	overflow: hidden;
	box-shadow: 0 0 10upx 0upx #e2e2e2;
	.sbzl_sbgc_ul {
		background: white;
		zoom: 1;
		.sbzl_sbgc_li {
			float: left;
			width: 50%;
			.sbzl_sbgc_img {
				width: 50%;
				height: 170upx;
				display: block;
				margin: 20upx auto;
			}
			.sbzl_sbgc_p1 {
				text-align: center;
				font-size: 32upx;
			}
			.sbzl_sbgc_p2 {
				text-align: center;
				font-size: 24upx;
				margin-bottom: 40upx;
				line-height: 50upx;
			}
		}
	}
	.sbzl_sbgc_ul::after {
		content: '';
		display: block;
		clear: both;
	}
}
.sbzl_zcsb {
	width: 90%;
	margin: 0 auto;
	margin-top: -40upx;
	border-radius: 10upx;
	overflow: hidden;
	box-shadow: 0 0 10upx 0upx #e2e2e2;
	background: white;
	.sbzl_zcsb_ul {
		overflow: hidden;
		background: white;
		.sbzl_zcsb_li {
			width: 50%;
			float: left;
			overflow: hidden;
			.sbzl_zcsb_bk {
				.sbzl_zcsb_tit1 {
					text-align: center;
					color: white;
					font-size: 26upx;
					padding: 5upx;
					line-height: 45upx;
					height: 200upx;
				}
			}
		}
		.sbzl_zcsb_li1 {
			width: 33.3%;
			float: left;
			overflow: hidden;
		}
		.sbzl_zcsb_bk {
			width: 95%;
			margin: 5px auto;
			text-align: center;
			overflow: hidden;
			border: 1px solid white;
			border-radius: 10upx;
			.sbzl_zcsb_num {
				line-height: 100upx;
				width: 100upx;
				border-radius: 50%;
				text-align: center;
				background: white;
				margin: 20px auto;
				color: #1977c6;
				font-size: 40px;
				box-shadow: 0px 0px 0px 5px #8dcbff;
			}
			.sbzl_zcsb_tit {
				color: white;
				margin-bottom: 20upx;
				line-height: 60upx;
				font-size: 32upx;
			}
			.sbzl_zcsb_tit1 {
				text-align: center;
				color: white;
				font-size: 26upx;
				padding: 5upx;
				line-height: 45upx;
				height: 150upx;
			}
		}
	}
}
</style>
