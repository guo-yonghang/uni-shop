"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "Empty",
  props: {
    type: { type: String, default: "list" },
    src: { type: String, default: "" },
    width: { type: [Number, String], default: 250 },
    text: { type: String, default: "" }
  },
  data() {
    return {};
  },
  computed: {
    imgSrc() {
      return this.src ? this.src : `http://jpf.wanrungj.com/upload/empty/${this.type}.png`;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $options.imgSrc,
    b: $props.width + "px",
    c: $props.width + "px",
    d: common_vendor.t($props.text)
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-10231f6d"], ["__file", "C:/Users/19512/Desktop/wjp-dealer-uni/components/Empty/Empty.vue"]]);
wx.createComponent(Component);
