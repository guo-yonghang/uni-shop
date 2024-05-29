<template>
	<Tabs v-model="current" :list="newsTabList" scroll sticky @change="onTabChange"/>
	<uni-list @touchstart.capture="onTouchStart" @touchend.capture="onTouchEnd">
		<template v-for="(item, index) in data.list" :key="index">
			<uni-list-item title="山西一连锁餐厅被曝售卖福寿螺：门店称系人工养殖，有进货单" note="2024-05-28 21:20" thumb-size="lg" rightText="澎湃新闻" clickable>
				<template #header>
					<image class="thumb" src="https://picb7.photophoto.cn/15/306/15306707_1.jpg" mode="aspectFill"></image>
				</template>
			</uni-list-item>
		</template>
	</uni-list>
	<Empty type="news" text="没有新闻内容" v-if="data.loadStatus === 'noMore' && !data.list.length"></Empty>
	<uni-load-more :status="data.loadStatus" v-if="data.list.length"></uni-load-more>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { onLoad, onPullDownRefresh, onReachBottom } from '@dcloudio/uni-app'
import { newsTabList } from '@/common/data.js'
import { useSliding } from '@/hooks/index.js'

let page = 1
let flag = false
const current = ref(0)
const data = reactive({
	loadStatus: '',
	list: []
})

const getList = (reload = false) => {
	if (flag) return
	flag = true
	if (reload){
		 page = 1
		 data.list = []
	}
	uni.showLoading({ title: '加载中', mask: true })
	setTimeout(() => {
		const list = new Array(15).fill('')
		data.list = data.list.concat(list)
		data.loadStatus = page >= 4 ? 'noMore' : 'loading'
		flag = false
		uni.hideLoading()
	}, 500)
}

onLoad(() => {
	getList(true)
})

onPullDownRefresh(() => {
	getList(true)
	setTimeout(() => {
		uni.stopPullDownRefresh()
	}, 1000)
})

onReachBottom(() => {
	if (flag || data.loadStatus === 'noMore') return
	page += 1
	getList()
})

const onTabChange = () =>  {
	getList(true)
}

const onSliding = (detail) => {
	console.log(detail)
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
