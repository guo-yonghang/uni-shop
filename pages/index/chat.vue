<template>
	<uni-list :border="true">
		<template v-for="(item, index) in list" :key="index">
			<uni-list-chat
				avatar-circle
				title="逆境生长"
				avatar="https://img.36krcdn.com/20200404/v2_d6613223fb15414897a0ba3449d00afd_img_png"
				note="2024年已经过去了二分之一，但改变自己为时不晚"
				time="20:20"
				:badge-text="index"
				clickable
			></uni-list-chat>
		</template>
	</uni-list>
	<Empty type="message" text="没有消息内容" v-if="loadStatus === 'noMore' && !list.length"></Empty>
	<uni-load-more :status="loadStatus" v-if="list.length"></uni-load-more>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { onLoad, onPullDownRefresh, onReachBottom } from '@dcloudio/uni-app'
import { usePaging } from '@/hooks/index.js'

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
</script>

<style lang="scss"></style>
