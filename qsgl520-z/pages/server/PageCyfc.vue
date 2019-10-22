<template>
	<view>
		<publicTitle publicTitleImg="index_banner8.jpg"></publicTitle>
		<view class="cyfc_dx">
			<view class="public_tt">
				<view class="public_shu"></view>
				<view class="public_title">创业扶持对象</view>
			</view>
			<view class="cyfc_dx_ul">
				<view class="cyfc_dx_li">
					<view class="cyfc_dx_bk">
						<view class="cyfc_dx_img" :style="'background:url(' + img_url + 'cyfc_dx_1.png) center no-repeat;background-size: cover'"></view>
						<view class="cyfc_dx_p">创新创业项目</view>
					</view>
				</view>
				<view class="cyfc_dx_li">
					<view class="cyfc_dx_bk">
						<view class="cyfc_dx_img" :style="'background:url(' + img_url + 'cyfc_dx_2.png) center no-repeat;background-size: cover'"></view>
						<view class="cyfc_dx_p">在读大学生</view>
					</view>
				</view>
				<view class="cyfc_dx_li">
					<view class="cyfc_dx_bk">
						<view class="cyfc_dx_img" :style="'background:url(' + img_url + 'cyfc_dx_3.png) center no-repeat;background-size: cover'"></view>
						<view class="cyfc_dx_p">高竞争行业，高新技术，</br>节能环保，国家提倡的产业</view>
					</view>
				</view>
			</view>
		</view>
		<view class="cyfc_fw">
			<view class="public_tt">
				<view class="public_shu"></view>
				<view class="public_title">创业服务范围</view>
			</view>
			<view class="cyfc_fw_ul">
				<view class="cyfc_fw_li" v-for="it in fwfw">
					<view class="cyfc_fw_bk">
						<view class="cyfc_fw_img" :style="'background:url(' + img_url + it.url+ ') center no-repeat;background-size: cover'"></view>
						<view class="cyfc_fw_p">{{it.title}}</view>
					</view>
				</view>
			</view>
		</view>
		<view class="cyfc_yh">
			<view class="public_tt">
				<view class="public_shu"></view>
				<view class="public_title">创业优惠政策</view>
			</view>
			<view class="cyfc_yh_ul">
				<view class="cyfc_yh_li" v-for="it in yhzc">
					<view class="cyfc_yh_bk" :style="'border: 1px solid '+it.color+';'">
						<view class="cyfc_yh_img" :style="'background:url(' + img_url + it.url+ ') center no-repeat;background-size: cover'"></view>
						<view class="cyfc_yh_p" :style="'background:'+it.color+';'">{{it.center}}</view>
					</view>
				</view>
			</view>
		</view>
		<view class="cyfc_cy">
			<view class="public_tt">
				<view class="public_shu"></view>
				<view class="public_title">六大创业政策</view>
			</view>
			<view class="cyfc_cy_ul">
				<view class="cyfc_cy_li" v-for="it in cyzc">
					<view class="cyfc_cy_bk">
						<view class="cyfc_cy_img" :style="'background:url(' + img_url + it.url + ') center no-repeat;background-size: cover'"></view>
						<view class="cyfc_cy_tit">{{ it.title }}</view>
						<view class="cyfc_cy_p1">{{ it.center }}</view>
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
			fwfw:[
				{
					url:'cyfc_cyfw_1.png',
					title:'政策咨询'
				},
				{
					url:'cyfc_cyfw_2.png',
					title:'运营指导'
				},
				{
					url:'cyfc_cyfw_3.png',
					title:'销售拓展'
				},
				{
					url:'cyfc_cyfw_4.png',
					title:'股权分配'
				},
				{
					url:'cyfc_cyfw_5.png',
					title:'成本指导'
				},
				{
					url:'cyfc_cyfw_6.png',
					title:'资金支持'
				}
			],
			yhzc:[
				{
					url:'1_rencai.png',
					color:'#1977c6',
					center:'人才激励'
				},
				{
					url:'2_zhengjian.png',
					color:'#00c1ff',
					center:'居住证办理'
				},
				{
					url:'3_youhui.png',
					color:'#164d7b',
					center:'税收优惠'
				}
			],
			cyzc:[
				{
					url:'2_chuangye.png',
					title:'青年创业',
					center:'青年创业政府政策资讯'
				},
				{
					url:'2_zhunbei.png',
					title:'创业初期',
					center:'创业初期运营指导'
				},
				{
					url:'2_xiaoshou.png',
					title:'创业销售',
					center:'创业销售培训'
				},
				{
					url:'2_guquan.png',
					title:'公司股权',
					center:'公司股权分配与出资指导'
				},
				{
					url:'2_yusuan.png',
					title:'运营成本',
					center:'运营成本合理分配指导'
				},
				{
					url:'2_xiangmu.png',
					title:'创业项目',
					center:'创业项目资金支持'
				}
			]
		};
	},
	methods: {}
};
</script>

