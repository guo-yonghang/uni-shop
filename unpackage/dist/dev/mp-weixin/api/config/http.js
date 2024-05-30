"use strict";
const common_vendor = require("../../common/vendor.js");
const common_helper = require("../../common/helper.js");
const env = "develop";
const httpConfig = common_helper.getHttpConfig(env);
common_vendor.wx$1.setEnableDebug({
  enableDebug: env === "develop"
});
function service(url, method, data = {}) {
  return new Promise((resolve, reject) => {
    const id = common_vendor.index.getStorageSync("id") || 0;
    url = url.replace("[id]", id);
    const jwtoken = common_vendor.index.getStorageSync("jwtoken");
    if (jwtoken)
      header.jwtoken = jwtoken;
    console.log("url", url);
    common_vendor.wx$1.request({
      url: httpConfig.baseURL + url,
      method,
      data,
      header: {
        Platform: "MiniProgramWx",
        Authorization: httpConfig.Authorization,
        "Content-Type": "application/json;charset=utf-8"
      },
      success(res) {
        resolve(res);
        reject(res.data.error);
      },
      fail(err) {
        console.log("我是错误信息", err);
        reject(err);
      }
    });
  });
}
const get = (url, data) => {
  return service(url, "GET", data);
};
const post = (url, data) => {
  return service(url, "POST", data);
};
const put = (url, data) => {
  return service(url, "PUT", data);
};
const del = (url, data) => {
  return service(url, "DELETE", data);
};
const http = {
  get,
  post,
  put,
  del
};
exports.http = http;
