<template>
	<uni-nav-bar fixed status-bar :border="false" :title="globalStore.userInfo.name">
		<template #left>
			<image class="avatar" src="http://jpf.wanrungj.com/upload/file/2023-08-15/1692105415893p8uESUXbpR.png" mode="aspectFill"></image>
		</template>
	</uni-nav-bar>
	<view class="header-wrapper">
		
	</view>
</template>

<script setup>
import { GlobalStore } from '@/store/index.js'

const globalStore = GlobalStore()
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
