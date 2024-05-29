"use strict";
const common_vendor = require("../common/vendor.js");
const GlobalStore = common_vendor.defineStore({
  id: "GlobalStore",
  state: () => ({
    id: "100",
    userInfo: {}
  }),
  getters: {},
  actions: {}
});
exports.GlobalStore = GlobalStore;
