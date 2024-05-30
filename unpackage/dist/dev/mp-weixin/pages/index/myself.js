"use strict";
const common_vendor = require("../../common/vendor.js");
const store_global = require("../../store/global.js");
if (!Array) {
  const _easycom_uni_tag2 = common_vendor.resolveComponent("uni-tag");
  const _easycom_uni_list_chat2 = common_vendor.resolveComponent("uni-list-chat");
  const _easycom_uni_list_item2 = common_vendor.resolveComponent("uni-list-item");
  (_easycom_uni_tag2 + _easycom_uni_list_chat2 + _easycom_uni_list_item2)();
}
const _easycom_uni_tag = () => "../../uni_modules/uni-tag/components/uni-tag/uni-tag.js";
const _easycom_uni_list_chat = () => "../../uni_modules/uni-list/components/uni-list-chat/uni-list-chat.js";
const _easycom_uni_list_item = () => "../../uni_modules/uni-list/components/uni-list-item/uni-list-item.js";
if (!Math) {
  (_easycom_uni_tag + _easycom_uni_list_chat + _easycom_uni_list_item)();
}
const _sfc_main = {
  __name: "myself",
  setup(__props) {
    const globalStore = store_global.GlobalStore();
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.unref(globalStore).userInfo.auth === 1
      }, common_vendor.unref(globalStore).userInfo.auth === 1 ? {
        b: common_vendor.p({
          text: "已认证",
          type: "primary"
        })
      } : {
        c: common_vendor.p({
          text: "未认证"
        })
      }, {
        d: common_vendor.p({
          title: common_vendor.unref(globalStore).userInfo.name,
          ["avatar-circle"]: true,
          avatar: "https://img.36krcdn.com/20200404/v2_d6613223fb15414897a0ba3449d00afd_img_png",
          note: "19512111111"
        }),
        e: common_vendor.p({
          title: "店铺二维码",
          showArrow: true,
          clickable: true,
          thumb: "/static/tabbar/apps_fill.png",
          ["thumb-size"]: "sm"
        }),
        f: common_vendor.p({
          title: "店铺优惠券",
          showArrow: true,
          clickable: true,
          thumb: "/static/tabbar/apps_fill.png",
          ["thumb-size"]: "sm"
        }),
        g: common_vendor.p({
          title: "店铺积分",
          showArrow: true,
          clickable: true,
          thumb: "/static/tabbar/apps_fill.png",
          ["thumb-size"]: "sm"
        }),
        h: common_vendor.p({
          title: "意见反馈",
          showArrow: true,
          clickable: true,
          thumb: "/static/tabbar/apps_fill.png",
          ["thumb-size"]: "sm"
        }),
        i: common_vendor.p({
          title: "联系客服",
          showArrow: true,
          clickable: true,
          thumb: "/static/tabbar/apps_fill.png",
          ["thumb-size"]: "sm"
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/19512/Desktop/uni-shop/pages/index/myself.vue"]]);
wx.createPage(MiniProgramPage);
