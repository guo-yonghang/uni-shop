<template>
	<view class="tabs-container" :style="{ position: sticky ? 'sticky' : 'none', top: stickyTop + 'px' }">
		<scroll-view class="tabs-list" :scroll-x="scroll" :scroll-left="scrollLeft" enable-flex :show-scrollbar="false" scroll-with-animation>
			<view class="tabs-nav">
				<block v-for="(item, index) in list" :key="index">
					<view :class="['tabs-item', { selected: modelValue === index }]" :style="{ padding: `0px ${padding}px` }" @click="onTabChange(index)">
						<text class="tabs-item__text">{{ item.name }}</text>
						<text :class="['tabs-item__dot', { mini: item.dot === 0 }]" :style="{ right: padding + 'px' }" v-if="item.dot !== undefined">
							{{ getDotValue(item.dot) }}
						</text>
					</view>
				</block>
			</view>
			<view class="line" :style="{ width: `${widths[modelValue]}px`, left: `${lefts[modelValue]}px` }">
				<view class="content" :style="{ '--padding': padding + 'px' }"></view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
const { screenWidth } = uni.getSystemInfoSync()
export default {
	name: 'Tabs',
	emits: ['update:modelValue', 'change'],
	props: {
		modelValue: { type: Number },
		list: { type: Array, default: () => [] },
		scroll: { type: Boolean, default: false },
		sticky: { type: Boolean, default: false },
		stickyTop: { type: [Number, String], default: 0 },
		padding: { type: [Number, String], default: 18 }
	},
	data() {
		return {
			lefts: [],
			widths: [],
		}
	},
	mounted() {
		uni.createSelectorQuery()
			.in(this)
			.selectAll('.tabs-item')
			.boundingClientRect((res) => {
				this.lefts = res.map((i) => i.left - 5)
				this.widths = res.map((i) => i.width)
			})
			.exec()
	},
	computed: {
		scrollLeft() {
			return this.lefts[this.modelValue] - screenWidth / 2 + this.widths[this.modelValue] / 2 + 5
		}
	},
	watch: {
		modelValue(newValue) {
			this.$emit('change', newValue)
		}
	},
	methods: {
		getDotValue(value) {
			if (value === 0) return ''
			if (value < 100) return value
			if (value >= 100) return '99+'
		},
		onTabChange(index) {
			if (this.modelValue === index) return
			this.$emit('update:modelValue', index)
		}
	}
}
</script>

<style lang="scss">
@import './index.scss';
</style>
