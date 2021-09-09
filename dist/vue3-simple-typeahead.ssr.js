'use strict';var vue=require('vue');function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}var script = /*#__PURE__*/vue.defineComponent({
  name: 'Vue3SimpleTypeahead',
  emits: ['onInput', 'onFocus', 'onBlur', 'selectItem'],
  props: {
    id: {
      type: String
    },
    placeholder: {
      type: String,
      default: ''
    },
    items: {
      type: Array,
      required: true
    }
  },
  created: function created() {},
  data: function data() {
    return {
      inputId: this.id || (Math.random() * 1000).toFixed(),
      input: '',
      isInputFocused: false,
      currentSelectionIndex: 0
    };
  },
  methods: {
    onInput: function onInput() {
      if (this.isListVisible && this.currentSelectionIndex >= this.filteredItems.length) {
        this.currentSelectionIndex = (this.filteredItems.length || 1) - 1;
      }

      this.$emit('onInput', this.input);
    },
    onFocus: function onFocus() {
      this.isInputFocused = true;
      this.$emit('onFocus', this.input);
    },
    onBlur: function onBlur() {
      this.isInputFocused = false;
      this.$emit('onBlur', this.input);
    },
    onArrowDown: function onArrowDown() {
      if (this.isListVisible && this.currentSelectionIndex < this.filteredItems.length - 1) {
        this.currentSelectionIndex++;
      }
    },
    onArrowUp: function onArrowUp() {
      if (this.isListVisible && this.currentSelectionIndex > 0) {
        this.currentSelectionIndex--;
      }
    },
    selectCurrentSelection: function selectCurrentSelection() {
      if (this.currentSelection) {
        this.selectItem(this.currentSelection);
      }
    },
    selectItem: function selectItem(item) {
      this.input = item;
      this.currentSelectionIndex = 0;
      document.getElementById(this.inputId).blur();
      this.$emit('selectItem', item);
    },
    escapeRegExp: function escapeRegExp(string) {
      return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    },
    boldMatchText: function boldMatchText(text) {
      var regexp = new RegExp("(".concat(this.escapeRegExp(this.input), ")"), 'ig');
      return text.replace(regexp, '<strong>$1</strong>');
    }
  },
  computed: {
    searchableItems: function searchableItems() {
      return this.items;
    },
    filteredItems: function filteredItems() {
      var regexp = new RegExp(this.escapeRegExp(this.input), 'i');
      return this.searchableItems.filter(function (item) {
        return item.match(regexp);
      });
    },
    isListVisible: function isListVisible() {
      return this.isInputFocused && this.input.length > 1 && this.filteredItems.length;
    },
    currentSelection: function currentSelection() {
      return this.isListVisible && this.currentSelectionIndex < this.filteredItems.length ? this.filteredItems[this.currentSelectionIndex] : undefined;
    }
  }
});vue.pushScopeId("data-v-3e3e9518");

var _hoisted_1 = {
  class: "simple-typeahead"
};
var _hoisted_2 = ["id", "placeholder"];
var _hoisted_3 = {
  key: 0,
  class: "simple-typeahead-list"
};
var _hoisted_4 = ["onClick", "onMouseenter"];
var _hoisted_5 = ["data-text", "innerHTML"];

vue.popScopeId();

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [vue.withDirectives(vue.createElementVNode("input", {
    id: _ctx.inputId,
    type: "text",
    placeholder: _ctx.placeholder,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return _ctx.input = $event;
    }),
    onInput: _cache[1] || (_cache[1] = function () {
      return _ctx.onInput && _ctx.onInput.apply(_ctx, arguments);
    }),
    onFocus: _cache[2] || (_cache[2] = function () {
      return _ctx.onFocus && _ctx.onFocus.apply(_ctx, arguments);
    }),
    onBlur: _cache[3] || (_cache[3] = function () {
      return _ctx.onBlur && _ctx.onBlur.apply(_ctx, arguments);
    }),
    onKeydown: [_cache[4] || (_cache[4] = vue.withKeys(vue.withModifiers(function () {
      return _ctx.onArrowDown && _ctx.onArrowDown.apply(_ctx, arguments);
    }, ["prevent"]), ["down"])), _cache[5] || (_cache[5] = vue.withKeys(vue.withModifiers(function () {
      return _ctx.onArrowUp && _ctx.onArrowUp.apply(_ctx, arguments);
    }, ["prevent"]), ["up"])), _cache[6] || (_cache[6] = vue.withKeys(vue.withModifiers(function () {
      return _ctx.selectCurrentSelection && _ctx.selectCurrentSelection.apply(_ctx, arguments);
    }, ["prevent"]), ["enter", "tab"]))]
  }, null, 40, _hoisted_2), [[vue.vModelText, _ctx.input]]), _ctx.isListVisible ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_3, [(vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.filteredItems, function (item, index) {
    return vue.openBlock(), vue.createElementBlock("div", {
      class: vue.normalizeClass(["simple-typeahead-list-item", {
        'simple-typeahead-list-item-active': _ctx.currentSelectionIndex == index
      }]),
      key: index,
      onMousedown: _cache[7] || (_cache[7] = vue.withModifiers(function () {}, ["prevent"])),
      onClick: function onClick($event) {
        return _ctx.selectItem(item);
      },
      onMouseenter: function onMouseenter($event) {
        return _ctx.currentSelectionIndex = index;
      }
    }, [vue.createElementVNode("span", {
      class: "simple-typeahead-list-item-text",
      "data-text": item,
      innerHTML: _ctx.boldMatchText(item)
    }, null, 8, _hoisted_5)], 42, _hoisted_4);
  }), 128))])) : vue.createCommentVNode("", true)]);
}script.render = render;
script.__scopeId = "data-v-3e3e9518";// Import vue component
// IIFE injects install function into component, allowing component
// to be registered via Vue.use() as well as Vue.component(),

var component = /*#__PURE__*/(function () {
  // Get component instance
  var installable = script; // Attach install function executed by Vue.use()

  installable.install = function (app) {
    app.component('Vue3SimpleTypeahead', installable);
  };

  return installable;
})(); // It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = directive;
var namedExports=/*#__PURE__*/Object.freeze({__proto__:null,'default': component});// only expose one global var, with named exports exposed as properties of
// that global var (eg. plugin.namedExport)

Object.entries(namedExports).forEach(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      exportName = _ref2[0],
      exported = _ref2[1];

  if (exportName !== 'default') component[exportName] = exported;
});module.exports=component;