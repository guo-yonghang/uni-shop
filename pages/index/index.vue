<template>
	<view class="">控制台</view>
	<view class="">pinia-id：{{ globalStore.id }}</view>
	<button @click="onChangeId">改变id</button>
</template>

<script setup>
import { GlobalStore } from '@/store/index.js'

const globalStore = GlobalStore()

const onChangeId = () => {
	globalStore.id = Math.ceil(Math.random() * 120)
}
</script>

<style lang="scss" scoped></style>
