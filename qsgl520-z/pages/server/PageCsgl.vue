<template>
	<view>
		<publicTitle publicTitleImg="index_banner6.jpg"></publicTitle>
		<view class="csgl_gf">
			<view class="public_tt">
				<view class="public_shu"></view>
				<view class="public_title">财税规范</view>
			</view>
			<view class="csgl_gf_ul">
				<view class="csgl_gf_li">
					<view class="csgl_gf_p">{{ csgf }}</view>
				</view>
			</view>
		</view>
		<view class="csgl_he">
			<view class="public_tt">
				<view class="public_shu"></view>
				<view class="public_title">我们帮您做什么？</view>
			</view>
			<view class="csgl_he_ul">
				<view class="csgl_he_li" v-for="it in help">
					<view class="csgl_he_bk">
						<view class="csgl_he_img" :style="'background:url(' + img_url + it.url + ') center no-repeat;background-size: cover'"></view>
						<view class="csgl_he_tit">{{ it.title }}</view>
						<view class="csgl_he_p1">{{ it.center1 }}</view>
						<view class="csgl_he_p2">{{ it.center2 }}</view>
					</view>
				</view>
			</view>
		</view>
		<view class="csgl_wt">
			<view class="public_tt">
				<view class="public_shu"></view>
				<view class="public_title">财务规范做什么？</view>
			</view>
			<view class="csgl_wt1">
				规范管理是公司提升核心竞争力的一个重要手段,财务规范化管理对企业发展尤为重要,财务规范化所包含的财务制度规范化、财务核算流程的规范化、岗位设置和员工管理体系规范化、内部控制的规范化、财务信息标准化五个重要方面,并指出财务规范化管理过程应当注意的问题。具体包含：
			</view>
			<view class="csgl_wt_ul">
				<view class="csgl_wt_li">
					<view class="csgl_wt_title">1、收款管理：</view>
					<view class="csgl_wt_center">银行收款、现金收款</view>
				</view>
				<view class="csgl_wt_li">
					<view class="csgl_wt_title">2、付款管理：</view>
					<view class="csgl_wt_center">用款预算、采购付款、费用报销、差旅报销、劳务费用、办公用品、招待费用、结算支付</view>
				</view>
				<view class="csgl_wt_li">
					<view class="csgl_wt_title">3、物资管理：</view>
					<view class="csgl_wt_center">物资入库、物资出库、库存管理、废旧物资</view>
				</view>
				<view class="csgl_wt_li">
					<view class="csgl_wt_title">4、合同管理：</view>
					<view class="csgl_wt_center">合作合同、采购合同、劳务合同</view>
				</view>
				<view class="csgl_wt_li">
					<view class="csgl_wt_title">5、财务稽核：</view>
					<view class="csgl_wt_center">采购结算、库存盘点、项目资金</view>
				</view>
			</view>
		</view>
		<view class="csgl_bs">
			<view class="public_tt">
				<view class="public_shu"></view>
				<view class="public_title">合理避税有哪些？</view>
			</view>
			<view class="csgl_bs_tit_img" :style="'background:url(' + img_url + 'csgl_hlbs_l.png) bottom center/100% no-repeat'">
				<view class="csgl_bs_tit_ul">
					<view class="csgl_bs_tit_p1">合理避税</view>
					<view class="csgl_bs_tit_p2">让您的企业经营高人一筹</view>
				</view>
			</view>
			<view class="csgl_bs_ul">
				<view class="csgl_bs_li" v-for="it in hlbs">
					<view class="csgl_bs_img" :style="'background:url(' + img_url + it.url + ') center no-repeat;background-size: cover'"></view>
					<view class="csgl_bs_p">{{ it.title }}</view>
				</view>
			</view>
		</view>
		<view class="csgl_jz">
			<view class="public_tt">
				<view class="public_shu"></view>
				<view class="public_title">代理记账做什么？</view>
			</view>
			<view class="csgl_jz_tit_img" :style="'background:url(' + img_url + 'csgl_dljz_zsm.png) bottom center/100% no-repeat'"></view>
			<view class="csgl_jz_ul">
				<view class="csgl_jz_li" v-for="it in dljz">
					<view class="csgl_jz_num">{{ it.num }}</view>
					<view class="csgl_jz_p">{{ it.title }}</view>
				</view>
			</view>
		</view>
		<view class="csgl_rz">
			<view class="public_tt">
				<view class="public_shu"></view>
				<view class="public_title">融资指导包含哪些？</view>
			</view>
			<view class="csgl_rz_ul">
				<view class="csgl_rz_li" :style="'background:url(' + img_url + 'csgl_rzlc.png) center/80% no-repeat'"><view class="csgl_rz_p"></view></view>
				<view class="csgl_rz_li">
					<view class="csgl_rz_bk">
						<view class="csgl_rz_p">融资流程</view>
						<view class="csgl_rz_p1">财务报表分析</view>
						<view class="csgl_rz_p1">融资渠道匹配</view>
						<view class="csgl_rz_p1">收集企业资料</view>
						<view class="csgl_rz_p1">整理递交资料</view>
						<view class="csgl_rz_p1">撮合成功融资</view>
					</view>
				</view>
				<view class="csgl_rz_li">
					<view class="csgl_rz_bk">
						<view class="csgl_rz_p">融资方式</view>
						<view class="csgl_rz_p1">股权融资</view>
						<view class="csgl_rz_p1">企业市值评估后</view>
						<view class="csgl_rz_p1">释放一定的股份进行融资</view>
						<view class="csgl_rz_p1">债务融资</view>
						<view class="csgl_rz_p1">通过银行等金融金钩</view>
						<view class="csgl_rz_p1">用企业信用进行贷款融资</view>
					</view>
				</view>
				<view class="csgl_rz_li" :style="'background:url(' + img_url + 'csgl_rzfs.png) center/80% no-repeat'"><view class="csgl_rz_p"></view></view>
				<view class="csgl_rz_li" :style="'background:url(' + img_url + 'csgl_hzqd.png) center/80% no-repeat'"><view class="csgl_rz_p"></view></view>
				<view class="csgl_rz_li">
					<view class="csgl_rz_bk">
						<view class="csgl_rz_p">融资渠道</view>
						<view class="csgl_rz_p1">加盟投资&nbsp;&nbsp;&nbsp;融资租赁</view>
						<view class="csgl_rz_p1">银行贷款&nbsp;&nbsp;&nbsp;投资机构</view>
						<view class="csgl_rz_p1">券商投资&nbsp;&nbsp;&nbsp;贷款公司</view>
						<view class="csgl_rz_p1">网络借款&nbsp;&nbsp;&nbsp;短期借款</view>
					</view>
				</view>
				<view class="csgl_rz_li">
					<view class="csgl_rz_bk">
						<view class="csgl_rz_p">合作渠道</view>
						<view class="csgl_rz_p1">中证证券&nbsp;&nbsp;&nbsp;招商证券</view>
						<view class="csgl_rz_p1">建设银行&nbsp;&nbsp;&nbsp;中国银行</view>
						<view class="csgl_rz_p1">九鼎投资&nbsp;&nbsp;&nbsp;华夏投资</view>
						<view class="csgl_rz_p1">建银国际&nbsp;&nbsp;&nbsp;企山租赁</view>
						<view class="csgl_rz_p1">企山投资&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;陆金所</view>
					</view>
				</view>
				<view class="csgl_rz_li" :style="'background:url(' + img_url + 'csgl_rzqd.png) center/80% no-repeat'"><view class="csgl_rz_p"></view></view>
			</view>
		</view>
		<view class="csgl_zj">
			<view class="public_tt">
				<view class="public_shu"></view>
				<view class="public_title">如何提高资金使用率？</view>
			</view>
			<view class="csgl_zj_js">
				据央行发布的报告，我国中小企业的资金使用率平均只有50%左右，提高资金使用率，就是将企业的资金合理的分配使用，减少缩短资金的非使用时间。经理做到随用随拿，不用不支付利息。在一定程度上起到节约成本的作用。资金分配要能满足正常生产经营的需求，企业通过增加流动现金和控制现金流水来获取生产经营和扩张所需的资金，降低现金流动过程中的风险，准确预测资金收回和支付的时间。建立健全存货管理的内部控制制度，在物资采购、领用、销售及产品管理上建立规范的制度，以形成有力的内部牵制，定期检查盘点，尽可能压缩积压的库存物资，避免资金呆滞，针对不同行业，了解行业所处经济周期、销售旺季、淡季等，用科学的方法建立存货的最佳结构。同时，对赊销客户的信用进行调研评定，建立客户信用档案，定期核对应收账款，制定完善的收款管理办法，严格控制账期。另外，在不影响信用的基础上，推迟付款时间等。
			</view>
			<view class="csgl_zj_ul">
				<view class="csgl_zj_li" v-for="it in zjsy">
					<view class="csgl_rz_bk">
						<view class="csgl_zj_img" :style="'background:url(' + img_url + it.url + ') center/100% no-repeat'"></view>
						<view class="csgl_zj_tit">{{ it.title }}</view>
						<view class="csgl_zj_p">{{ it.center }}</view>
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
			zjsy: [
				{
					url: 'csgl_zjsy_1.png',
					title: '来源成本',
					center: '测算运营资金'
				},
				{
					url: 'csgl_zjsy_2.png',
					title: '时间成本',
					center: '资金使用'
				},
				{
					url: 'csgl_zjsy_3.png',
					title: '还款成本',
					center: '不同借款方式'
				},
				{
					url: 'csgl_zjsy_4.png',
					title: '成本分析',
					center: '采购渠道'
				},
				{
					url: 'csgl_zjsy_5.png',
					title: '测算控制',
					center: '运营成本'
				},
				{
					url: 'csgl_zjsy_6.png',
					title: '账期处理',
					center: '应收应付'
				}
			],
			csgf:
				'财税顾问是利用先进的财务管理知识和专业的财务管理工作经验，为企业的财务管理给予建议、指导和帮助的服务工作。运用其税收、财会、法律等相关知识，对纳税人提出的财务、税务问题进行解答。充分利用国家有关税收优惠政策，通过科学、合理的税收筹划，帮助企业合理节税，提高企业经济效益，帮助企业提高财务管理水平和企业竟争力。在发达国家70％的公司财务管理是委托第三方的管理顾问机构。企业借助外部的专业管理机构可提高公司的财务管理水平和企业综合运作能力，解决了自身公司的财务人员少，不专业的问题。财税管理顾问团队成员：税务专管员、工商老师、高级会计师、银行风控专员、金融人员。上海企山专注为千万创业企业、投资机构和政府园区服务的一站式O2O平台，是对传统产业服务的颠覆，是用互联网思维创建的企业家生态圈。',
			help: [
				{
					url: '008.png',
					title: '财务规范',
					center1: '用心，打造完美',
					center2: '一站式服务平台'
				},
				{
					url: '009.png',
					title: '合理避税',
					center1: '以合法的手段和方式',
					center2: '来达到纳税人减少缴纳税款'
				},
				{
					url: '010.png',
					title: '代理记账',
					center1: '会计核算、记账、报税等',
					center2: '一系列的工作'
				},
				{
					url: '011.png',
					title: '税务申报',
					center1: '按照《企业所得税暂行条例》',
					center2: '和有关规定，进行汇算清缴'
				},
				{
					url: '012.png',
					title: '成本控制',
					center1: '保证成本在预算估计范围内',
					center2: ''
				},
				{
					url: '013.png',
					title: '融资指导',
					center1: '贷款申请、分析,以及所需贷款',
					center2: '担保、贷款收益绩效监测等'
				},
				{
					url: '014.png',
					title: '上市报表',
					center1: '上市公司财务报表的分析',
					center2: ''
				},
				{
					url: '015.png',
					title: '提高资金使用率',
					center1: '资产使用的有效性和充分性',
					center2: ''
				}
			],
			hlbs: [
				{
					url: 'caishui_kf.png',
					title: '开发区避税'
				},
				{
					url: 'caishui_yh.png',
					title: '优惠政策'
				},
				{
					url: 'caishui_hh.png',
					title: '合伙企业'
				},
				{
					url: 'caishui_qd.png',
					title: '核定征收'
				},
				{
					url: 'caishui_gr.png',
					title: '个人独资'
				},
				{
					url: 'caishui_zy.png',
					title: '定价转移'
				},
				{
					url: 'caishui_hz.png',
					title: '外商合资企业'
				},
				{
					url: 'caishui_hy.png',
					title: '特殊行业'
				},
				{
					url: 'caishui_js.png',
					title: '销售结算'
				},
				{
					url: 'caishui_fangshi.png',
					title: '折旧方式'
				},
				{
					url: 'caishui_zc.png',
					title: '资产租赁'
				},
				{
					url: 'caishui_ft.png',
					title: '分摊费用'
				},
				{
					url: 'caishui_lx.png',
					title: '税前利息'
				},
				{
					url: 'caishui_tg.png',
					title: '管理费提高'
				}
			],
			dljz: [
				{
					num: '1',
					title: '建账 记账 整账'
				},
				{
					num: '2',
					title: '纳税申报'
				},
				{
					num: '3',
					title: '代领发票 代开发票'
				},
				{
					num: '4',
					title: '营业执照年报'
				},
				{
					num: '5',
					title: '编制报表 凭证'
				},
				{
					num: '6',
					title: '最新财税咨询提醒'
				},
				{
					num: '7',
					title: '财税风险提醒'
				},
				{
					num: '8',
					title: '协助税局查账'
				}
			],
			times_:''
		};
	},
	methods: {}
};
</script>

