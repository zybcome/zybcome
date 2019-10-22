<template>
	<view>
		<text class="title_">{{text}}</text>
	</view>
</template>

<script>
export default {
	props:["text"],
	data() {
		return {};
	},
	onLoad() {},
	methods: {}
};
</script>

<style lang="less">
	.title_{
		text-align: center;
		font-size: 32upx;
		color: aqua;
	}
</style>
