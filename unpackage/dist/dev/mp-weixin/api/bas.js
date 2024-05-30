"use strict";
const api_config_http = require("./config/http.js");
const queryStaticList = (params) => api_config_http.http.get("/rest/bas/queryStaticDataList", params);
exports.queryStaticList = queryStaticList;
