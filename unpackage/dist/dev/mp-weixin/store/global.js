"use strict";
const common_vendor = require("../common/vendor.js");
const GlobalStore = common_vendor.defineStore({
  id: "GlobalStore",
  state: () => ({
    id: "100",
    userInfo: {
      name: "逆境生长的店铺",
      auth: 1
    }
  }),
  getters: {},
  actions: {}
});
exports.GlobalStore = GlobalStore;
