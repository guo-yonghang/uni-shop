"use strict";
const common_vendor = require("../../common/vendor.js");
const store_global = require("../../store/global.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const globalStore = store_global.GlobalStore();
    const onChangeId = () => {
      globalStore.id = Math.ceil(Math.random() * 120);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(common_vendor.unref(globalStore).id),
        b: common_vendor.o(onChangeId)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/19512/Desktop/wjp-dealer-uni/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
