"use strict";
const common_vendor = require("../../common/vendor.js");
const common_data = require("../../common/data.js");
const hooks_sliding = require("../../hooks/sliding.js");
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
    let page = 1;
    let flag = false;
    const current = common_vendor.ref(0);
    const data = common_vendor.reactive({
      loadStatus: "",
      list: []
    });
    const getList = (reload = false) => {
      if (flag)
        return;
      flag = true;
      if (reload) {
        page = 1;
        data.list = [];
      }
      common_vendor.index.showLoading({ title: "加载中", mask: true });
      setTimeout(() => {
        const list = new Array(15).fill("");
        data.list = data.list.concat(list);
        data.loadStatus = page >= 4 ? "noMore" : "loading";
        flag = false;
        common_vendor.index.hideLoading();
      }, 500);
    };
    common_vendor.onLoad(() => {
      getList(true);
    });
    common_vendor.onPullDownRefresh(() => {
      getList(true);
      setTimeout(() => {
        common_vendor.index.stopPullDownRefresh();
      }, 1e3);
    });
    common_vendor.onReachBottom(() => {
      if (flag || data.loadStatus === "noMore")
        return;
      page += 1;
      getList();
    });
    const onTabChange = () => {
      getList(true);
    };
    const onSliding = (detail) => {
      console.log(detail);
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
        d: common_vendor.f(data.list, (item, index, i0) => {
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
        h: data.loadStatus === "noMore" && !data.list.length
      }, data.loadStatus === "noMore" && !data.list.length ? {
        i: common_vendor.p({
          type: "news",
          text: "没有新闻内容"
        })
      } : {}, {
        j: data.list.length
      }, data.list.length ? {
        k: common_vendor.p({
          status: data.loadStatus
        })
      } : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-d298a916"], ["__file", "C:/Users/19512/Desktop/wjp-dealer-uni/pages/index/news.vue"]]);
wx.createPage(MiniProgramPage);
