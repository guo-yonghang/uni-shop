"use strict";
const common_vendor = require("../../common/vendor.js");
const hooks_paging = require("../../hooks/paging.js");
if (!Array) {
  const _easycom_uni_list_chat2 = common_vendor.resolveComponent("uni-list-chat");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  const _easycom_Empty2 = common_vendor.resolveComponent("Empty");
  const _easycom_uni_load_more2 = common_vendor.resolveComponent("uni-load-more");
  (_easycom_uni_list_chat2 + _easycom_uni_list2 + _easycom_Empty2 + _easycom_uni_load_more2)();
}
const _easycom_uni_list_chat = () => "../../uni_modules/uni-list/components/uni-list-chat/uni-list-chat.js";
const _easycom_uni_list = () => "../../uni_modules/uni-list/components/uni-list/uni-list.js";
const _easycom_Empty = () => "../../components/Empty/Empty.js";
const _easycom_uni_load_more = () => "../../uni_modules/uni-load-more/components/uni-load-more/uni-load-more.js";
if (!Math) {
  (_easycom_uni_list_chat + _easycom_uni_list + _easycom_Empty + _easycom_uni_load_more)();
}
const _sfc_main = {
  __name: "chat",
  setup(__props) {
    const getList = (reload = false) => {
      if (flag.value)
        return;
      flag.value = true;
      if (reload) {
        page.value = 1;
        list.value = [];
        loadStatus.value = "";
      }
      common_vendor.index.showLoading({ title: "加载中", mask: true });
      setTimeout(() => {
        list.value = list.value.concat(new Array(15).fill(""));
        loadStatus.value = page.value >= 4 ? "noMore" : "loading";
        flag.value = false;
        common_vendor.index.hideLoading();
      }, 500);
    };
    const { page, flag, list, loadStatus } = hooks_paging.usePaging(getList);
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.f(common_vendor.unref(list), (item, index, i0) => {
          return {
            a: "6dd0ec77-1-" + i0 + ",6dd0ec77-0",
            b: common_vendor.p({
              ["avatar-circle"]: true,
              title: "逆境生长",
              avatar: "https://img.36krcdn.com/20200404/v2_d6613223fb15414897a0ba3449d00afd_img_png",
              note: "2024年已经过去了二分之一，但改变自己为时不晚",
              time: "20:20",
              ["badge-text"]: index,
              clickable: true
            }),
            c: index
          };
        }),
        b: common_vendor.p({
          border: true
        }),
        c: common_vendor.unref(loadStatus) === "noMore" && !common_vendor.unref(list).length
      }, common_vendor.unref(loadStatus) === "noMore" && !common_vendor.unref(list).length ? {
        d: common_vendor.p({
          type: "message",
          text: "没有消息内容"
        })
      } : {}, {
        e: common_vendor.unref(list).length
      }, common_vendor.unref(list).length ? {
        f: common_vendor.p({
          status: common_vendor.unref(loadStatus)
        })
      } : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/19512/Desktop/uni-shop/pages/index/chat.vue"]]);
wx.createPage(MiniProgramPage);
