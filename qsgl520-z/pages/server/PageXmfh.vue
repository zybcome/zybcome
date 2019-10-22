<template>
	<view>
		<publicTitle publicTitleImg="index_banner9.jpg"></publicTitle>
		<view class="xmfh_qy">
			<view class="public_tt">
				<view class="public_shu"></view>
				<view class="public_title">什么是企业孵化器</view>
			</view>
			<view class="xmfh_qy_ul">
				<view class="xmfh_qy_li">
					<view class="xmfh_qy_p">{{ qyfhq }}</view>
				</view>
			</view>
		</view>
		<view class="xmfh_fwbz">
			<view class="public_tt">
				<view class="public_shu"></view>
				<view class="public_title">提供的服务保障</view>
			</view>
			<view class="xmfh_fwbz_ul">
				<view class="xmfh_fwbz_li">
					<view class="xmfh_fwbz_bk">
						<view class="xmfh_fwbz_num" :style="'background:url(' + img_url + 'fh_zhichi.png) center no-repeat;background-size: cover'"></view>
						<view class="xmfh_fwbz_tit">战略支持服务</view>
						<view class="xmfh_fwbz_tit1">制定战略、商业计划、股权分配、法律服务，提供专业实验设施人力资源管理支持，产品或技术开发支持。</view>
					</view>
				</view>
				<view class="xmfh_fwbz_li">
					<view class="xmfh_fwbz_bk">
						<view class="xmfh_fwbz_num" :style="'background:url(' + img_url + 'fh_touzi.png) center no-repeat;background-size: cover'"></view>
						<view class="xmfh_fwbz_tit">融投资服务</view>
						<view class="xmfh_fwbz_tit1">天使投资、投资机构、风险投资、金融机构。包括协助获得投资、政府资金、申请贷款、直接向企业投资。</view>
					</view>
				</view>
				<view class="xmfh_fwbz_li1">
					<view class="xmfh_fwbz_bk">
						<view class="xmfh_fwbz_num" :style="'background:url(' + img_url + 'fh_zixun.png) center no-repeat;background-size: cover'"></view>
						<view class="xmfh_fwbz_tit">管理咨询服务</view>
						<view class="xmfh_fwbz_tit1">管理制度、人力资源管理、市场分析、专业知识培训。</view>
					</view>
				</view>
				<view class="xmfh_fwbz_li1">
					<view class="xmfh_fwbz_bk">
						<view class="xmfh_fwbz_num" :style="'background:url(' + img_url + 'fh_jishu.png) center no-repeat;background-size: cover'"></view>
						<view class="xmfh_fwbz_tit">专业技术服务</view>
						<view class="xmfh_fwbz_tit1">对接相关的院校、专家提供技术支持。</view>
					</view>
				</view>
				<view class="xmfh_fwbz_li1">
					<view class="xmfh_fwbz_bk">
						<view class="xmfh_fwbz_num" :style="'background:url(' + img_url + 'fh_daili.png) center no-repeat;background-size: cover'"></view>
						<view class="xmfh_fwbz_tit">代理办证服务</view>
						<view class="xmfh_fwbz_tit1">工商营业执照、特殊证照办理、税务对接申报。</view>
					</view>
				</view>
			</view>
		</view>
		<view class="xmfh_zyzy">
			<view class="public_tt">
				<view class="public_shu"></view>
				<view class="public_title">项目孵化器的主要作用</view>
			</view>
			<view class="xmfh_zyzy_ul">
				<view class="xmfh_zyzy_li" v-for="it in why">
					<view class="xmfh_zyzy_bk">
						<view class="xmfh_zyzy_img" :style="'background:url(' + img_url + it.url + ') center no-repeat;background-size: cover'"></view>
						<view class="xmfh_zyzy_p1">{{ it.title }}</view>
					</view>
					<view class="xmfh_zyzy_center">{{ it.center }}</view>
				</view>
			</view>
		</view>
		<view class="xmfh_dx">
			<view class="public_tt">
				<view class="public_shu"></view>
				<view class="public_title">孵化对象</view>
			</view>
			<view class="xmfh_dx_ul">
				<view class="xmfh_dx_li">
					<view class="xmfh_dx_bk">
						<view class="xmfh_dx_img" :style="'background:url(' + img_url + 'cyfc_dx_1.png) center no-repeat;background-size: cover'"></view>
						<view class="xmfh_dx_p">创新创业项目</view>
					</view>
				</view>
				<view class="xmfh_dx_li">
					<view class="xmfh_dx_bk">
						<view class="xmfh_dx_img" :style="'background:url(' + img_url + 'cyfc_dx_2.png) center no-repeat;background-size: cover'"></view>
						<view class="xmfh_dx_p">在读大学生</view>
					</view>
				</view>
				<view class="xmfh_dx_li">
					<view class="xmfh_dx_bk">
						<view class="xmfh_dx_img" :style="'background:url(' + img_url + 'cyfc_dx_3.png) center no-repeat;background-size: cover'"></view>
						<view class="xmfh_dx_p">高竞争行业，高新技术，</br>节能环保，国家提倡的产业</view>
					</view>
				</view>
			</view>
		</view>
		<view class="csgl_he">
			<view class="public_tt">
				<view class="public_shu"></view>
				<view class="public_title">创业指导</view>
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
		<view class="xmfh_gqsj">
			<view class="public_tt">
				<view class="public_shu"></view>
				<view class="public_title">股权设计</view>
			</view>
			<view class="xmfh_gqsj_ul">
				<view v-for="it in gqsj" class="xmfh_gqsj_li">
					<view class="public_tt">
						<view class="public_shu"></view>
						<view class="public_title">{{ it.title }}</view>
					</view>
					<view class="xmfh_gqsj_img" :style="'background:url(' + img_url + it.url + ') center no-repeat;background-size: cover'"></view>
					<view class="xmfh_gqsj_p2">{{ it.center }}</view>
				</view>
			</view>
		</view>
		<view class="xmfh_cyrz">
			<view class="public_tt">
				<view class="public_shu"></view>
				<view class="public_title">创业融资</view>
			</view>
			<view class="xmfh_cyrz_ul">
				<view v-for="it in cyrz" class="xmfh_cyrz_li">
					<view class="public_tt">
						<view class="public_shu"></view>
						<view class="public_title">{{ it.title }}</view>
					</view>
					<view class="xmfh_cyrz_img" :style="'background:url(' + img_url + it.url + ') center no-repeat;background-size: cover'"></view>
					<view class="xmfh_cyrz_p2">{{ it.center }}</view>
				</view>
			</view>
		</view>
		<view class="xmfh_zjlc">
			<view class="public_tt">
				<view class="public_shu"></view>
				<view class="public_title">资金流程</view>
			</view>
			<view class="xmfh_zjlc_ul" :style="'background:url(' + img_url + 'xzdljz_bk.jpg) center/cover no-repeat'">
				<view class="xmfh_zjlc_li">
					<view class="xmfh_zjlc_bk">
						<view class="xmfh_zjlc_num">1</view>
						<view class="xmfh_zjlc_tit">预约洽谈</view>
						<view class="xmfh_zjlc_tit1">企业管理顾问上门洽谈初审，写初审报告递送审核部门。</view>
					</view>
				</view>
				<view class="xmfh_zjlc_li">
					<view class="xmfh_zjlc_bk">
						<view class="xmfh_zjlc_num">2</view>
						<view class="xmfh_zjlc_tit">提出方案</view>
						<view class="xmfh_zjlc_tit1">针对产品项目释放股份比例，确定额度。</view>
					</view>
				</view>
				<view class="xmfh_zjlc_li1">
					<view class="xmfh_zjlc_bk">
						<view class="xmfh_zjlc_num">3</view>
						<view class="xmfh_zjlc_tit">签订协议</view>
						<view class="xmfh_zjlc_tit1">审核部门上门评估项目可行性，给出方案，签订服务协议。</view>
					</view>
				</view>
				<view class="xmfh_zjlc_li1">
					<view class="xmfh_zjlc_bk">
						<view class="xmfh_zjlc_num">4</view>
						<view class="xmfh_zjlc_tit">融资对接</view>
						<view class="xmfh_zjlc_tit1">路演对接部门策划，安排时间路演。</view>
					</view>
				</view>
				<view class="xmfh_zjlc_li1">
					<view class="xmfh_zjlc_bk">
						<view class="xmfh_zjlc_num">5</view>
						<view class="xmfh_zjlc_tit">撮合合作</view>
						<view class="xmfh_zjlc_tit1">合作双方签订协议，融资落实到位。</view>
					</view>
				</view>
			</view>
		</view>
		<view class="xmfh_zyzy">
			<view class="public_tt">
				<view class="public_shu"></view>
				<view class="public_title">证照办理</view>
			</view>
			<view class="xmfh_zyzy_ul">
				<view class="xmfh_zyzy_li" v-for="it in zzbl">
					<view class="xmfh_zyzy_bk">
						<view class="xmfh_zyzy_img" :style="'background:url(' + img_url + it.url + ') center no-repeat;background-size: cover'"></view>
						<view class="xmfh_zyzy_p1">{{ it.title }}</view>
					</view>
					<view class="xmfh_zyzy_center">{{ it.center }}</view>
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
			cyrz:[
				{
					url: 'xmfh_gqsj_7.jpg',
					title: '可行性分析',
					center:'即能否按照创始人的设想计划，顺利推进项目的发展，减少在发展初期遇到的困难。'
				},
				{
					url: 'xmfh_gqsj_8.jpg',
					title: '市场分析',
					center:'项目产品的市场调研，市场需求，市场竞争优势。'
				},
				{
					url: 'xmfh_gqsj_9.jpg',
					title: '利润分析',
					center:'项目的发展市场定位，能否给企业带来阶段性的盈利，在项目产品更新的基础上长久保持一定的利润。'
				},
				{
					url: 'xmfh_gqsj_10.jpg',
					title: '安全分析',
					center:'项目可行性的机率，项目的风险金预测，项目产品的同行竞争优势，项目发展可持续性。'
				},
				{
					url: 'xmfh_gqsj_11.jpg',
					title: '资金投入',
					center:'针对企业单一的项目订单，通过平台撮合投资人或机构给予资金支持，可避免企业使用股份融资，减少股份稀释。'
				}
			],
			gqsj: [
				{
					url: 'xmfh_gqsj_1.jpg',
					title: '个人出资',
					center: '通常指个人独资，风险由个人独自承担，可全盘控制公司发展和治理，但发展较慢缺少外部支持，适时合理利用资源，抱团取暖，让企业快速发展。'
				},
				{
					url: 'xmfh_gqsj_2.jpg',
					title: '合伙出资',
					center: '合伙企业最重要选定合伙的对象，对公司认可，对产品认可，对市场认可，数位合伙人各尽其职、各尽所能可助力企业较快发展，但合伙企业要合理处理分歧，避免企业不同意见而无法持续经营。'
				},
				{
					url: 'xmfh_gqsj_3.jpg',
					title: 'VC投资',
					center: '即通过企山平台撮合天使投资人投资企业项目，解决企业发展初期资金短缺问题，投资人可不参于管理运营，任由企业自由发展。融资过程、投资过程、推出过程。'
				},
				{
					url: 'xmfh_gqsj_4.jpg',
					title: 'PE投资',
					center:
						'通过企山平台撮合或投资机构投资企业项目，解决企业发展中期资金短缺，投资人或机构参与部分运营管理，携助企业快速发展。'
				},
				{
					url: 'xmfh_gqsj_5.jpg',
					title: '不同占股比的行使权利',
					center:
						'67%绝对控制权，51%相对控制权，34%一票否决权，1%代位诉讼权。'
				},
				{
					url: 'xmfh_gqsj_6.jpg',
					title: 'AB股权',
					center:
						'同股不同权。'
				}
			],
			help: [
				{
					url: '008.png',
					title: '整体计划精准分析',
					center1: '设计产品、市场需求',
					center2: '市场推广、产品利润'
				},
				{
					url: '009.png',
					title: '产品潜在市场分析',
					center1: '潜在市场',
					center2: '市场份额占比'
				},
				{
					url: '010.png',
					title: '更新产品发展规划',
					center1: '条理分析市场发展步骤',
					center2: '初期产品,中期产品,创新产品'
				},
				{
					url: '011.png',
					title: '产品优势精准分析',
					center1: '与同类产品竞争',
					center2: '优势的分析对比'
				},
				{
					url: '012.png',
					title: '运营的风险预测',
					center1: '产品市场的适应性',
					center2: '企业运营的现金流分配'
				},
				{
					url: '013.png',
					title: '商业计划书撰写',
					center1: '运营的危机预警',
					center2: '度过危机的方法'
				},
				{
					url: '014.png',
					title: '可行性项目报告',
					center1: '具体分析项目',
					center2: '可行计划以及市场需求'
				},
				{
					url: '015.png',
					title: '融资计划书',
					center1: '让投资者了解企业',
					center2: '制定融资方案,获得融资支持'
				}
			],
			qyfhq:
				'企业孵化器在也称高新技术创业服务中心,为企业提供一系列的服务支持,进而降低创业者的创业风险和创业成本,提高创业成功率,促进科技成果转化,培养成功的企业和企业家。台湾地区叫育成中心,欧洲一般叫创新中心(innovationcenter )。',
			why: [
				{
					url: 'fh_diyi.png',
					title: '企业孵化器',
					center:
						'一、企业孵化器在企业家创业过程中节省时间、少走弯路营造创业者聚集效应,提高创业成功率；通过为初创企业提供生产研发空间以及基础设施服务来降低创业成本并提高效率；'
				},
				{
					url: 'fh_lianjie.png',
					title: '连接风险投资机构',
					center:
						'二、连接风险投资机构和初创企业,降低双方存在的信息不对称；提供一种合理分摊创业者创业成本和创业风险的工具”。也可以通过企业与企业合作的上下游之间产品的互相供应支持。'
				},
				{
					url: 'fh_jiejue.png',
					title: '投资帮助其他企业',
					center: '三、投资帮助其他企业通过参股的形式,为企业解决债权和股权融资,对融资企业的产品项目或发展给予支持,帮助企业解决资金问题。'
				}
			],
			zzbl: [
				{
					url: 'shengq_dljz.png',
					title: '递交资料',
					center:'查名资料，公司章程，股东决议，申请表。'
				},
				{
					url: 'wend_dljz.png',
					title: '申请预审',
					center:'递交至行政柜台，修改资料。'
				},
				{
					url: 'guoy_dljz.png',
					title: '行政审批',
					center: '领取相关的证件。'
				}
			]
		};
	},
	methods: {}
};
</script>

