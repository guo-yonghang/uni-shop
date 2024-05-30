//获取请求内容
export function getHttpConfig(env) {
	const isDev = env === 'develop'
	return {
		baseURL: isDev ? '' : '',
		Authorization: isDev ? '' : '',
		wsURL: isDev ? '' : ''
	}
}
