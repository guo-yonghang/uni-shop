<template>
	<uni-list :border="true">
		<template v-for="(item, index) in data.list" :key="index">
			<uni-list-chat
				:avatar-circle="true"
				title="逆境生长"
				avatar="https://img.36krcdn.com/20200404/v2_d6613223fb15414897a0ba3449d00afd_img_png"
				note="2024年已经过去了二分之一，但改变自己为时不晚"
				time="20:20"
				:badge-text="index"
				clickable
			></uni-list-chat>
		</template>
	</uni-list>
	<Empty type="message" text="没有消息内容" v-if="data.loadStatus === 'noMore' && !data.list.length"></Empty>
	<uni-load-more :status="data.loadStatus" v-if="data.list.length"></uni-load-more>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { onLoad, onPullDownRefresh, onReachBottom } from '@dcloudio/uni-app'

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
	if (reload) {
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
</script>

<style lang="scss"></style>
