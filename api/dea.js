import http from './config/http'

// 获取会话列表
export const queryChatList = (data) => http.get('/rest/dealer/queryChatList/[id]', data)
// 获取对话消息列表
export const queryMsgList = (data) => http.get('/rest/dealer/queryMsgList/[id]', data)
