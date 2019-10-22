<template>
	<view>
		<publicTitle publicTitleImg="index_banner7.jpg"></publicTitle>
		<view class="jcxz_js">
			<view class="public_tt">
				<view class="public_shu"></view>
				<view class="public_title">背景介绍</view>
			</view>
			<view class="jcxz_js_tit">
				企山集团自2012年至今已有7年多建厂选址经验，为2000多家企业成功匹配厂房。对接全国数千家经开区招商服务，包括国家级100多个，省级300多个，市级及以下500多个，针对各经开区的主导产业，匹配合适的企业入驻。帮助企业根据生产经营情况，精准选址建厂，土地购买建厂。为企业提供与经开区洽谈政策、优惠补贴，落户跟踪服务和全程证照办理服务。让企业入驻顺利，无后顾之忧，撮合双方达成合作。
			</view>
		</view>
		<view class="jcxz_qyfw">
			<view class="public_tt">
				<view class="public_shu"></view>
				<view class="public_title">为企业提供的服务</view>
			</view>
			<view class="jcxz_qyfw_ul" :style="'background:url(' + img_url + 'xzdljz_bk.jpg) center/cover no-repeat'">
				<view class="jcxz_qyfw_li">
					<view class="jcxz_qyfw_bk">
						<view class="jcxz_qyfw_num">1</view>
						<view class="jcxz_qyfw_tit">精准选址建厂</view>
					</view>
				</view>
				<view class="jcxz_qyfw_li">
					<view class="jcxz_qyfw_bk">
						<view class="jcxz_qyfw_num">2</view>
						<view class="jcxz_qyfw_tit">土地购买建厂</view>
					</view>
				</view>
				<view class="jcxz_qyfw_li1">
					<view class="jcxz_qyfw_bk">
						<view class="jcxz_qyfw_num">3</view>
						<view class="jcxz_qyfw_tit">厂房购买租赁</view>
					</view>
				</view>
				<view class="jcxz_qyfw_li1">
					<view class="jcxz_qyfw_bk">
						<view class="jcxz_qyfw_num">4</view>
						<view class="jcxz_qyfw_tit">税收优惠</view>
					</view>
				</view>
				<view class="jcxz_qyfw_li1">
					<view class="jcxz_qyfw_bk">
						<view class="jcxz_qyfw_num">5</view>
						<view class="jcxz_qyfw_tit">政策补贴</view>
					</view>
				</view>
			</view>
		</view>
		<view class="jcxz_cgqy">
			<view class="public_tt">
				<view class="public_shu"></view>
				<view class="public_title">对接成功的企业</view>
			</view>
			<view class="page-section swiper">
				<view class="page-section-spacing">
					<swiper class="swiper" id="swiper" :indicatorDots="false" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
						<swiper-item v-for="it in cgqy">
							<view class="swiper-item">
								<view class="jcxz_cgqy_img" :style="'background:url(' + img_url + it.url + ') center/cover no-repeat'">
									<view class="jcxz_cgqy_p">{{ it.p }}</view>
								</view>
							</view>
						</swiper-item>
					</swiper>
				</view>
			</view>
		</view>
		<view class="jcxz_qyfw">
			<view class="public_tt">
				<view class="public_shu"></view>
				<view class="public_title">为园区提供的服务</view>
			</view>
			<view class="jcxz_qyfw_ul" :style="'background:url(' + img_url + 'xzdljz_bk.jpg) center/cover no-repeat'">
				<view class="jcxz_qyfw_li">
					<view class="jcxz_qyfw_bk">
						<view class="jcxz_qyfw_num">1</view>
						<view class="jcxz_qyfw_tit">产业招商合作</view>
					</view>
				</view>
				<view class="jcxz_qyfw_li">
					<view class="jcxz_qyfw_bk">
						<view class="jcxz_qyfw_num">2</view>
						<view class="jcxz_qyfw_tit">招商推荐企业</view>
					</view>
				</view>
				<view class="jcxz_qyfw_li1">
					<view class="jcxz_qyfw_bk">
						<view class="jcxz_qyfw_num">3</view>
						<view class="jcxz_qyfw_tit">项目落地洽谈</view>
					</view>
				</view>
				<view class="jcxz_qyfw_li1">
					<view class="jcxz_qyfw_bk">
						<view class="jcxz_qyfw_num">4</view>
						<view class="jcxz_qyfw_tit">园区运营管理</view>
					</view>
				</view>
				<view class="jcxz_qyfw_li1">
					<view class="jcxz_qyfw_bk">
						<view class="jcxz_qyfw_num">5</view>
						<view class="jcxz_qyfw_tit">产业定位调整</view>
					</view>
				</view>
			</view>
		</view>
		<view class="jcxz_cgqy">
			<view class="public_tt">
				<view class="public_shu"></view>
				<view class="public_title">对接成功的园区</view>
			</view>
			<view class="page-section swiper">
				<view class="page-section-spacing">
					<swiper class="swiper" id="swiper" :indicatorDots="false" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
						<swiper-item v-for="it in cgyq">
							<view class="swiper-item">
								<view class="jcxz_cgqy_img" :style="'background:url(' + img_url + it.url + ') center/cover no-repeat'">
									<view class="jcxz_cgqy_p">{{ it.p }}</view>
								</view>
							</view>
						</swiper-item>
					</swiper>
				</view>
			</view>
		</view>
		<view class="jcxz_cgqy">
			<view class="public_tt">
				<view class="public_shu"></view>
				<view class="public_title">建厂选址</view>
			</view>
			<view class="page-section swiper">
				<view class="page-section-spacing">
					<swiper class="swiper" id="swiper" :indicatorDots="false" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
						<swiper-item v-for="it in jcxz">
							<view class="swiper-item">
								<view class="jcxz_cgqy_img" :style="'background:url(' + img_url + it.url + ') center/cover no-repeat'">
									<view class="jcxz_cgqy_p">
										<view class="jcxz_cgqy_ic" :style="'background:url(' + img_url + it.icon + ') center/cover no-repeat'"></view>
										<view class="jcxz_cgqy_p1">{{ it.p }}</view>
									</view>
								</view>
							</view>
						</swiper-item>
					</swiper>
				</view>
			</view>
		</view>
		<view class="jcxz_yqtj">
			<view class="public_tt">
				<view class="public_shu"></view>
				<view class="public_title">园区推荐</view>
			</view>
			<view class="jcxz_yqtj_ul">
				<view class="jcxz_yqtj_li" v-for="it in yqtj">
					<view class="jcxz_yqtj_img" :style="'background:url(' + img_url + it.url + ') center/cover no-repeat'">
						<view class="jcxz_yqtj_p">{{ it.center }}</view>
					</view>
				</view>
			</view>
		</view>
		<view class="csgl_he">
			<view class="public_tt">
				<view class="public_shu"></view>
				<view class="public_title">我们的优势</view>
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
			indicatorDots: true,
			autoplay: true,
			interval: 2000,
			duration: 500,
			cgqy: [
				{
					url: 'qy_al_1.jpg',
					p: '上海南方国际中心'
				},
				{
					url: 'qy_al_2.jpg',
					p: '苏州台东经济开发区'
				},
				{
					url: 'qy_al_3.jpg',
					p: '温州浙南科技城'
				},
				{
					url: 'qy_al_4.png',
					p: '苏州宿迁园区'
				},
				{
					url: 'qy_al_5.jpg',
					p: '安徽铜陵义安经济开发区'
				},
				{
					url: 'qy_al_6.jpg',
					p: '苏州高新开发区'
				}
			],
			cgyq: [
				{
					url: 'qy_al_1.jpg',
					p: '上海南方国际中心'
				},
				{
					url: 'qy_al_2.jpg',
					p: '苏州台东经济开发区'
				},
				{
					url: 'qy_al_3.jpg',
					p: '温州浙南科技城'
				},
				{
					url: 'qy_al_4.png',
					p: '苏州宿迁园区'
				},
				{
					url: 'qy_al_5.jpg',
					p: '安徽铜陵义安经济开发区'
				},
				{
					url: 'qy_al_6.jpg',
					p: '苏州高新开发区'
				}
			],
			jcxz: [
				{
					url: 'jcxz_list_11.png',
					icon: 'xuanzhi1.png',
					p: '我要低价土地'
				},
				{
					url: 'jcxz_list_12.png',
					icon: 'xuanzhi2.png',
					p: '我要建厂选址'
				},
				{
					url: 'jcxz_list_13.png',
					icon: 'xuanzhi3.png',
					p: '我要免费厂房'
				},
				{
					url: 'jcxz_list_14.png',
					icon: 'xuanzhi4.png',
					p: '我要税收减免'
				},
				{
					url: 'jcxz_list_15.png',
					icon: 'xuanzhi5.png',
					p: '我要优惠政策'
				},
				{
					url: 'jcxz_list_16.png',
					icon: 'xuanzhi6.png',
					p: '我要迁移落地'
				}
			],
			yqtj: [
				{
					url: 'groom_1.jpg',
					center: '上海南方国际中心'
				},
				{
					url: 'groom_2.jpg',
					center: '温州浙南科技城'
				},
				{
					url: 'groom_3.png',
					center: '苏州高新开发区'
				},
				{
					url: 'groom_4.jpg',
					center: '苏州宿迁园区'
				}
			],
			help: [
				{
					url: 'icon_2.png',
					title: '100%信息真实',
					center1: '企山创业园可以为您确保',
					center2: '100%信息真实'
				},
				{
					url: 'icon_4.png',
					title: '招商引税高效',
					center1: '企山创业园可以为您确保',
					center2: '招商引税高效'
				},
				{
					url: 'icon_5.png',
					title: '签约千家园区',
					center1: '企山创业园可以为您确保',
					center2: '签约千家园区'
				},
				{
					url: 'icon_1.png',
					title: '入住过程监督',
					center1: '企山创业园可以为您确保',
					center2: '入住过程监督'
				},
				{
					url: 'icon_6.png',
					title: '服务万家企业',
					center1: '企山创业园可以为您确保',
					center2: '服务万家企业'
				},
				{
					url: 'icon_8.png',
					title: '担保政策实施',
					center1: '贷款申请、分析,以及所需贷款',
					center2: '担保政策实施'
				},
				{
					url: 'icon_7.png',
					title: '全程证照办理',
					center1: '企山创业园可以为您确保',
					center2: '全程证照办理'
				},
				{
					url: 'icon_3.png',
					title: '专业企业服务',
					center1: '企山创业园可以为您确保',
					center2: '专业企业服务'
				}
			]
		};
	},
	methods: {
		changeIndicatorDots(e) {
			this.indicatorDots = !this.indicatorDots;
		},
		changeAutoplay(e) {
			this.autoplay = !this.autoplay;
		},
		intervalChange(e) {
			this.interval = e.target.value;
		},
		durationChange(e) {
			this.duration = e.target.value;
		}
	}
};
</script>

