<template>
	<uni-list-chat :title="globalStore.userInfo.name" avatar-circle avatar="https://img.36krcdn.com/20200404/v2_d6613223fb15414897a0ba3449d00afd_img_png" note="19512111111">
		<view class="flxsc" style="height: 100%">
			<uni-tag text="已认证" type="primary" v-if="globalStore.userInfo.auth === 1" />
			<uni-tag text="未认证" v-else />
		</view>
	</uni-list-chat>
	<view style="height: 15px"></view>
	<uni-list-item title="店铺二维码" showArrow clickable thumb="/static/tabbar/apps_fill.png" thumb-size="sm" />
	<uni-list-item title="店铺优惠券" showArrow clickable thumb="/static/tabbar/apps_fill.png" thumb-size="sm" />
	<uni-list-item title="店铺积分" showArrow clickable thumb="/static/tabbar/apps_fill.png" thumb-size="sm" />
	<uni-list-item title="意见反馈" showArrow clickable thumb="/static/tabbar/apps_fill.png" thumb-size="sm" />
	<uni-list-item title="联系客服" showArrow clickable thumb="/static/tabbar/apps_fill.png" thumb-size="sm" />
</template>

<script setup>
import { GlobalStore } from '@/store/index.js'

const globalStore = GlobalStore()
</script>

<style lang="scss"></style>
