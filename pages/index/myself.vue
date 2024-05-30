<template>
	<view>pinia-id:{{ globalStore.id }}</view>
</template>

<script setup>
import { GlobalStore } from '@/store/index.js'

const globalStore = GlobalStore()
</script>

<style lang="scss"></style>
