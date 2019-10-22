<template>
	<view>
		<publicTitle publicTitleImg="index_banner5.jpg"></publicTitle>
		<view class="dljz_fn">
			<view class="public_tt">
				<view class="public_shu"></view>
				<view class="public_title">哪些人需要办理营业执照</view>
			</view>
			<view class="dljz_fn_ul">
				<view class="dljz_fn_li" v-for="it in csfn">
					<view class="dljz_fn_bk">
						<view class="dljz_fn_num">{{ it.num }}</view>
						<view class="dljz_fn_p1">{{ it.center }}</view>
					</view>
				</view>
			</view>
		</view>
		<view class="dljz_wy">
			<view class="public_tt">
				<view class="public_shu"></view>
				<view class="public_title">为什么选择代理记账？</view>
			</view>
			<view class="dljz_wy_ul">
				<view class="dljz_wy_li" v-for="it in why">
					<view class="dljz_wy_bk">
						<view class="dljz_wy_img" :style="'background:url(' + img_url + it.url + ') center no-repeat;background-size: cover'"></view>
						<view class="dljz_wy_p1">{{ it.title }}</view>
					</view>
					<view class="dljz_wy_center">{{ it.center }}</view>
				</view>
			</view>
		</view>
		<view class="dljz_we">
			<view class="public_tt">
				<view class="public_shu"></view>
				<view class="public_title">我们的优势</view>
			</view>
			<view class="dljz_we_ul">
				<view class="dljz_we_li" v-for="it in weys">
					<view class="dljz_we_p1">{{ it.title }}</view>
					<view class="dljz_we_center">{{ it.center1 }}</view>
					<view class="dljz_we_center1">{{ it.center2 }}</view>
					<view class="dljz_we_img" :style="'background:url(' + img_url + it.url + ') center no-repeat;background-size: cover'"></view>
				</view>
			</view>
		</view>
		<view class="dljz_hd">
			<view class="public_tt">
				<view class="public_shu"></view>
				<view class="public_title">您所获得的资料</view>
			</view>
			<view class="dljz_hd_ul">
				<view class="dljz_hd_li" v-for="it in hdzl">
					<view class="dljz_hd_img" :style="'background:url(' + img_url + it.url + ') center no-repeat;background-size: cover'">
						<view class="dljz_we_p1">{{ it.title }}</view>
					</view>
				</view>
			</view>
		</view>
		<view class="dljz_xy">
			<view class="public_tt">
				<view class="public_shu"></view>
				<view class="public_title">代理记账需要的资料</view>
			</view>
			<view class="dljz_xy_ul">
				<view class="dljz_xy_li" v-for="it in xyzl">
					<view class="dljz_xy_p1">{{ it.num }}</view>
					<view class="dljz_xy_p2">{{ it.center }}</view>
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
			xyzl:[
				{
					num:'1',
					center:'银行对帐单、银行回单'
				},
				{
					num:'2',
					center:'销售发票及发票汇总表'
				},
				{
					num:'3',
					center:'进项发票及认证汇总表'
				},
				{
					num:'4',
					center:'费用发票、正确的工资表'
				}
			],
			hdzl: [
				{
					url: 'dljz_pz.jpg',
					title: '记账凭证'
				},
				{
					url: 'dljz_bb.jpg',
					title: '报表'
				},
				{
					url: 'dljz_zb.jpg',
					title: '账本'
				}
			],
			weys: [
				{
					url: 'dljz_ys_1.png',
					title: '高效率',
					center1: '熟悉各办事流程规则',
					center2: '与工商税务部门有着良好的关系'
				},
				{
					url: 'dljz_ys_2.png',
					title: '正规办理',
					center1: '签订合同，分档收费',
					center2: '明码标价，无隐形消费'
				},
				{
					url: 'dljz_ys_3.png',
					title: '专业一对一服务',
					center1: '为您配备专属专业顾问',
					center2: '全程免费，岗位分工明细'
				},
				{
					url: 'dljz_ys_4.png',
					title: '售后保障',
					center1: '标准化流程',
					center2: '价减质不减'
				}
			],
			why: [
				{
					url: 'shengq_dljz.png',
					title: '节省费用',
					center:
						'创业初期，最缺的就是现金,而招聘一个专业会计每个月都要四五干。而目创业初的业务还不稳定招聘专会计实在没有必要。代理记账每个月只需要几百元,就可以把你的记账报税问题解决。'
				},
				{
					url: 'wend_dljz.png',
					title: '财务人员稳定',
					center:
						'创业初期,就算你招聘了专职会计因为公司小，人员流动大,更换会计频繁,容易造成财务混乱,給你你带来不可预期的财务风险和损失而财务公司专业从事会计外包人员稳定。'
				},
				{
					url: 'guoy_dljz.png',
					title: '专业素质过硬',
					center:
						'企山创业园的核心业务之一就是代理记账,所有会计天天关注最新财务政策,会计们深入讨论会计准则互相学习，比一般的财务人员更专业,能及时掌握财税政策，做账时.有效的进行税收筹划，降低财务风险。'
				}
			],
			csfn: [
				{
					num: '1',
					center: '建账 记账 整账'
				},
				{
					num: '2',
					center: '纳税申报'
				},
				{
					num: '3',
					center: '代领发票 代开发票'
				},
				{
					num: '4',
					center: '营业执照年报'
				},
				{
					num: '5',
					center: '编制报表 凭证'
				},
				{
					num: '6',
					center: '最新财税咨询提醒'
				},
				{
					num: '7',
					center: '财税风险提醒'
				},
				{
					num: '8',
					center: '协助税局查账'
				}
			]
		};
	},
	methods: {}
};
</script>

