<template>
	<view>
		<view class="index_title"><Head></Head></view>
		<view class="ser_list" :class="vxin_lb">
			<view class="ser_ul">
				<view class="ser_li" v-for="it in server" :key="it.url">
					<view class="ser_li_bk">
						<navigator :url="'../../pages/server/' + it.pages">
							<view class="ser_li_img" :style="'background:url(' + img_url + it.url + ') center no-repeat;background-size: cover'"></view>
							<view class="ser_li_p">{{ it.title }}</view>
						</navigator>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import Head from './../head/head.vue';
import { mapState, mapMutations } from 'vuex';
export default {
	components: {
		Head
	},
	computed: {
		...mapState(['img_url'])
	},
	onLoad() {
		// #ifdef  MP-WEIXIN
		this.vxin_lb = 'vxin_lb';
		// #endif
		// #ifdef  APP-PLUS
		this.vxin_lb = 'vxin_lb';
		// #endif
	},
	data() {
		return {
			vxin_lb:'',
			server: [
				{
					url: 'index_fwnr_1.png',
					title: '注册公司',
					center: '',
					pages: 'PageZcgs'
				},
				{
					url: 'index_fwnr_2.png',
					title: '代理记账',
					center: '',
					pages: 'PageDljz'
				},
				{
					url: 'index_fwnr_3.png',
					title: '财税管理',
					center: '',
					pages: 'PageCsgl'
				},
				{
					url: 'index_fwnr_4.png',
					title: '建厂选址',
					center: '',
					pages: 'PageJcxz'
				},
				{
					url: 'index_fwnr_5.png',
					title: '创业扶持',
					center: '',
					pages: 'PageCyfc'
				},
				{
					url: 'index_fwnr_6.png',
					title: '项目孵化',
					center: '',
					pages: 'PageXmfh'
				},
				{
					url: 'index_fwnr_7.png',
					title: '人事社保',
					center: '',
					pages: 'PageRssb'
				},
				{
					url: 'index_fwnr_8.png',
					title: '商标专利',
					center: '',
					pages: 'PageSbzl'
				}
			]
		};
	}
};
</script>

<style lang="less">
.ser_list {
	width: 100%;
	padding-top: 30upx;
	.ser_ul {
		width: 95%;
		overflow: hidden;
		margin: 0 auto;
		.ser_li {
			width: 50%;
			float: left;
			// background: black;
			// margin-top: 20upx;
			overflow: hidden;
			.ser_li_bk {
				background: white;
				width: 90%;
				margin: 20upx auto;
				text-align: center;
				overflow: hidden;
				box-shadow: 0 0 10px 0px #e2e2e2;
				.ser_li_img {
					width: 50%;
					height: 180upx;
					margin: 20upx auto;
				}
				.ser_li_p {
					font-size: 32upx;
					font-weight: bold;
					margin: 20upx 0;
				}
			}
		}
	}
}
</style>
