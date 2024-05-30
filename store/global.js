import { defineStore } from 'pinia'

export const GlobalStore = defineStore({
	id: 'GlobalStore',
	state: () => ({
		id: '100',
		userInfo: {
			name: '逆境生长的店铺',
			auth: 1
		}
	}),
	getters: {},
	actions: {}
})