<style lang="less">
	.xmfh_zjlc {
		width: 90%;
		margin: 0 auto;
		margin-top: 40upx;
		border-radius: 10upx;
		overflow: hidden;
		box-shadow: 0 0 10upx 0upx #e2e2e2;
		background: white;
		.xmfh_zjlc_ul {
			overflow: hidden;
			background: white;
			.xmfh_zjlc_li {
				width: 50%;
				float: left;
				overflow: hidden;
				.xmfh_zjlc_bk{
					.xmfh_zjlc_tit1 {
						text-align: center;
						color: white;
						font-size: 26upx;
						padding: 5upx;
						line-height: 45upx;
						height: 150upx;
					}
				}
			}
			.xmfh_zjlc_li1 {
				width: 33.3%;
				float: left;
				overflow: hidden;
			}
			.xmfh_zjlc_bk {
				width: 95%;
				margin: 5px auto;
				text-align: center;
				overflow: hidden;
				border: 1px solid white;
				border-radius: 10upx;
				.xmfh_zjlc_num {
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
				.xmfh_zjlc_tit {
					color: white;
					margin-bottom: 20upx;
					line-height: 60upx;
					font-size: 32upx;
				}
				.xmfh_zjlc_tit1 {
					text-align: center;
					color: white;
					font-size: 26upx;
					padding: 5upx;
					line-height: 45upx;
					height: 200upx;
				}
			}
		}
	}
	.xmfh_cyrz {
		width: 90%;
		margin: 40upx auto;
		border-radius: 10upx;
		overflow: hidden;
		box-shadow: 0 0 10upx 0upx #e2e2e2;
		.xmfh_cyrz_ul {
			background: white;
			overflow: hidden;
			.xmfh_cyrz_li {
				width: 90%;
				display: block;
				margin: 0 auto;
				.xmfh_cyrz_img {
					width: 100%;
					height: 230upx;
					margin-top: 10upx;
				}
				.xmfh_cyrz_p1 {
					padding: 20upx;
					line-height: 60upx;
					font-size: 40upx;
				}
				.xmfh_cyrz_p2 {
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
	.xmfh_gqsj {
		width: 90%;
		margin: 40upx auto;
		border-radius: 10upx;
		overflow: hidden;
		box-shadow: 0 0 10upx 0upx #e2e2e2;
		.xmfh_gqsj_ul {
			background: white;
			overflow: hidden;
			.xmfh_gqsj_li {
				width: 90%;
				display: block;
				margin: 0 auto;
				.xmfh_gqsj_img {
					width: 100%;
					height: 230upx;
					margin-top: 10upx;
				}
				.xmfh_gqsj_p1 {
					padding: 20upx;
					line-height: 60upx;
					font-size: 40upx;
				}
				.xmfh_gqsj_p2 {
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
.xmfh_dx {
	width: 90%;
	margin: 0 auto;
	margin-top: -40upx;
	border-radius: 10upx;
	overflow: hidden;
	box-shadow: 0 0 10upx 0upx #e2e2e2;
	.xmfh_dx_ul {
		overflow: hidden;
		background: white;
		.xmfh_dx_li {
			width: 50%;
			float: left;
			.xmfh_dx_bk {
				width: 95%;
				margin: 5px auto;
				text-align: center;
				overflow: hidden;
				border: 1px solid #00a0e9;
				border-top: 3px solid #00a0e9;
				.xmfh_dx_img {
					width: 180upx;
					height: 180upx;
					display: block;
					margin: 20upx auto;
				}
				.xmfh_dx_p {
					font-size: 28upx;
					color: #333;
					line-height: 60upx;
				}
			}
		}
		.xmfh_dx_li:nth-child(3) {
			width: 100%;
			.xmfh_dx_bk {
				width: 97%;
			}
		}
	}
}
.xmfh_zyzy {
	width: 90%;
	margin: 40upx auto;
	border-radius: 10upx;
	overflow: hidden;
	box-shadow: 0 0 10upx 0upx #e2e2e2;
	.xmfh_zyzy_ul {
		background: white;
		overflow: hidden;
		.xmfh_zyzy_li {
			width: 100%;
			display: block;
			padding: 20upx 0;
			float: left;
			.xmfh_zyzy_bk {
				overflow: hidden;
				margin-top: 20upx;
				.xmfh_zyzy_img {
					width: 80upx;
					height: 80upx;
					float: left;
					margin-left: 80upx;
				}
				.xmfh_zyzy_p1 {
					float: left;
					line-height: 80upx;
					margin-left: 40upx;
				}
			}
			.xmfh_zyzy_center {
				padding: 20upx 26upx;
				font-size: 28upx;
				text-indent: 56upx;
				line-height: 50upx;
			}
		}
	}
}
.xmfh_qy {
	width: 90%;
	margin: 0 auto;
	margin-top: -40upx;
	border-radius: 10upx;
	overflow: hidden;
	box-shadow: 0 0 10upx 0upx #e2e2e2;
	.xmfh_qy_ul {
		overflow: hidden;
		background: white;
		.xmfh_qy_li {
			width: 92%;
			margin: 20upx auto;
			.xmfh_qy_p {
				font-size: 28upx;
				color: #333;
				line-height: 60upx;
				text-indent: 56upx;
			}
		}
	}
}
.xmfh_fwbz {
	width: 90%;
	margin: 0 auto;
	margin-top: 40upx;
	border-radius: 10upx;
	overflow: hidden;
	box-shadow: 0 0 10upx 0upx #e2e2e2;
	background: white;
	.xmfh_fwbz_ul {
		overflow: hidden;
		background: #1977c6;
		.xmfh_fwbz_li {
			width: 50%;
			float: left;
			overflow: hidden;
		}
		.xmfh_fwbz_li1 {
			width: 33.3%;
			float: left;
			overflow: hidden;
		}
		.xmfh_fwbz_bk {
			width: 95%;
			margin: 5px auto;
			overflow: hidden;
			border: 1px solid white;
			border-radius: 10upx;
			.xmfh_fwbz_num {
				height: 100upx;
				width: 100upx;
				text-align: center;
				margin: 20px auto;
			}
			.xmfh_fwbz_tit {
				text-align: center;
				color: white;
				margin-bottom: 20upx;
				line-height: 60upx;
				font-size: 32upx;
			}
			.xmfh_fwbz_tit1 {
				text-align: center;
				color: white;
				font-size: 26upx;
				padding: 5upx;
				line-height: 45upx;
				height: 200upx;
			}
		}
	}
}
</style>
