import { defineComponent, pushScopeId, popScopeId, openBlock, createElementBlock, withDirectives, createElementVNode, withKeys, withModifiers, vModelText, renderSlot, createCommentVNode, Fragment, renderList, normalizeClass } from 'vue';

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
    },
    defaultItem: {
      default: null
    },
    itemProjection: {
      type: Function,

      default(item) {
        return item;
      }

    },
    minInputLength: {
      type: Number,
      default: 2,
      validator: prop => {
        return prop >= 0;
      }
    }
  },

  mounted() {
    if (this.defaultItem !== undefined && this.defaultItem !== null) {
      this.selectItem(this.defaultItem);
    }
  },

  data() {
    return {
      inputId: this.id || `simple_typeahead_${(Math.random() * 1000).toFixed()}`,
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

      this.$emit('onInput', {
        input: this.input,
        items: this.filteredItems
      });
    },

    onFocus() {
      this.isInputFocused = true;
      this.$emit('onFocus', {
        input: this.input,
        items: this.filteredItems
      });
    },

    onBlur() {
      this.isInputFocused = false;
      this.$emit('onBlur', {
        input: this.input,
        items: this.filteredItems
      });
    },

    onArrowDown($event) {
      if (this.isListVisible && this.currentSelectionIndex < this.filteredItems.length - 1) {
        this.currentSelectionIndex++;
      }

      this.scrollSelectionIntoView();
    },

    onArrowUp($event) {
      if (this.isListVisible && this.currentSelectionIndex > 0) {
        this.currentSelectionIndex--;
      }

      this.scrollSelectionIntoView();
    },

    scrollSelectionIntoView() {
      setTimeout(() => {
        const list_node = document.querySelector(`#${this.wrapperId} .simple-typeahead-list`);
        const active_node = document.querySelector(`#${this.wrapperId} .simple-typeahead-list-item.simple-typeahead-list-item-active`);

        if (!(active_node.offsetTop >= list_node.scrollTop && active_node.offsetTop + active_node.offsetHeight < list_node.scrollTop + list_node.offsetHeight)) {
          let scroll_to = 0;

          if (active_node.offsetTop > list_node.scrollTop) {
            scroll_to = active_node.offsetTop + active_node.offsetHeight - list_node.offsetHeight;
          } else if (active_node.offsetTop < list_node.scrollTop) {
            scroll_to = active_node.offsetTop;
          }

          list_node.scrollTo(0, scroll_to);
        }
      });
    },

    selectCurrentSelection() {
      if (this.currentSelection) {
        this.selectItem(this.currentSelection);
      }
    },

    selectItem(item) {
      this.input = this.itemProjection(item);
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
    wrapperId() {
      return `${this.inputId}_wrapper`;
    },

    filteredItems() {
      const regexp = new RegExp(this.escapeRegExp(this.input), 'i');
      return this.items.filter(item => this.itemProjection(item).match(regexp));
    },

    isListVisible() {
      return this.isInputFocused && this.input.length >= this.minInputLength && this.filteredItems.length;
    },

    currentSelection() {
      return this.isListVisible && this.currentSelectionIndex < this.filteredItems.length ? this.filteredItems[this.currentSelectionIndex] : undefined;
    }

  }
});

pushScopeId("data-v-04d98098");

const _hoisted_1 = ["id"];
const _hoisted_2 = ["id", "placeholder"];
const _hoisted_3 = {
  key: 0,
  class: "simple-typeahead-list"
};
const _hoisted_4 = {
  key: 0,
  class: "simple-typeahead-list-header"
};
const _hoisted_5 = ["onClick", "onMouseenter"];
const _hoisted_6 = ["data-text"];
const _hoisted_7 = ["data-text", "innerHTML"];
const _hoisted_8 = {
  key: 1,
  class: "simple-typeahead-list-footer"
};

popScopeId();

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    id: _ctx.wrapperId,
    class: "simple-typeahead"
  }, [withDirectives(createElementVNode("input", {
    id: _ctx.inputId,
    class: "simple-typeahead-input",
    type: "text",
    placeholder: _ctx.placeholder,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.input = $event),
    onInput: _cache[1] || (_cache[1] = (...args) => _ctx.onInput && _ctx.onInput(...args)),
    onFocus: _cache[2] || (_cache[2] = (...args) => _ctx.onFocus && _ctx.onFocus(...args)),
    onBlur: _cache[3] || (_cache[3] = (...args) => _ctx.onBlur && _ctx.onBlur(...args)),
    onKeydown: [_cache[4] || (_cache[4] = withKeys(withModifiers((...args) => _ctx.onArrowDown && _ctx.onArrowDown(...args), ["prevent"]), ["down"])), _cache[5] || (_cache[5] = withKeys(withModifiers((...args) => _ctx.onArrowUp && _ctx.onArrowUp(...args), ["prevent"]), ["up"])), _cache[6] || (_cache[6] = withKeys(withModifiers((...args) => _ctx.selectCurrentSelection && _ctx.selectCurrentSelection(...args), ["prevent"]), ["enter", "tab"]))],
    autocomplete: "off"
  }, null, 40, _hoisted_2), [[vModelText, _ctx.input]]), _ctx.isListVisible ? (openBlock(), createElementBlock("div", _hoisted_3, [_ctx.$slots['list-header'] ? (openBlock(), createElementBlock("div", _hoisted_4, [renderSlot(_ctx.$slots, "list-header")])) : createCommentVNode("", true), (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.filteredItems, (item, index) => {
    return openBlock(), createElementBlock("div", {
      class: normalizeClass(["simple-typeahead-list-item", {
        'simple-typeahead-list-item-active': _ctx.currentSelectionIndex == index
      }]),
      key: index,
      onMousedown: _cache[7] || (_cache[7] = withModifiers(() => {}, ["prevent"])),
      onClick: $event => _ctx.selectItem(item),
      onMouseenter: $event => _ctx.currentSelectionIndex = index
    }, [_ctx.$slots['list-item-text'] ? (openBlock(), createElementBlock("span", {
      key: 0,
      class: "simple-typeahead-list-item-text",
      "data-text": _ctx.itemProjection(item)
    }, [renderSlot(_ctx.$slots, "list-item-text", {
      item: item,
      itemProjection: _ctx.itemProjection,
      boldMatchText: _ctx.boldMatchText
    })], 8, _hoisted_6)) : (openBlock(), createElementBlock("span", {
      key: 1,
      class: "simple-typeahead-list-item-text",
      "data-text": _ctx.itemProjection(item),
      innerHTML: _ctx.boldMatchText(_ctx.itemProjection(item))
    }, null, 8, _hoisted_7))], 42, _hoisted_5);
  }), 128)), _ctx.$slots['list-footer'] ? (openBlock(), createElementBlock("div", _hoisted_8, [renderSlot(_ctx.$slots, "list-footer")])) : createCommentVNode("", true)])) : createCommentVNode("", true)], 8, _hoisted_1);
}

script.render = render;
script.__scopeId = "data-v-04d98098";

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
