<template>
	<view>
		<view class="public_img" :style="'background:url('+img_url+publicTitleImg+') center no-repeat;background-size: cover'">
			
		</view>
	</view>
</template>

<script>
	import { mapState, mapMutations } from 'vuex';
	export default {
		components: {},
		computed: {
			...mapState(['img_url'])
		},
		props:['publicTitleImg'],
		data() {
			return {};
		},
		methods: {}
	};
</script>

<style lang="less">
	.public_img{
		width: 100%;
		height: 400upx;
	}
</style>
