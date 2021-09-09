import { defineComponent, pushScopeId, popScopeId, openBlock, createElementBlock, withDirectives, createElementVNode, withKeys, withModifiers, vModelText, Fragment, renderList, normalizeClass, createCommentVNode } from 'vue';

var script = /*#__PURE__*/defineComponent({
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

  created() {},

  data() {
    return {
      inputId: this.id || (Math.random() * 1000).toFixed(),
      input: '',
      isInputFocused: false,
      currentSelectionIndex: 0
    };
  },

  methods: {
    onInput() {
      if (this.isListVisible && this.currentSelectionIndex >= this.filteredItems.length) {
        this.currentSelectionIndex = (this.filteredItems.length || 1) - 1;
      }

      this.$emit('onInput', this.input);
    },

    onFocus() {
      this.isInputFocused = true;
      this.$emit('onFocus', this.input);
    },

    onBlur() {
      this.isInputFocused = false;
      this.$emit('onBlur', this.input);
    },

    onArrowDown() {
      if (this.isListVisible && this.currentSelectionIndex < this.filteredItems.length - 1) {
        this.currentSelectionIndex++;
      }
    },

    onArrowUp() {
      if (this.isListVisible && this.currentSelectionIndex > 0) {
        this.currentSelectionIndex--;
      }
    },

    selectCurrentSelection() {
      if (this.currentSelection) {
        this.selectItem(this.currentSelection);
      }
    },

    selectItem(item) {
      this.input = item;
      this.currentSelectionIndex = 0;
      document.getElementById(this.inputId).blur();
      this.$emit('selectItem', item);
    },

    escapeRegExp(string) {
      return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    },

    boldMatchText(text) {
      const regexp = new RegExp(`(${this.escapeRegExp(this.input)})`, 'ig');
      return text.replace(regexp, '<strong>$1</strong>');
    }

  },
  computed: {
    searchableItems() {
      return this.items;
    },

    filteredItems() {
      const regexp = new RegExp(this.escapeRegExp(this.input), 'i');
      return this.searchableItems.filter(item => item.match(regexp));
    },

    isListVisible() {
      return this.isInputFocused && this.input.length > 1 && this.filteredItems.length;
    },

    currentSelection() {
      return this.isListVisible && this.currentSelectionIndex < this.filteredItems.length ? this.filteredItems[this.currentSelectionIndex] : undefined;
    }

  }
});

pushScopeId("data-v-3e3e9518");

const _hoisted_1 = {
  class: "simple-typeahead"
};
const _hoisted_2 = ["id", "placeholder"];
const _hoisted_3 = {
  key: 0,
  class: "simple-typeahead-list"
};
const _hoisted_4 = ["onClick", "onMouseenter"];
const _hoisted_5 = ["data-text", "innerHTML"];

popScopeId();

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [withDirectives(createElementVNode("input", {
    id: _ctx.inputId,
    type: "text",
    placeholder: _ctx.placeholder,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.input = $event),
    onInput: _cache[1] || (_cache[1] = (...args) => _ctx.onInput && _ctx.onInput(...args)),
    onFocus: _cache[2] || (_cache[2] = (...args) => _ctx.onFocus && _ctx.onFocus(...args)),
    onBlur: _cache[3] || (_cache[3] = (...args) => _ctx.onBlur && _ctx.onBlur(...args)),
    onKeydown: [_cache[4] || (_cache[4] = withKeys(withModifiers((...args) => _ctx.onArrowDown && _ctx.onArrowDown(...args), ["prevent"]), ["down"])), _cache[5] || (_cache[5] = withKeys(withModifiers((...args) => _ctx.onArrowUp && _ctx.onArrowUp(...args), ["prevent"]), ["up"])), _cache[6] || (_cache[6] = withKeys(withModifiers((...args) => _ctx.selectCurrentSelection && _ctx.selectCurrentSelection(...args), ["prevent"]), ["enter", "tab"]))]
  }, null, 40, _hoisted_2), [[vModelText, _ctx.input]]), _ctx.isListVisible ? (openBlock(), createElementBlock("div", _hoisted_3, [(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.filteredItems, (item, index) => {
    return openBlock(), createElementBlock("div", {
      class: normalizeClass(["simple-typeahead-list-item", {
        'simple-typeahead-list-item-active': _ctx.currentSelectionIndex == index
      }]),
      key: index,
      onMousedown: _cache[7] || (_cache[7] = withModifiers(() => {}, ["prevent"])),
      onClick: $event => _ctx.selectItem(item),
      onMouseenter: $event => _ctx.currentSelectionIndex = index
    }, [createElementVNode("span", {
      class: "simple-typeahead-list-item-text",
      "data-text": item,
      innerHTML: _ctx.boldMatchText(item)
    }, null, 8, _hoisted_5)], 42, _hoisted_4);
  }), 128))])) : createCommentVNode("", true)]);
}

script.render = render;
script.__scopeId = "data-v-3e3e9518";

// Import vue component
// IIFE injects install function into component, allowing component
// to be registered via Vue.use() as well as Vue.component(),

var entry_esm = /*#__PURE__*/(() => {
  // Get component instance
  const installable = script; // Attach install function executed by Vue.use()

  installable.install = app => {
    app.component('Vue3SimpleTypeahead', installable);
  };

  return installable;
})(); // It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = directive;

export { entry_esm as default };
