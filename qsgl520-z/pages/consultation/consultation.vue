<template>
	<view class="index_title"><Head></Head></view>
</template>

<script>
import Head from './../head/head.vue';
import { mapState, mapMutations } from 'vuex';
export default {
	computed: {
		...mapState(['img_url'])
	},
	components: {
		Head
	}
};
</script>

<style></style>
