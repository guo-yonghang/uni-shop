<template>
	<view class="empty-container">
		<image :src="imgSrc" mode="widthFix" :style="{ width: width + 'px', height: width + 'px' }"></image>
		<slot name="text">
			<view class="text">{{ text }}</view>
		</slot>
		<slot name="btn"></slot>
	</view>
</template>

<script>
	/* 
		slots:
			text
			btn
	 */
export default {
	name: 'Empty',
	props: {
		type: { type: String, default: 'list' },
		src: { type: String, default: '' },
		width: { type: [Number, String], default: 250 },
		text: { type: String, default: '' }
	},
	data() {
		return {}
	},
	computed: {
		imgSrc() {
			return this.src ? this.src : `http://jpf.wanrungj.com/upload/empty/${this.type}.png`
		}
	},
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
