"use strict";
const common_vendor = require("../../common/vendor.js");
const store_global = require("../../store/global.js");
const _sfc_main = {
  __name: "myself",
  setup(__props) {
    const globalStore = store_global.GlobalStore();
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(common_vendor.unref(globalStore).id)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/19512/Desktop/uni-shop/pages/index/myself.vue"]]);
wx.createPage(MiniProgramPage);
