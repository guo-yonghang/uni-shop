"use strict";
const common_vendor = require("../../common/vendor.js");
const common_data = require("../../common/data.js");
const hooks_sliding = require("../../hooks/sliding.js");
const hooks_paging = require("../../hooks/paging.js");
if (!Array) {
  const _easycom_Tabs2 = common_vendor.resolveComponent("Tabs");
  const _easycom_uni_list_item2 = common_vendor.resolveComponent("uni-list-item");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  const _easycom_Empty2 = common_vendor.resolveComponent("Empty");
  const _easycom_uni_load_more2 = common_vendor.resolveComponent("uni-load-more");
  (_easycom_Tabs2 + _easycom_uni_list_item2 + _easycom_uni_list2 + _easycom_Empty2 + _easycom_uni_load_more2)();
}
const _easycom_Tabs = () => "../../components/Tabs/Tabs.js";
const _easycom_uni_list_item = () => "../../uni_modules/uni-list/components/uni-list-item/uni-list-item.js";
const _easycom_uni_list = () => "../../uni_modules/uni-list/components/uni-list/uni-list.js";
const _easycom_Empty = () => "../../components/Empty/Empty.js";
const _easycom_uni_load_more = () => "../../uni_modules/uni-load-more/components/uni-load-more/uni-load-more.js";
if (!Math) {
  (_easycom_Tabs + _easycom_uni_list_item + _easycom_uni_list + _easycom_Empty + _easycom_uni_load_more)();
}
const _sfc_main = {
  __name: "news",
  setup(__props) {
    const current = common_vendor.ref(0);
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
    const onTabChange = () => {
      getList(true);
    };
    const onSliding = (detail) => {
      if (detail === "left" && current.value !== common_data.newsTabList.length - 1) {
        current.value += 1;
      }
      if (detail === "right" && current.value !== 0) {
        current.value -= 1;
      }
    };
    const { onTouchStart, onTouchEnd } = hooks_sliding.useSliding(onSliding);
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o(onTabChange),
        b: common_vendor.o(($event) => current.value = $event),
        c: common_vendor.p({
          list: common_vendor.unref(common_data.newsTabList),
          scroll: true,
          sticky: true,
          modelValue: current.value
        }),
        d: common_vendor.f(common_vendor.unref(list), (item, index, i0) => {
          return {
            a: "d298a916-2-" + i0 + ",d298a916-1",
            b: index
          };
        }),
        e: common_vendor.p({
          title: "山西一连锁餐厅被曝售卖福寿螺：门店称系人工养殖，有进货单",
          note: "2024-05-28 21:20",
          ["thumb-size"]: "lg",
          rightText: "澎湃新闻",
          clickable: true
        }),
        f: common_vendor.o(common_vendor.unref(onTouchStart)),
        g: common_vendor.o(common_vendor.unref(onTouchEnd)),
        h: common_vendor.unref(loadStatus) === "noMore" && !common_vendor.unref(list).length
      }, common_vendor.unref(loadStatus) === "noMore" && !common_vendor.unref(list).length ? {
        i: common_vendor.p({
          type: "news",
          text: "没有新闻内容"
        })
      } : {}, {
        j: common_vendor.unref(list).length
      }, common_vendor.unref(list).length ? {
        k: common_vendor.p({
          status: common_vendor.unref(loadStatus)
        })
      } : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-d298a916"], ["__file", "C:/Users/19512/Desktop/uni-shop/pages/index/news.vue"]]);
wx.createPage(MiniProgramPage);
