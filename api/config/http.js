import { getHttpConfig } from '@/common/helper.js'

const env = 'develop'
// const env = 'release'

export const httpConfig = getHttpConfig(env)

// #ifdef MP-WEIXIN
wx.setEnableDebug({
	enableDebug: env === 'develop'
})
// #endif

function service(url, method, data = {}) {
	// // #ifdef MP-WEIXIN
	// if (__wxConfig.envVersion === 'trial') {
	// 	console.log('请求url', url)
	// 	console.log('请求params', data)
	// }
	// #endif
	return new Promise((resolve, reject) => {
		const id = uni.getStorageSync('id') || 0
		url = url.replace('[id]', id)
		const jwtoken = uni.getStorageSync('jwtoken')
		if (jwtoken) header.jwtoken = jwtoken
		console.log('url', url)
		wx.request({
			url: httpConfig.baseURL + url,
			method,
			data,
			header: {
				Platform: 'MiniProgramWx',
				Authorization: httpConfig.Authorization,
				'Content-Type': 'application/json;charset=utf-8'
			},
			success(res) {
				resolve(res)
				reject(res.data.error)
			},
			fail(err) {
				console.log('我是错误信息', err)
				reject(err)
			}
		})
	})
}
const get = (url, data) => {
	return service(url, 'GET', data)
}
const post = (url, data) => {
	return service(url, 'POST', data)
}
const put = (url, data) => {
	return service(url, 'PUT', data)
}
const del = (url, data) => {
	return service(url, 'DELETE', data)
}

export default {
	get,
	post,
	put,
	del
}
