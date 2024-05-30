"use strict";
const common_vendor = require("../common/vendor.js");
const usePaging = (reqFunction) => {
  const page = common_vendor.ref(1);
  const flag = common_vendor.ref(false);
  const list = common_vendor.ref([]);
  const loadStatus = common_vendor.ref("");
  common_vendor.onLoad(() => {
    reqFunction(true);
  });
  common_vendor.onPullDownRefresh(() => {
    if (flag.value)
      return;
    reqFunction(true);
    setTimeout(() => {
      common_vendor.index.stopPullDownRefresh();
    }, 1e3);
  });
  common_vendor.onReachBottom(() => {
    if (flag.value || loadStatus.value === "noMore")
      return;
    page.value += 1;
    reqFunction(false);
  });
  return {
    page,
    flag,
    list,
    loadStatus
  };
};
exports.usePaging = usePaging;
