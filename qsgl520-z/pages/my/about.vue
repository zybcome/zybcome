<template>
	<view>
		<publicTitle publicTitleImg="index_banner2.jpg"></publicTitle>
		<view class="gywe_gsjj">
			<view class="public_tt">
				<view class="public_shu"></view>
				<view class="public_title">公司简介</view>
			</view>
			<view class="gywe_gsjj_ul">
				<view class="gywe_gsjj_li">
					<view class="gywe_gsjj_p">{{ gsjj1 }}</view>
					<view class="gywe_gsjj_p">{{ gsjj2 }}</view>
					<view class="gywe_gsjj_p">{{ gsjj3 }}</view>
				</view>
			</view>
		</view>
		<view class="gywe_cact">
			<view class="public_tt">
				<view class="public_shu"></view>
				<view class="public_title">联系方式</view>
			</view>
			<view class="gywe_cact_ul">
				<view class="gywe_cact_li gywe_cact_li_1">企山创业园</view>
				<view class="gywe_cact_li">客服热线：021-64185363</view>
				<view class="gywe_cact_li">公司地址：上海市徐汇区斜土路2601号嘉汇广场T1幢4C室</view>
			</view>
		</view>
		<view class="gywe_addes">
			<view class="public_tt">
				<view class="public_shu"></view>
				<view class="public_title">公司地址</view>
			</view>
			<view class="gywe_addes_div">
				<view class="page-body">
					<view class="page-section page-section-gap">
						<map style="width: 100%; height: 300px;" :show-location="show_location" :latitude="latitude" :longitude="longitude" :markers="markers"></map>
					</view>
				</view>
			</view>
			<view>
				<button @click="openPopup">立即导航</button>
				<uni-popup ref="popup" type="bottom">
					<a class="gd_map" href="androidamap://viewMap?sourceApplication=企山创业园&poiname=上海市徐汇区斜土路2601号嘉汇广场T1幢4C室&lat=31.187000&lon=121.442802&dev=0">
						<button type="primary">高德地图导航</button>
					</a>
					<br />
					<a class="tx_map" href="http://apis.map.qq.com/uri/v1/marker?marker=coord:31.187000,121.442802;title:企山创业园;addr: 上海市徐汇区斜土路2601号嘉汇广场T1幢4C室">
						<button type="primary">腾讯地图导航</button>
					</a>
					<br />
				</uni-popup>
			</view>
		</view>
		<Footer></Footer>
	</view>
</template>

<script>
import uniPopup from '@/components/uni-popup/uni-popup.vue';
import publicTitle from './../head/publicTitle.vue';
import Footer from './../footer/footer.vue';
import { mapState, mapMutations } from 'vuex';
export default {
	components: {
		publicTitle,
		Footer,
		uniPopup
	},
	computed: {
		...mapState(['img_url'])
	},
	data() {
		return {
			show_location: false,
			title: 'map',
			latitude: 31.187151,
			longitude: 121.442979,
			markers: [
				{
					scale: 18,
					center: '企山创业园',
					width: 40,
					height: 40,
					latitude: 31.187151,
					longitude: 121.442979,
					iconPath: './../../static/img/position.png',
					callout: {
						content: '企山创业园嘉汇广场T1栋4c',
						padding: 10
					}
				}
			],
			gsjj1:
				'上海企山企业管理有限公司（简称：上海企山创业园）负责对接总部的招商引税业务。是市级开发区，主导产业有美丽健康产业，新能源新材料产业，电子信息产业，装备制造产业，物流产业，高端医疗器械。',
			gsjj2:
				'上海企山创业园致力于做企业老板的贴身管家，助力企业快速发展。自总公司创立至今，服务的企业会员已突破万家，目标在2019年全国企业会员达10万家。企山创业园是一个为企业提供综合服务的平台：从企业的创立初期到挂牌上市，在发展的不同阶段给予支持，同时也为创业者提供创业扶持；并积极做好经开区招商和入驻企业的对接服务。',
			gsjj3: '企山创业园，负责自贸区、张江及临港的产业辐射区企业招商对接。在徐汇区，奉贤区，宝山区，浦东新区，金山区，普陀区，静安区以及部分外省市地区均设有对接中心。'
		};
	},
	onLoad() {
		// #ifdef  MP-WEIXIN
		this.show_location = true;
		// #endif
	},
	methods: {
		openPopup() {
			this.$refs.popup.open();
		},
		closePopup() {
			this.$refs.popup.close();
		}
	}
};
</script>

<style lang="less">
.gywe_cact {
	width: 90%;
	margin: 0 auto;
	margin-top: 40upx;
	border-radius: 10upx;
	overflow: hidden;
	box-shadow: 0 0 10upx 0upx #e2e2e2;
	.gywe_cact_ul {
		padding: 20upx;
		.gywe_cact_li {
			font-size: 28upx;
			line-height: 50upx;
		}
		.gywe_cact_li_1 {
			font-size: 36upx;
			line-height: 60upx;
			color: #1977c6;
			font-weight: bold;
		}
	}
}
.gywe_gsjj {
	width: 90%;
	margin: 0 auto;
	margin-top: -40upx;
	border-radius: 10upx;
	overflow: hidden;
	box-shadow: 0 0 10upx 0upx #e2e2e2;
	.gywe_gsjj_ul {
		overflow: hidden;
		background: white;
		.gywe_gsjj_li {
			width: 92%;
			margin: 20upx auto;
			.gywe_gsjj_p {
				font-size: 28upx;
				color: #333;
				line-height: 60upx;
				text-indent: 56upx;
			}
		}
	}
}
.gywe_addes {
	width: 90%;
	margin: 0 auto;
	margin-top: 40upx;
	border-radius: 10upx;
	overflow: hidden;
	box-shadow: 0 0 10upx 0upx #e2e2e2;
	.gywe_addes_ul {
		width: 100%;
		height: 500upx;
	}
}
</style>