<style lang="less">
	.dljz_xy{
		width: 90%;
		margin: 40upx auto;
		border-radius: 10upx;
		overflow: hidden;
		box-shadow: 0 0 10upx 0upx #e2e2e2;
		.dljz_xy_ul{
			overflow: hidden;
			background: white;
			.dljz_xy_li{
				width: 50%;
				padding: 40upx 0;
				float:left;
				background:#1977c6;
				border:1px solid white;
				box-sizing: border-box;
				color:white;
				.dljz_xy_p1{
					width: 50upx;
					height: 50upx;
					line-height: 50upx;
					text-align: center;
					margin: 20upx auto;
					border-radius: 50%;
					border: 1px solid white;
					padding: 10upx;
				}
				.dljz_xy_p2{
					text-align: center;
					font-size: 28upx;
				}
			}
		}
	}
.dljz_hd {
	width: 90%;
	margin: 40upx auto;
	border-radius: 10upx;
	overflow: hidden;
	box-shadow: 0 0 10upx 0upx #e2e2e2;
	.dljz_hd_ul {
		overflow: hidden;
		background: white;
		.dljz_hd_li {
			width: 90%;
			margin: 40upx auto;
			.dljz_hd_img {
				width: 100%;
				height: 400upx;
				border: 1px solid #777777;
				.dljz_we_p1 {
					width: 100upx;
					height: 100upx;
					text-align: center;
					background: #1977c6;
					color: white;
					font-size: 36upx;
					line-height: 100upx;
				}
			}
		}
		.dljz_hd_li:nth-child(1) .dljz_we_p1 {
			line-height: 50upx;
		}
	}
}
.dljz_we {
	width: 90%;
	margin: 40upx auto;
	border-radius: 10upx;
	overflow: hidden;
	box-shadow: 0 0 10upx 0upx #e2e2e2;
	.dljz_we_ul {
		overflow: hidden;
		.dljz_we_li {
			width: 46%;
			float: left;
			margin: 2%;
			background: white;
			.dljz_we_p1 {
				color: #3b9ff2;
				text-align: center;
				margin: 40upx 0;
			}
			.dljz_we_center,
			.dljz_we_center1 {
				line-height: 50upx;
				font-size: 28upx;
				text-align: center;
				color: #777777;
			}
			.dljz_we_center1 {
				height: 100upx;
			}
			.dljz_we_img {
				margin: 40upx 0;
				width: 100%;
				height: 280upx;
			}
		}
	}
}
.dljz_wy {
	width: 90%;
	margin: 40upx auto;
	border-radius: 10upx;
	overflow: hidden;
	box-shadow: 0 0 10upx 0upx #e2e2e2;
	.dljz_wy_ul {
		background: white;
		overflow: hidden;
		.dljz_wy_li {
			width: 100%;
			display: block;
			padding: 20upx 0;
			float: left;
			.dljz_wy_bk {
				overflow: hidden;
				margin-top: 20upx;
				.dljz_wy_img {
					width: 60upx;
					height: 60upx;
					float: left;
					margin-left: 80upx;
				}
				.dljz_wy_p1 {
					float: left;
					line-height: 60upx;
					margin-left: 40upx;
				}
			}
			.dljz_wy_center {
				padding: 20upx 26upx;
				font-size: 28upx;
				text-indent: 56upx;
			}
		}
	}
}
.dljz_fn {
	width: 90%;
	margin: 0 auto;
	margin-top: -40upx;
	border-radius: 10upx;
	overflow: hidden;
	box-shadow: 0 0 10upx 0upx #e2e2e2;
	.dljz_fn_ul {
		overflow: hidden;
		background: white;
		.dljz_fn_li {
			width: 50%;
			float: left;
			margin: 20upx 0;
			.dljz_fn_bk {
				overflow: hidden;
				width: 90%;
				margin: 0 auto;
				.dljz_fn_num {
					float: left;
					height: 60upx;
					width: 60upx;
					border-radius: 50%;
					background: #1977c6;
					color: white;
					text-align: center;
					line-height: 60upx;
				}
				.dljz_fn_p1 {
					float: left;
					line-height: 60upx;
					font-size: 28upx;
					margin-left: 10upx;
				}
			}
		}
	}
}
</style>