<style lang="less">
.cyfc_dx {
	width: 90%;
	margin: 0 auto;
	margin-top: -40upx;
	border-radius: 10upx;
	overflow: hidden;
	box-shadow: 0 0 10upx 0upx #e2e2e2;
	.cyfc_dx_ul {
		overflow: hidden;
		background: white;
		.cyfc_dx_li {
			width: 50%;
			float: left;
			.cyfc_dx_bk {
				width: 95%;
				margin: 5px auto;
				text-align: center;
				overflow:hidden;
				border:1px solid #00a0e9;
				border-top:3px solid #00a0e9;
				.cyfc_dx_img {
					width: 180upx;
					height: 180upx;
					display: block;
					margin: 20upx auto;
				}
				.cyfc_dx_p {
					font-size: 28upx;
					color: #333;
					line-height: 60upx;
				}
			}
		}
		.cyfc_dx_li:nth-child(3){
			width: 100%;
			.cyfc_dx_bk{
				width: 97%;
			}
		}
	}
}
.cyfc_fw{
	width: 90%;
	margin: 40upx auto;
	border-radius: 10upx;
	overflow: hidden;
	box-shadow: 0 0 10upx 0upx #e2e2e2;
	.cyfc_fw_ul{
		overflow: hidden;
		background: white;
		.cyfc_fw_li{
			width: 50%;
			float: left;
			.cyfc_fw_bk{
				width: 95%;
				margin: 5px auto;
				text-align: center;
				overflow:hidden;
				border:1px solid #f39800;
				.cyfc_fw_img{
					width: 180upx;
					height: 180upx;
					display: block;
					margin: 20upx auto;
				}
				.cyfc_fw_p{
					font-size: 28upx;
					color: white;
					line-height: 60upx;
					background: #f39800;
				}
			}
		}
	}
}
.cyfc_yh{
	width: 90%;
	margin: 40upx auto;
	border-radius: 10upx;
	overflow: hidden;
	box-shadow: 0 0 10upx 0upx #e2e2e2;
	.cyfc_yh_ul{
		overflow: hidden;
		background: white;
		.cyfc_yh_li{
			width: 33.3%;
			float: left;
			.cyfc_yh_bk{
				width: 95%;
				margin: 5px auto;
				text-align: center;
				overflow:hidden;
				border:1px solid #f39800;
				.cyfc_yh_img{
					width: 180upx;
					height: 180upx;
					display: block;
					margin: 20upx auto;
				}
				.cyfc_yh_p{
					font-size: 28upx;
					color: white;
					line-height: 60upx;
					background: #f39800;
				}
			}
		}
	}
}
.cyfc_cy{
	width: 90%;
	margin: 40upx auto;
	border-radius: 10upx;
	overflow: hidden;
	box-shadow: 0 0 10upx 0upx #e2e2e2;
	.cyfc_cy_ul{
		overflow: hidden;
		background: white;
		.cyfc_cy_li{
			width: 50%;
			float: left;
			background: white;
			overflow: hidden;
			.cyfc_cy_bk{
				width: 95%;
				margin: 10upx auto;
				background: #1977c6;
				color: white;
				text-align: center;
				overflow: hidden;
				.cyfc_cy_img{
					width: 40%;
					height: 125upx;
					display: block;
					margin: 40upx auto;
				}
				.cyfc_cy_tit{
					font-size: 36upx;
					height: 60upx;
					line-height: 60upx;
				}
				.cyfc_cy_p1{
					height: 60upx;
					line-height: 60upx;
					font-size: 24upx;
				}
			}
		}
	}
}
</style>
