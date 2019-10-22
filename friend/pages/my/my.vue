<template>
	<view class="content" @touchmove="mytouchmove" @touchstart="mytouchstart" @touchend="mytouchend">
		<Head text="我的页面"></Head>
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title" @click="login">{{ title }}</text>
		</view>
		<uni-swipe-action :options="options"><view class="cont">SwipeAction 基础使用场景</view></uni-swipe-action>
		<uni-swipe-action :disabled="true" :options="options"><view class="cont">禁止滑动示例</view></uni-swipe-action>
		<uni-swipe-action @click="bindClick" :options="options"><view class="cont">点击选项时触发事件</view></uni-swipe-action>
		<uni-list>
			<uni-swipe-action :options="options1"><uni-list-item title="item1" show-arrow="false"></uni-list-item></uni-swipe-action>
			<uni-swipe-action :options="options2"><uni-list-item title="item2" show-arrow="false"></uni-list-item></uni-swipe-action>
			<uni-swipe-action :options="options3"><uni-list-item title="item3" show-arrow="false"></uni-list-item></uni-swipe-action>
		</uni-list>
	</view>
</template>

<script>
import Head from '../head/head.vue';
import uniList from '@/components/uni-list/uni-list.vue';
import uniListItem from '@/components/uni-list-item/uni-list-item.vue';
import uniSwipeAction from '@/components/uni-swipe-action/uni-swipe-action.vue';
export default {
	components: {
		Head,
		uniSwipeAction,
		uniList,
		uniListItem
	},
	data() {
		return {
			title: '点我',
			// 滑动事件
			flag: 0,
			text: '',
			lastX: 0,
			lastY: 0,
			options: [
				{
					text: '取消',
					style: {
						backgroundColor: '#007aff'
					}
				},
				{
					text: '确认',
					style: {
						backgroundColor: '#dd524d'
					}
				}
			],
			options1: [
				{
					text: '取消',
					style: {
						backgroundColor: '#007aff'
					}
				},
				{
					text: '确认',
					style: {
						backgroundColor: '#dd524d'
					}
				}
			],
			options2: [
				{
					text: '取消',
					style: {
						backgroundColor: '#007aff'
					}
				},
				{
					text: '确认',
					style: {
						backgroundColor: '#dd524d'
					}
				}
			],
			options3: [
				{
					text: '取消',
					style: {
						backgroundColor: '#007aff'
					}
				},
				{
					text: '确认',
					style: {
						backgroundColor: '#dd524d'
					}
				}
			]
		};
	},
	onLoad() {},
	methods: {
		login() {
			// console.log('222');
		},
		bindClick() {
			console.log(1);
		},
		mytouchmove(event) {
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
					this.$router.push('./../../pages/index/index');
					//  this.getList();  //调用列表的方法
				} else if (tx > 0) {
					text = '向右滑动';
					this.$router.push('./../../pages/login/login');
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
		mytouchstart(event) {
			// console.log(event)
			this.lastX = event.touches[0].pageX;
			this.lastY = event.touches[0].pageY;
		},
		mytouchend(event) {
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
