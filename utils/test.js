//数组
export function isArray(value) {
	return Object.prototype.toString.call(value) === '[object Array]'
}
//JSON字符
export function isJsonString(value) {
	if (typeof value !== 'string') return false
	try {
		JSON.parse(value)
	} catch (e) {
		return false
	}
}
