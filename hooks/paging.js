import { ref } from 'vue'
import { onPullDownRefresh, onReachBottom, onLoad } from '@dcloudio/uni-app'

export const usePaging = (reqFunction) => {
	const page = ref(1)
	const flag = ref(false)
	const list = ref([])
	const loadStatus = ref('')

	onLoad(() => {
		reqFunction(true)
	})

	onPullDownRefresh(() => {
		if (flag.value) return
		reqFunction(true)
		setTimeout(() => {
			uni.stopPullDownRefresh()
		}, 1000)
	})

	onReachBottom(() => {
		if (flag.value || loadStatus.value === 'noMore') return
		page.value += 1
		reqFunction(false)
	})

	return {
		page,
		flag,
		list,
		loadStatus
	}
}
