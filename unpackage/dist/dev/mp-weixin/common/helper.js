"use strict";
function getHttpConfig(env) {
  const isDev = env === "develop";
  return {
    baseURL: isDev ? "http://118.25.73.168/dea" : "https://jp.hellocareai.com/dea",
    Authorization: isDev ? "Basic dGVzdDphc2RmMQ==" : "Basic cHJlOkpQX3ByZSY1MTAzMjI=",
    wsURL: isDev ? "ws://118.25.73.168/ws/dkf/d/" : "wss://jp.hellocareai.com/ws/dkf/d/"
  };
}
exports.getHttpConfig = getHttpConfig;
