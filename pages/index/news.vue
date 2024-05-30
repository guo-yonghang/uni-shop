<template>
	<Tabs v-model="current" :list="newsTabList" scroll sticky @change="onTabChange" />
	<uni-list @touchstart.capture="onTouchStart" @touchend.capture="onTouchEnd">
		<template v-for="(item, index) in list" :key="index">
			<uni-list-item title="山西一连锁餐厅被曝售卖福寿螺：门店称系人工养殖，有进货单" note="2024-05-28 21:20" thumb-size="lg" rightText="澎湃新闻" clickable>
				<template #header>
					<image class="thumb" src="https://picb7.photophoto.cn/15/306/15306707_1.jpg" mode="aspectFill"></image>
				</template>
			</uni-list-item>
		</template>
	</uni-list>
	<Empty type="news" text="没有新闻内容" v-if="loadStatus === 'noMore' && !list.length"></Empty>
	<uni-load-more :status="loadStatus" v-if="list.length"></uni-load-more>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { onLoad, onPullDownRefresh, onReachBottom } from '@dcloudio/uni-app'
import { newsTabList } from '@/common/data.js'
import { useSliding, usePaging } from '@/hooks/index.js'

const current = ref(0)

const getList = (reload = false) => {
	if (flag.value) return
	flag.value = true
	if (reload) {
		page.value = 1
		list.value = []
		loadStatus.value = ''
	}
	uni.showLoading({ title: '加载中', mask: true })
	setTimeout(() => {
		list.value = list.value.concat(new Array(15).fill(''))
		loadStatus.value = page.value >= 4 ? 'noMore' : 'loading'
		flag.value = false
		uni.hideLoading()
	}, 500)
}

const { page, flag, list, loadStatus } = usePaging(getList)

const onTabChange = () => {
	getList(true)
}

const onSliding = (detail) => {
	if (detail === 'left' && current.value !== newsTabList.length - 1) {
		current.value += 1
	}
	if (detail === 'right' && current.value !== 0) {
		current.value -= 1
	}
}

const { onTouchStart, onTouchEnd } = useSliding(onSliding)
</script>

<style lang="scss" scoped>
.thumb {
	width: 120px;
	height: 85px;
	margin-right: 10px;
}
</style>
