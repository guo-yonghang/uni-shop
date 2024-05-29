import { ref } from 'vue'

export const useSliding = (callback) => {
	const startX = ref(0)
	const startY = ref(0)
	const threshold = 50
	const onTouchStart = (event) => {
		startX.value = event.touches[0].clientX
		startY.value = event.touches[0].clientY
	}
	const onTouchEnd = (event) => {
		const deltaX = event.changedTouches[0].clientX - startX.value
		const deltaY = event.changedTouches[0].clientY - startY.value
		if (Math.abs(deltaX) > Math.abs(deltaY)) {
			if (deltaX > threshold) {
				callback('right')
			} else if (deltaX < -threshold) {
				callback('left')
			}
		}
	}
	
	return {
		onTouchStart,
		onTouchEnd
	}
}