<style lang="less">
.jcxz_js {
	width: 90%;
	margin: 0 auto;
	margin-top: -40upx;
	border-radius: 10upx;
	overflow: hidden;
	box-shadow: 0 0 10upx 0upx #e2e2e2;
	background: white;
	.jcxz_js_tit {
		padding: 20upx;
		font-size: 28upx;
		text-indent: 56upx;
		color: #333;
		line-height: 60upx;
		margin: 20upx 0;
		background: white;
	}
}
.jcxz_cgqy {
	width: 90%;
	margin: 0 auto;
	margin-top: 40upx;
	border-radius: 10upx;
	overflow: hidden;
	box-shadow: 0 0 10upx 0upx #e2e2e2;
	background: white;
	.jcxz_cgqy_img {
		width: 100%;
		height: 500upx;
		position: relative;
		.jcxz_cgqy_p {
			background: rgba(0, 0, 0, 0.5);
			width: 100%;
			position: absolute;
			bottom: 0;
			line-height: 80upx;
			color: white;
			text-align: center;
			overflow: hidden;
			.jcxz_cgqy_ic {
				float: left;
				width: 80upx;
				height: 80upx;
				margin-left: 150upx;
			}
			.jcxz_cgqy_p1 {
				margin-left: 40upx;
				float: left;
				line-height: 80upx;
				color: white;
			}
		}
	}
}
.jcxz_yqtj {
	width: 90%;
	margin: 0 auto;
	margin-top: 40upx;
	border-radius: 10upx;
	overflow: hidden;
	box-shadow: 0 0 10upx 0upx #e2e2e2;
	background: white;
	.jcxz_yqtj_ul {
		overflow: hidden;
		background: white;
		.jcxz_yqtj_li {
			width: 50%;
			float: left;
			overflow: hidden;
			.jcxz_yqtj_img {
				height: 230upx;
				position: relative;
				width: 95%;
				margin: 5px auto;
				text-align: center;
				overflow: hidden;
				border: 1px solid white;
				border-radius: 10upx;
				.jcxz_yqtj_p {
					background: rgba(0, 0, 0, 0.5);
					width: 100%;
					position: absolute;
					bottom: 0;
					line-height: 60upx;
					color: white;
					text-align: center;
					font-size: 28upx;
				}
			}
		}
	}
}
.jcxz_qyfw {
	width: 90%;
	margin: 0 auto;
	margin-top: 40upx;
	border-radius: 10upx;
	overflow: hidden;
	box-shadow: 0 0 10upx 0upx #e2e2e2;
	background: white;
	.jcxz_qyfw_ul {
		overflow: hidden;
		background: white;
		.jcxz_qyfw_li {
			width: 50%;
			float: left;
			overflow: hidden;
		}
		.jcxz_qyfw_li1 {
			width: 33.3%;
			float: left;
			overflow: hidden;
		}
		.jcxz_qyfw_bk {
			width: 95%;
			margin: 5px auto;
			text-align: center;
			overflow: hidden;
			border: 1px solid white;
			border-radius: 10upx;
			.jcxz_qyfw_num {
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
			.jcxz_qyfw_tit {
				color: white;
				margin-bottom: 20upx;
				line-height: 60upx;
				font-size: 32upx;
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
				border: 1px solid #1977c6;
				color: #333;
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
					font-weight: bold;
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
