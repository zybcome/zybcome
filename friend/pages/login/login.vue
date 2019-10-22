<template>
	<view class="content" @touchmove="logintouchmove" @touchstart="logintouchstart" @touchend="logintouchend">
		<Head text="登录页面"></Head>
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title" @click="login">{{ title }}</text>
		</view>
	</view>
</template>

<script>
import Head from '../head/head.vue';
export default {
	components: {
		Head
	},
	data() {
		return {
			title: '点我'
		};
	},
	onLoad() {},
	methods: {
		login() {
			// console.log('222');
		},
		// 滑动事件
		logintouchmove(event) {
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
					this.$router.push("./../../pages/my/my")
					//  this.getList();  //调用列表的方法
				} else if (tx > 0) {
					text = '向右滑动';
					this.$router.push("./../../pages/index/index")
					this.flag = 2;
					// this.show = true;
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
		logintouchstart(event) {
			// console.log(event)
			this.lastX = event.touches[0].pageX;
			this.lastY = event.touches[0].pageY;
		},
		logintouchend(event) {
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
</style>
