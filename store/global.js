import { defineStore } from 'pinia'

export const GlobalStore = defineStore({
	id: 'GlobalStore',
	state: () => ({
		id: '100',
		userInfo: {}
	}),
	getters: {},
	actions: {}
})
