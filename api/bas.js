import http from './config/http'

//根据code查询静态资源列表
export const queryStaticList = (params) => http.get('/rest/bas/queryStaticDataList', params)
