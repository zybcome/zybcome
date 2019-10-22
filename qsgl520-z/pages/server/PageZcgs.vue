<template>
	<view>
		<publicTitle publicTitleImg="index_banner2.jpg"></publicTitle>
		<view class="zcgs_rq">
			<view class="public_tt">
				<view class="public_shu"></view>
				<view class="public_title">哪些人需要办理营业执照</view>
			</view>
			<view class="zcgs_rq_ul">
				<view class="zcgs_rq_li zcgs_rq_li_st">实体店主</view>
				<view class="zcgs_rq_li zcgs_rq_li_wd">网点店主</view>
				<view class="zcgs_rq_li zcgs_rq_li_gt">个体工商户</view>
				<view class="zcgs_rq_li zcgs_rq_li_ry">创业人员</view>
				<view class="zcgs_rq_li zcgs_rq_li_qy">企业组织</view>
			</view>
		</view>
		<view class="zcgs_lc">
			<view class="public_tt">
				<view class="public_shu"></view>
				<view class="public_title">注册公司步骤</view>
			</view>
			<view class="zcgs_lc_ul">
				<view v-for="it in zclc" class="zcgs_lc_li">
					<view class="zcgs_lc_img" :style="'background:url(' + img_url + it.url + ') center no-repeat;background-size: cover'"></view>
					<view class="zcgs_lc_p1">{{ it.title }}</view>
					<view class="zcgs_lc_p2">{{ it.day }}</view>
				</view>
			</view>
		</view>
		<view class="zcgs_qq">
			<view class="public_tt">
				<view class="public_shu"></view>
				<view class="public_title">前期服务-六大维度</view>
			</view>
			<view class="zcgs_qq_ul">
				<view v-for="it in qqfw" class="zcgs_qq_li">
					<view class="zcgs_qq_img" :style="'background:url(' + img_url + it.url + ') center no-repeat;background-size: cover'"></view>
					<view class="zcgs_qq_p1">{{ it.title }}</view>
				</view>
			</view>
		</view>
		<view class="zcgs_tg">
			<view class="public_tt">
				<view class="public_shu"></view>
				<view class="public_title">注册公司需要提供的材料</view>
			</view>
			<view class="zcgs_tg_ul">
				<view v-for="it in tgcl" class="zcgs_tg_li">
					<view class="zcgs_tg_img" :style="'background:url(' + img_url + 'zc_zbcl.png) center no-repeat;background-size: cover'"></view>
					<view class="zcgs_tg_p1">{{ it.title }}</view>
				</view>
			</view>
		</view>
		<view class="zcgs_bl">
			<view class="public_tt">
				<view class="public_shu"></view>
				<view class="public_title">我们的办理流程</view>
			</view>
			<view class="zcgs_bl_ul">
				<view v-for="it in bllc" class="zcgs_bl_li">
					<view class="zcgs_bl_img" :style="'background:url(' + img_url + it.url + ') center no-repeat;background-size: cover'"></view>
				</view>
			</view>
		</view>
		<view class="zcgs_sd">
			<view class="public_tt">
				<view class="public_shu"></view>
				<view class="public_title">办理后您所得材料</view>
			</view>
			<view class="zcgs_sd_ul">
				<view v-for="it in sdcl" class="zcgs_tg_li">
					<view class="zcgs_sd_img" :style="'background:url(' + img_url + it.url + ') center no-repeat;background-size: cover'"></view>
					<view class="zcgs_sd_p1">
						{{ it.title }}
						<br />
						{{ it.title2 }}
					</view>
				</view>
			</view>
		</view>
		<view class="zcgs_yl">
			<view class="public_tt">
				<view class="public_shu"></view>
				<view class="public_title">选择我们，一劳永逸</view>
			</view>
			<view class="zcgs_yl_ul">
				<view v-for="it in ylyy" class="zcgs_yl_li">
					<view class="zcgs_yl_img" :style="'background:url(' + img_url + it.url + ') center no-repeat;background-size: cover'"></view>
				</view>
			</view>
		</view>
		<view class="zcgs_dy">
			<view class="public_tt">
				<view class="public_shu"></view>
				<view class="public_title">办理营业执照是开公司的第一步</view>
			</view>
			<view class="zcgs_dy_ul">
				<view v-for="it in gsdy" class="zcgs_dy_li">
					<view class="public_tt">
						<view class="public_shu"></view>
						<view class="public_title">{{ it.title }}</view>
					</view>
					<view class="zcgs_dy_img" :style="'background:url(' + img_url + it.url + ') center no-repeat;background-size: cover'"></view>
					<view class="zcgs_dy_p2">{{ it.center }}</view>
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
	onLoad() {},
	data() {
		return {
			gsdy: [
				{
					url: 'qsgl520_sc-01.jpg',
					title: '银行开户',
					center: '开设日常使用的基本对公银行账号，是企业的主要存款账号，给员工发工资、发奖金等现金的支取都只能通过该账户办理。'
				},
				{
					url: 'qsgl520_sc-04.jpg',
					title: '税务登记',
					center: '公司成立后，需要先办理税务报道，取得CA证书及保税密码，才可开发票。成立后第一个月起，税务机关就会要求公司每月进行记账保税，没有收入支出也需要保税。'
				},
				{
					url: 'qsgl520_sc-02.jpg',
					title: '商标注册',
					center: '商标注册需先由商标顾问定制商标注册方案，预估商标注册风险及保护类别，尽早将品牌注册为商标，能帮助创业者保护品牌和规避商标法律风险。'
				},
				{
					url: 'qsgl520_sc-03.jpg',
					title: '社保开户',
					center:
						'《社会保险法》规定，用人单位应当自成立之日起三十天内申请办理社会保险登记，未能及时缴纳的，由征收机构责令自欠缴之日起向用人单位按日加收万分之五的滞纳金。'
				},
				{
					url: 'qsgl520_sc-05.jpg',
					title: '代理记账',
					center:
						'根据委托人提供的原始凭证和其他资料，按照国家统一的会计制度的规定进行会计核算，包括审核原始凭证、填制记账凭证、登记会计账簿、编制财务会计报表、税务申报、装订账簿等。'
				}
			],
			ylyy: [
				{
					url: 'zcgs_ylyy_left.jpg'
				},
				{
					url: 'zcgs_ylyy_right.jpg'
				}
			],
			bllc: [
				{
					url: 'pic_lc_1.png'
				},
				{
					url: 'pic_lc_2.png'
				},
				{
					url: 'pic_lc_3.png'
				},
				{
					url: 'pic_lc_4.png'
				},
				{
					url: 'pic_lc_5.png'
				},
				{
					url: 'pic_lc_6.png'
				}
			],
			zclc: [
				{
					url: 'page1-pcNext_hm.png',
					title: '名称核准',
					day: '1-2个工作日'
				},
				{
					url: 'page1-pcNext_cl.png',
					title: '提交材料',
					day: '1个工作日'
				},
				{
					url: 'page1-pcNext_zz.png',
					title: '领取营业执照',
					day: '3个工作日'
				},
				{
					url: 'page1-pcNext_yz.png',
					title: '刻章等事项',
					day: '1个工作日'
				}
			],
			qqfw: [
				{
					url: 'pic1_ky.png',
					title: '开业分析'
				},
				{
					url: 'pic1_zj.png',
					title: '注册资金'
				},
				{
					url: 'pic1_gq.png',
					title: '股权设计'
				},
				{
					url: 'pic1_jg.png',
					title: '公司结构'
				},
				{
					url: 'pic1_ss.png',
					title: '税收优惠政策'
				},
				{
					url: 'pic1_gw.png',
					title: '财税管理顾问'
				}
			],
			tgcl: [
				{
					title: '公司名字5-10个'
				},
				{
					title: '股东身份证'
				},
				{
					title: '股东出资比例'
				},
				{
					title: '公司监事人'
				},
				{
					title: '公司经营范围'
				},
				{
					title: '公司法人'
				}
			],
			sdcl: [
				{
					url: 'yyzz_swt.png',
					title: '营业执照',
					title2: '（正本、副本）'
				},
				{
					url: 'smgz_swt.png',
					title: '4枚（公章、法人章、财务章、发票章）以及印鉴留存卡'
				},
				{
					url: 'gszc_swt.png',
					title: '公司章程'
				}
			]
		};
	},
	methods: {}
};
</script>

