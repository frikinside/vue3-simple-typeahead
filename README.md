# vue3-simple-typeahead

[![npm](https://img.shields.io/npm/v/vue3-simple-typeahead.svg)](https://www.npmjs.com/package/vue3-simple-typeahead)
[![vue3](https://img.shields.io/badge/vue-3.x-brightgreen.svg)](https://v3.vuejs.org/)
[![no-dependecies](https://img.shields.io/david/frikinside/vue3-simple-typeahead)](https://www.npmjs.com/package/vue3-simple-typeahead?activeTab=dependencies)
[![License](https://img.shields.io/npm/l/vue3-simple-typeahead)](https://en.wikipedia.org/wiki/MIT_License)
[![npm](https://img.shields.io/npm/dt/vue3-simple-typeahead.svg)](https://www.npmjs.com/package/vue3-simple-typeahead)
[![npm bundle size](https://img.shields.io/bundlephobia/min/vue3-simple-typeahead?color=brightgreen)](https://www.npmjs.com/package/vue3-simple-typeahead)

A Vue3 component for a simple typeahead component.
It will show a list of suggested items based on the user input.

The component includes it's own input and when the user types on it the suggested options appear.

![Demo](vue3-simple-typeahead.gif)

## Demo

//Pending

## Installation

### [NPM](https://www.npmjs.com/package/vue3-simple-typeahead)

```js
npm install vue3-simple-typeahead
```

### Browser

You can also use the browser bundle in a script tag.

```html
<script src="https://unpkg.com/vue3-simple-typeahead"></script>
```

## Add installed component to your app

Import the vue3-simple-typeahead component and register it globally in your Vue app. Import the CSS as well if you wish to use the default styling.

```js
import { createApp } from 'vue';
import App from './App.vue';
import SimpleTypeahead from 'vue3-simple-typeahead';
import 'vue3-simple-typeahead/dist/vue3-simple-typeahead.css'; //Optional default CSS

let app = createApp(App);
app.use(SimpleTypeahead);
app.mount('#app');
```

You can also import vue3-simple-typeahead locally in your component if you prefer.

```js
import SimpleTypeahead from 'vue3-simple-typeahead'
import 'vue3-simple-typeahead/dist/vue3-simple-typeahead.css' //Optional default CSS

export default {
  name: 'my-vue-component',
  ...
  components: {
    SimpleTypeahead
  }
  ...
}
```

## Usage

Use the component on your own app components

```html
<vue3-simple-typeahead
	id="typeahead_id"
	placeholder="Start writing..."
	:items="['One','Two','Three',...]"
	:minInputLength="1"
	:itemProjection="itemProjectionFunction"
	@selectItem="selectItemEventHandler"
	@onInput="onInputEventHandler"
	@onFocus="onFocusEventHandler"
	@onBlur="onBlurEventHandler"
>
</vue3-simple-typeahead>
```

### User interaction

When the user types on the typeahead input and the minimum input length is meeted a suggestion list appears below the input with the items that match the user input.
You can continue to type further to filter the selection, but you could use keyboard or mouse input to make your selection.abnf

When the suggestion list show up, you can continue to type to filter the selection or you use the `Arrow Up`<kbd>↑</kbd> or `Arrow Down`<kbd>↓</kbd> keys to navigate the list of suggestions. When you have selected the desired element press <kbd>Enter</kbd> or <kbd>TAB</kbd> to select the current element.

| Control          | Effect                                                             |
| :--------------- | :----------------------------------------------------------------- |
| <kbd>↑</kbd>     | Navigate up on the suggestion list, selecting the previous element |
| <kbd>↓</kbd>     | Navigate down on the suggestion list, selecting the next element   |
| <kbd>Enter</kbd> | Choose the current element selection                               |
| <kbd>TAB</kbd>   | Choose the current element selection                               |

You can use the mouse instead, simply hover you cursor over the desire element and click on it.

![User controls](vue3-simple-typeahead.gif)

### Props

| Prop                                | Type             | Default                    | Description                                                                             |
| :---------------------------------- | :--------------- | :------------------------- | :-------------------------------------------------------------------------------------- |
| [`id`](#id)                         | String           | Random id generation       | The id for the input control. Can be useful to link with a `label for=""`               |
| [`placeholder`](#placeholder)       | String           | `''`                       | Placeholder text for the input                                                          |
| [`items`](#items)                   | Array (Required) |                            | List of objects or strings with the elements for suggestions                            |
| [`minInputLength`](#minInputLength) | Number           | 2                          | Minimum input length for the suggestion length to appear, the prop value has to be >= 0 |
| [`itemProjection`](#itemProjection) | Function: String | `(item) => {return item;}` | Projection function to map the items to a string value for search and display           |

_Remember you can always use lower-kebap-case for camelCase props like `min-input-length`_

### Events

| Event                       | Signature                                                        | Description                                                                                         |
| :-------------------------- | :--------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------- |
| [`selectItem`](#selectItem) | `function (item: String): void`                                  | Emitted when the user selects an item from the suggestion list                                      |
| [`onInput`](#onInput)       | `function (event: Object { input: String, items: Array }): void` | Emitted when the user types anything                                                                |
| [`onFocus`](#onFocus)       | `function (event: Object { input: String, items: Array }): void` | Emitted when the input control get the focus                                                        |
| [`onBlur`](#onBlur)         | `function (event: Object { input: String, items: Array }): void` | Emitted when the input control lost the focus [When the user select an item, the focus is lost too] |

### Styling

Overwrite styles when using the default css included or add custom styles basing your rules on this structure.

```stylus
div#{:id}_wrapper.simple-typeahead
	input#{:id}
	div.simple-typeahead-list
    	.simple-typeahead-list-item &.simple-typeahead-list-item-active
			.simple-typeahead-list-item-text
```