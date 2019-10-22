<template>
	<view>
		<view class="cou_list">
			<view class="public_tt">
				<view class="public_shu"></view>
				<view class="public_title">我的优惠券</view>
			</view>
			<view class="cou_list_ul">
				<view class="cou_list_li" v-for="(it, num) in yhq" :key="it.url">
					<view class="cou_list_bk" v-if="it.yong_yhq" :style="'background:url(' + img_url + it.url + ') center no-repeat;background-size: cover'">
						<view class="cou_list_kg" @click="yong_yhq(num)"></view>
					</view>
					<view class="cou_list_bk" v-if="!it.yong_yhq" :style="'background:url(' + img_url + it.url_g + ') center no-repeat;background-size: cover'"></view>
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
	data() {
		return {
			yhq: [
				{
					url: 'yhq_300.png',
					url_g: 'yhq_300_g.png',
					yong_yhq: true
				},
				{
					url: 'yhq_500.png',
					url_g: 'yhq_500_g.png',
					yong_yhq: true
				},
				{
					url: 'yhq_8z.png',
					url_g: 'yhq_8z_g.png',
					yong_yhq: true
				}
			]
		};
	},
	methods: {
		yong_yhq(num) {
			this.yhq[num].yong_yhq = false;
			// uni.request({
			// 	header: {
			// 		'content-type': 'application/x-www-form-urlencoded'
			// 	},
			// 	url: 'https://www.qsgl520.com/index.php?g=user&m=login&a=is_login',
			// 	data: {
			// 		time: that.times_
			// 	},
			// 	method: 'POST',
			// 	success: res => {
			// 		console.log(res);
			// 		// uni.setStorage({
			// 		// key:"session",
			// 		// data:res.data.type
			// 		// })
			// 	}
			// });
		}
	}
};
</script>

<style lang="less">
.cou_list {
	width: 100%;
	padding-top: 20upx;
	width: 90%;
	margin: 0 auto;
	border-radius: 10upx;
	overflow: hidden;
	box-shadow: 0 0 10upx 0upx #e2e2e2;
	.cou_list_ul {
		overflow: hidden;
		margin: 0 auto;
		background: white;
		.cou_list_li {
			width: 100%;
			overflow: hidden;
			.cou_list_bk {
				width: 80%;
				height: 300upx;
				margin: 0 auto;
				overflow: hidden;
				position: relative;
				.cou_list_kg {
					width: 40%;
					position: absolute;
					height: 300upx;
					top: 0;
					right: 0;
				}
				.cou_list_p {
					margin-top: 100upx;
				}
			}
		}
	}
}
</style>
