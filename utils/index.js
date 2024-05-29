import { isArray, isJsonString } from './test.js'

//深克隆
export function cloneDeep(obj) {
	if ([null, undefined, NaN, false].includes(obj)) return obj
	if (typeof obj !== 'object' && typeof obj !== 'function') {
		return obj
	}
	const o = test.array(obj) ? [] : {}
	for (const i in obj) {
		if (obj.hasOwnProperty(i)) {
			o[i] = typeof obj[i] === 'object' ? deepClone(obj[i]) : obj[i]
		}
	}
	return o
}
//时间格式化
export function timeFormat(dateTime, formatStr = 'yyyy-mm-dd hh:MM:ss') {
	if (typeof dateTime === 'string' && dateTime.includes('-')) {
		dateTime = dateTime.replace(/-/g, '/')
	}
	if (!dateTime) {
		dateTime = new Date()
	}
	if (!(dateTime instanceof Date)) {
		dateTime = new Date(dateTime)
	}
	const timeSource = {
		y: dateTime.getFullYear().toString(),
		m: (dateTime.getMonth() + 1).toString().padStart(2, '0'),
		d: dateTime.getDate().toString().padStart(2, '0'),
		h: dateTime.getHours().toString().padStart(2, '0'),
		M: dateTime.getMinutes().toString().padStart(2, '0'),
		s: dateTime.getSeconds().toString().padStart(2, '0')
	}
	for (const key in timeSource) {
		const [ret] = new RegExp(`${key}+`).exec(formatStr) || []
		if (ret) {
			const beginIndex = key === 'y' && ret.length === 2 ? 2 : 0
			formatStr = formatStr.replace(ret, timeSource[key].slice(beginIndex))
		}
	}
	return formatStr
}
//多久之前
export function timeFrom(dateTime, format = 'yyyy-mm-dd') {
	if (typeof dateTime === 'string') {
		dateTime = dateTime.replace(/-/g, '/')
	}
	if (!dateTime) dateTime = new Date()
	if (!(dateTime instanceof Date)) {
		dateTime = new Date(dateTime)
	}
	let timer = (Date.now() - dateTime.getTime()) / 1000
	let tips = ''
	switch (true) {
		case timer < 300:
			tips = '刚刚'
			break
		case timer >= 300 && timer < 3600:
			tips = parseInt(timer / 60) + '分钟前'
			break
		case timer >= 3600 && timer < 86400:
			tips = parseInt(timer / 3600) + '小时前'
			break
		case timer >= 86400 && timer < 2592000:
			tips = parseInt(timer / 86400) + '天前'
			break
		default:
			tips = timeFormat(dateTime, format)
	}
	return tips
}
//参数格式化
export function queryParams(data, isPrefix = true) {
	const prefix = isPrefix ? '?' : ''
	const result = []
	for (const key in data) {
		const value = data[key]
		if (!value || isArray(value)) continue
		result.push(`${key}=${value}`)
	}
	return result.length ? prefix + result.join('&') : ''
}
//随机字符
export function randomString(length = 6, upper = false) {
	let res = ''
	if (length <= 11) {
		res = Math.random(length)
			.toString(36)
			.slice(2, 2 + length)
			.padEnd(length, '0')
	} else {
		res = randomId(11) + randomId(length - 11)
	}
	if (upper) res = res.toUpperCase()
	return res
}
//深层解构json
export function jsonParseDeep(data) {
	if (isJsonString(data)) {
		const obj = JSON.parse(data)
		for (const key in obj) {
			obj[key] = jsonParseDeep(obj[key])
		}
		return obj
	}
	return data
}
