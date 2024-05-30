"use strict";
const common_vendor = require("../../common/vendor.js");
const store_global = require("../../store/global.js");
if (!Array) {
  const _easycom_uni_nav_bar2 = common_vendor.resolveComponent("uni-nav-bar");
  _easycom_uni_nav_bar2();
}
const _easycom_uni_nav_bar = () => "../../uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar.js";
if (!Math) {
  _easycom_uni_nav_bar();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const globalStore = store_global.GlobalStore();
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          fixed: true,
          ["status-bar"]: true,
          border: false,
          title: common_vendor.unref(globalStore).userInfo.name
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"], ["__file", "C:/Users/19512/Desktop/uni-shop/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
