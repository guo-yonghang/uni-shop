"use strict";
const common_vendor = require("../../common/vendor.js");
const { screenWidth } = common_vendor.index.getSystemInfoSync();
const _sfc_main = {
  name: "Tabs",
  emits: ["update:modelValue", "change"],
  props: {
    modelValue: { type: Number },
    list: { type: Array, default: () => [] },
    scroll: { type: Boolean, default: false },
    sticky: { type: Boolean, default: false },
    stickyTop: { type: [Number, String], default: 0 },
    padding: { type: [Number, String], default: 18 }
  },
  data() {
    return {
      lefts: [],
      widths: []
    };
  },
  mounted() {
    common_vendor.index.createSelectorQuery().in(this).selectAll(".tabs-item").boundingClientRect((res) => {
      this.lefts = res.map((i) => i.left - 5);
      this.widths = res.map((i) => i.width);
    }).exec();
  },
  computed: {
    scrollLeft() {
      return this.lefts[this.modelValue] - screenWidth / 2 + this.widths[this.modelValue] / 2 + 5;
    }
  },
  watch: {
    modelValue(newValue) {
      this.$emit("change", newValue);
    }
  },
  methods: {
    getDotValue(value) {
      if (value === 0)
        return "";
      if (value < 100)
        return value;
      if (value >= 100)
        return "99+";
    },
    onTabChange(index) {
      if (this.modelValue === index)
        return;
      this.$emit("update:modelValue", index);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($props.list, (item, index, i0) => {
      return common_vendor.e({
        a: common_vendor.t(item.name),
        b: item.dot !== void 0
      }, item.dot !== void 0 ? {
        c: common_vendor.t($options.getDotValue(item.dot)),
        d: common_vendor.n({
          mini: item.dot === 0
        }),
        e: $props.padding + "px"
      } : {}, {
        f: common_vendor.n({
          selected: $props.modelValue === index
        }),
        g: common_vendor.o(($event) => $options.onTabChange(index), index),
        h: index
      });
    }),
    b: `0px ${$props.padding}px`,
    c: $props.padding + "px",
    d: `${$data.widths[$props.modelValue]}px`,
    e: `${$data.lefts[$props.modelValue]}px`,
    f: $props.scroll,
    g: $options.scrollLeft,
    h: $props.sticky ? "sticky" : "none",
    i: $props.stickyTop + "px"
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/19512/Desktop/uni-shop/components/Tabs/Tabs.vue"]]);
wx.createComponent(Component);