<style lang="less">
.csgl_gf {
	width: 90%;
	margin: 0 auto;
	margin-top: -40upx;
	border-radius: 10upx;
	overflow: hidden;
	box-shadow: 0 0 10upx 0upx #e2e2e2;
	.csgl_gf_ul {
		overflow: hidden;
		background: white;
		.csgl_gf_li {
			width: 92%;
			margin: 20upx auto;
			.csgl_gf_p {
				font-size: 28upx;
				color: #333;
				line-height: 60upx;
				text-indent: 56upx;
			}
		}
	}
}
.csgl_wt {
	width: 90%;
	margin: 40upx auto;
	border-radius: 10upx;
	overflow: hidden;
	box-shadow: 0 0 10upx 0upx #e2e2e2;
	.csgl_wt1 {
		margin: 20upx 0;
		font-size: 28upx;
		color: #333;
		text-indent: 56upx;
		padding: 20upx;
		border: 1px solid #1977c6;
		line-height: 60upx;
		background: white;
	}
	.csgl_wt_ul {
		overflow: hidden;
		background: white;
		.csgl_wt_li {
			padding: 0 30upx;
			margin-bottom: 20upx;
			.csgl_wt_title {
				font-size: 30upx;
				font-weight: bold;
				line-height: 45upx;
			}
			.csgl_wt_center {
				font-size: 28upx;
				line-height: 45upx;
			}
		}
	}
}
.csgl_bs {
	width: 90%;
	margin: 40upx auto;
	border-radius: 10upx;
	overflow: hidden;
	box-shadow: 0 0 10upx 0upx #e2e2e2;
	.csgl_bs_tit_img {
		width: 100%;
		height: 600upx;
		.csgl_bs_tit_ul {
			width: 80%;
			margin: 30upx auto;
			overflow: hidden;
			.csgl_bs_tit_p1 {
				float: left;
				background: red;
				font-size: 32upx;
				padding: 0 10upx;
				line-height: 60upx;
				color: white;
				font-weight: bold;
			}
			.csgl_bs_tit_p2 {
				font-weight: bold;
				margin-left: 10upx;
				float: left;
				font-size: 32upx;
				line-height: 60upx;
			}
		}
	}
	.csgl_bs_ul {
		overflow: hidden;
		background: white;
		.csgl_bs_li {
			width: 50%;
			float: left;
			overflow: hidden;
			margin: 20upx 0;
			.csgl_bs_img {
				float: left;
				width: 60upx;
				height: 60upx;
				margin-left: 30upx;
			}
			.csgl_bs_p {
				margin-left: 30upx;
				float: left;
				font-size: 28upx;
				height: 60upx;
				line-height: 60upx;
			}
		}
	}
}
.csgl_jz {
	width: 90%;
	margin: 40upx auto;
	border-radius: 10upx;
	overflow: hidden;
	box-shadow: 0 0 10upx 0upx #e2e2e2;
	.csgl_jz_tit_img {
		width: 100%;
		height: 500upx;
	}
	.csgl_jz_ul {
		overflow: hidden;
		background: white;
		.csgl_jz_li {
			width: 50%;
			float: left;
			overflow: hidden;
			margin: 20upx 0;
			background: #f5f5f5;
			.csgl_jz_num {
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
			.csgl_jz_p {
				margin-left: 20upx;
				float: left;
				font-size: 28upx;
				height: 60upx;
				line-height: 60upx;
			}
		}
	}
}
.csgl_zj {
	width: 90%;
	margin: 40upx auto;
	border-radius: 10upx;
	overflow: hidden;
	box-shadow: 0 0 10upx 0upx #e2e2e2;
	.csgl_zj_js {
		border: 1px solid #1977c6;
		padding: 20upx;
		font-size: 28upx;
		text-indent: 56upx;
		color: #333;
		line-height: 60upx;
		margin: 20upx 0;
		background: white;
	}
	.csgl_zj_ul {
		overflow: hidden;
		background: white;
		.csgl_zj_li {
			width: 50%;
			float: left;
			.csgl_rz_bk {
				width: 95%;
				margin: 5px auto;
				text-align: center;
				.csgl_zj_img {
					width: 50%;
					height: 180upx;
					display: block;
					margin: 0 auto;
				}
				.csgl_zj_tit {
					font-size: 32upx;
					color: #1977c6;
					font-weight: bold;
					line-height: 60upx;
				}
				.csgl_zj_p {
					font-size: 28upx;
					color: #333;
					line-height: 60upx;
				}
			}
		}
	}
}
.csgl_rz {
	width: 90%;
	margin: 40upx auto;
	border-radius: 10upx;
	overflow: hidden;
	box-shadow: 0 0 10upx 0upx #e2e2e2;
	.csgl_rz_ul {
		overflow: hidden;
		background: white;
		.csgl_rz_li {
			width: 50%;
			float: left;
			height: 300upx;
			.csgl_rz_bk {
				width: 95%;
				margin: 10upx auto;
				text-align: center;
				.csgl_rz_p {
					font-size: 32upx;
					color: #1977c6;
					line-height: 60upx;
				}
				.csgl_rz_p1 {
					font-size: 28upx;
					line-height: 36upx;
				}
			}
		}
	}
}
.csgl_he {
	width: 90%;
	margin: 40upx auto;
	border-radius: 10upx;
	overflow: hidden;
	box-shadow: 0 0 10upx 0upx #e2e2e2;
	.csgl_he_ul {
		overflow: hidden;
		background: white;
		.csgl_he_li {
			width: 50%;
			float: left;
			background: white;
			overflow: hidden;
			.csgl_he_bk {
				width: 95%;
				margin: 10upx auto;
				background: #1977c6;
				color: white;
				text-align: center;
				overflow: hidden;
				.csgl_he_img {
					width: 40%;
					height: 125upx;
					display: block;
					margin: 40upx auto;
				}
				.csgl_he_tit {
					font-size: 36upx;
					height: 60upx;
					line-height: 60upx;
				}
				.csgl_he_p1 {
					height: 60upx;
					line-height: 60upx;
					font-size: 24upx;
				}
				.csgl_he_p2 {
					height: 60upx;
					line-height: 60upx;
					font-size: 24upx;
				}
			}
		}
	}
}
</style>
