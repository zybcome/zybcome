<template>
	<!-- 服务分类 -->
	<view v-if="visibleSync" class="uni-drawer" @touchmove.stop.prevent="moveHandle" :class="{ 'uni-drawer--visible': showDrawer, 'uni-drawer--right': rightMode }">
		<view class="uni-drawer__mask" @tap="close"></view>
		<view class="uni-drawer__content">
			<slot></slot>
			<uni-list>
				<navigator url="../../pages/server/PageZcgs">
					<uni-list-item thumb="https://www.qsgl520.com/themes/simplebootx_mobile/Public/assets/img/index_fwnr_1.png" title="注册公司" show-arrow="false"></uni-list-item>
				</navigator>
				<navigator url="../../pages/server/PageDljz">
					<uni-list-item thumb="https://www.qsgl520.com/themes/simplebootx_mobile/Public/assets/img/index_fwnr_2.png" title="代理记账" show-arrow="false"></uni-list-item>
				</navigator>
				<navigator url="../../pages/server/PageCsgl">
					<uni-list-item thumb="https://www.qsgl520.com/themes/simplebootx_mobile/Public/assets/img/index_fwnr_3.png" title="财税管理" show-arrow="false"></uni-list-item>
				</navigator>
				<navigator url="../../pages/server/PageJcxz">
					<uni-list-item thumb="https://www.qsgl520.com/themes/simplebootx_mobile/Public/assets/img/index_fwnr_4.png" title="建厂选址" show-arrow="false"></uni-list-item>
				</navigator>
				<navigator url="../../pages/server/PageCyfc">
					<uni-list-item thumb="https://www.qsgl520.com/themes/simplebootx_mobile/Public/assets/img/index_fwnr_5.png" title="创业扶持" show-arrow="false"></uni-list-item>
				</navigator>
				<navigator url="../../pages/server/PageXmfh">
					<uni-list-item thumb="https://www.qsgl520.com/themes/simplebootx_mobile/Public/assets/img/index_fwnr_6.png" title="项目孵化" show-arrow="false"></uni-list-item>
				</navigator>
				<navigator url="../../pages/server/PageRssb">
					<uni-list-item thumb="https://www.qsgl520.com/themes/simplebootx_mobile/Public/assets/img/index_fwnr_7.png" title="人事社保" show-arrow="false"></uni-list-item>
				</navigator>
				<navigator url="../../pages/server/PageSbzl">
					<uni-list-item thumb="https://www.qsgl520.com/themes/simplebootx_mobile/Public/assets/img/index_fwnr_8.png" title="商标专利" show-arrow="false"></uni-list-item>
				</navigator>
			</uni-list>
		</view>
	</view>
</template>

<script>
import uniList from '@/components/uni-list/uni-list.vue';
import uniListItem from '@/components/uni-list-item/uni-list-item.vue';
export default {
	components: { uniList, uniListItem },
	name: 'uni-drawer',
	props: {
		/**
		 * 显示状态
		 */
		visible: {
			type: Boolean,
			default: false
		},
		/**
		 * 显示模式（左、右），只在初始化生效
		 */
		mode: String,
		/**
		 * 蒙层显示状态
		 */
		mask: {
			type: [Boolean, String],
			default: true
		}
	},
	data() {
		return {
			visibleSync: false,
			showDrawer: false,
			rightMode: false,
			closeTimer: null,
			watchTimer: null
		};
	},
	watch: {
		visible(val) {
			clearTimeout(this.watchTimer);
			setTimeout(() => {
				this.showDrawer = val;
			}, 100);
			if (this.visibleSync) {
				clearTimeout(this.closeTimer);
			}
			if (val) {
				this.visibleSync = val;
			} else {
				this.watchTimer = setTimeout(() => {
					this.visibleSync = val;
				}, 300);
			}
		}
	},
	computed: {
		showMask() {
			return String(this.mask) === 'true';
		}
	},
	created() {
		this.visibleSync = this.visible;
		setTimeout(() => {
			this.showDrawer = this.visible;
		}, 100);
		this.rightMode = this.mode === 'right';
	},
	methods: {
		close() {
			this.showDrawer = false;
			this.$emit('close');
			this.closeTimer = setTimeout(() => {
				this.visibleSync = false;
			}, 200);
		},
		moveHandle() {}
	}
};
</script>

<style lang="scss">
$drawer-width: 61.8%;

.uni-drawer {
	display: block;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	overflow: hidden;
	visibility: hidden;
	z-index: 998;
	height: 100%;

	&.uni-drawer--right {
		.uni-drawer__content {
			left: auto;
			right: 0;
			transform: translatex(100%);
		}
	}

	&.uni-drawer--visible {
		visibility: visible;

		.uni-drawer__content {
			transform: translatex(0);
		}

		.uni-drawer__mask {
			display: block;
			opacity: 1;
		}
	}

	&__mask {
		display: block;
		opacity: 0;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: $uni-bg-color-mask;
		transition: opacity 0.3s;
	}

	&__content {
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		width: $drawer-width;
		height: 100%;
		background: $uni-bg-color;
		transition: all 0.3s ease-out;
		transform: translatex(-100%);
	}
}
</style>