<style lang="less">
.zcgs_rq {
	width: 90%;
	margin: 0 auto;
	margin-top: -40upx;
	border-radius: 10upx;
	overflow: hidden;
	box-shadow: 0 0 10upx 0upx #e2e2e2;
	.zcgs_rq_ul {
		background: white;
		zoom: 1;
		.zcgs_rq_li {
			float: left;
			box-sizing: border-box;
			font-size: 36upx;
		}
		.zcgs_rq_li_st {
			width: 33.33%;
			height: 400upx;
			background: #007aff;
			color: white;
			padding: 98upx;
		}
		.zcgs_rq_li_wd {
			width: 66.66%;
			height: 200upx;
			padding: 76upx;
			text-align: center;
			color: white;
			background: #3f536e;
		}
		.zcgs_rq_li_gt {
			width: 33.33%;
			height: 200upx;
			text-align: center;
			line-height: 200upx;
		}
		.zcgs_rq_li_ry {
			width: 66.66%;
			height: 200upx;
			padding: 76upx;
			text-align: center;
			color: white;
			background: #3f536e;
		}
		.zcgs_rq_li_qy {
			width: 33.33%;
			height: 400upx;
			margin-top: -200upx;
			background: #007aff;
			color: white;
			padding: 98upx;
		}
	}
	.zcgs_rq_ul::after {
		content: '';
		display: block;
		clear: both;
	}
}
.zcgs_lc {
	width: 90%;
	margin: 40upx auto;
	border-radius: 10upx;
	overflow: hidden;
	box-shadow: 0 0 10upx 0upx #e2e2e2;
	.zcgs_lc_ul {
		background: white;
		zoom: 1;
		.zcgs_lc_li {
			float: left;
			width: 50%;
			.zcgs_lc_img {
				width: 50%;
				height: 160upx;
				display: block;
				margin: 20upx auto;
			}
			.zcgs_lc_p1 {
				text-align: center;
				font-size: 32upx;
			}
			.zcgs_lc_p2 {
				text-align: center;
				font-size: 24upx;
				margin-bottom: 40upx;
			}
		}
	}
	.zcgs_lc_ul::after {
		content: '';
		display: block;
		clear: both;
	}
}
.zcgs_qq {
	width: 90%;
	margin: 40upx auto;
	border-radius: 10upx;
	overflow: hidden;
	box-shadow: 0 0 10upx 0upx #e2e2e2;
	.zcgs_qq_ul {
		background: white;
		zoom: 1;
		.zcgs_qq_li {
			float: left;
			width: 33.33%;
			.zcgs_qq_img {
				width: 70%;
				height: 160upx;
				display: block;
				margin: 20upx auto;
			}
			.zcgs_qq_p1 {
				text-align: center;
				font-size: 32upx;
				margin-bottom: 40upx;
			}
		}
	}
	.zcgs_qq_ul::after {
		content: '';
		display: block;
		clear: both;
	}
}
.zcgs_tg {
	width: 90%;
	margin: 40upx auto;
	border-radius: 10upx;
	overflow: hidden;
	box-shadow: 0 0 10upx 0upx #e2e2e2;
	.zcgs_tg_ul {
		background: white;
		overflow: hidden;
		.zcgs_tg_li {
			float: left;
			width: 50%;
			zoom: 1;
			margin: 30upx 0;
			.zcgs_tg_img {
				float: left;
				width: 40upx;
				height: 40upx;
				display: block;
				margin-left: 20upx;
			}
			.zcgs_tg_p1 {
				float: left;
				text-align: center;
				font-size: 32upx;
				margin-left: 20upx;
			}
		}
		.zcgs_qq_li::after {
			content: '';
			display: block;
			clear: both;
		}
	}
}
.zcgs_sd {
	width: 90%;
	margin: 40upx auto;
	border-radius: 10upx;
	overflow: hidden;
	box-shadow: 0 0 10upx 0upx #e2e2e2;
	.zcgs_sd_ul {
		background: white;
		overflow: hidden;
		.zcgs_tg_li {
			width: 80%;
			margin: 60upx auto;
			overflow: hidden;
			.zcgs_sd_img {
				width: 70%;
				height: 400upx;
				display: block;
				margin: 20upx auto;
			}
			.zcgs_sd_p1 {
				text-align: center;
				font-size: 32upx;
				margin-bottom: 40upx;
			}
		}
	}
}
.zcgs_bl {
	width: 90%;
	margin: 40upx auto;
	border-radius: 10upx;
	overflow: hidden;
	box-shadow: 0 0 10upx 0upx #e2e2e2;
	.zcgs_bl_ul {
		background: white;
		overflow: hidden;
		.zcgs_bl_li {
			width: 50%;
			display: block;
			margin: 20upx auto;
			float: left;
			.zcgs_bl_img {
				width: 90%;
				margin: 0 auto;
				height: 100upx;
			}
		}
	}
}
.zcgs_yl {
	width: 90%;
	margin: 40upx auto;
	border-radius: 10upx;
	overflow: hidden;
	box-shadow: 0 0 10upx 0upx #e2e2e2;
	.zcgs_yl_ul {
		background: white;
		overflow: hidden;
		.zcgs_yl_li {
			width: 100%;
			display: block;
			.zcgs_yl_img {
				width: 100%;
				margin: 0 auto;
				height: 540upx;
			}
		}
	}
}
.zcgs_dy {
	width: 90%;
	margin: 40upx auto;
	border-radius: 10upx;
	overflow: hidden;
	box-shadow: 0 0 10upx 0upx #e2e2e2;
	.zcgs_dy_ul {
		background: white;
		overflow: hidden;
		.zcgs_dy_li {
			width: 90%;
			display: block;
			margin: 0 auto;
			.zcgs_dy_img {
				width: 100%;
				height: 230upx;
				margin-top: 10upx;
			}
			.zcgs_dy_p1 {
				padding: 20upx;
				line-height: 60upx;
				font-size: 40upx;
			}
			.zcgs_dy_p2 {
				padding: 15upx;
				line-height: 60upx;
				font-size: 28upx;
			}
			.public_tt {
				zoom: 1;
				background: none;
				box-shadow: none;
				.public_title {
					font-size: 30upx;
				}
			}
		}
	}
}
</style>
