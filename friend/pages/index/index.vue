<template>
	<view class="content" @touchmove="handletouchmove" @touchstart="handletouchstart" @touchend="handletouchend">
		<Head text="首页头部"></Head>
		<uni-drawer :visible="show" :mode="fangx" @close="close_">
			<view style="padding:30upx;" @click="guanbi"><view class="uni-title">抽屉式导航</view></view>
		</uni-drawer>
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title" @tap="chouti">{{ title }}</text>
		</view>
		<!-- <navigator url="./../login/login">跳转到登录页面</navigator> -->
		<navigator url="./../swiper/swiper">跳转到swiper</navigator>
		<navigator url="./../login/login">跳转到登录</navigator>
		<view class="relative">{{ text }}</view>
	</view>
</template>

<script>
import Head from '../head/head.vue';
import uniDrawer from '@/components/uni-drawer/uni-drawer.vue';
export default {
	components: {
		Head,
		uniDrawer,
	},
	data() {
		return {
			title: '点我',
			show: false,
			fangx: 'left',

			// 滑动事件
			flag: 0,
			text: '',
			lastX: 0,
			lastY: 0,
			
		};
	},
	onLoad() {},

	methods: {
		close_() {
			this.show = false;
		},
		chouti() {
			console.log(1);
			this.show = true;
			console.log(this.show);
		},
		guanbi() {
			console.log(2);
		},

		// 滑动事件
		handletouchmove(event) {
			// console.log(event)
			if (this.flag !== 0) {
				return;
			}
			let currentX = event.touches[0].pageX;
			let currentY = event.touches[0].pageY;
			let tx = currentX - this.lastX;
			let ty = currentY - this.lastY;
			let text = '';
			this.mindex = -1;
			//左右方向滑动
			if (Math.abs(tx) > Math.abs(ty)) {
				if (tx < 0) {
					text = '向左滑动';
					this.flag = 1;
					this.$router.push("./../../pages/login/login")
					//  this.getList();  //调用列表的方法
				} else if (tx > 0) {
					text = '向右滑动';
					this.flag = 2;
					this.show = true;
				}
			}
			//上下方向滑动
			else {
				if (ty < 0) {
					text = '向上滑动';
					this.flag = 3;
					//  this.getList();  //调用列表的方法
				} else if (ty > 0) {
					text = '向下滑动';
					this.flag = 4;
				}
			}

			//将当前坐标进行保存以进行下一次计算
			this.lastX = currentX;
			this.lastY = currentY;
			this.text = text;
		},
		handletouchstart(event) {
			// console.log(event)
			this.lastX = event.touches[0].pageX;
			this.lastY = event.touches[0].pageY;
		},
		handletouchend(event) {
			this.flag = 0;
			this.text = '没有滑动';
		}
	}
};
</script>

<style lang="less">
.content {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.logo {
	height: 200upx;
	width: 200upx;
	margin-top: 200upx;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 50upx;
}

.text-area {
	display: flex;
	justify-content: center;
}

.title {
	font-size: 36upx;
	color: #8f8f94;
}
.relative {
	width: 100%;
	height: 200px;
	border: 1px solid #333;
}
</style>
