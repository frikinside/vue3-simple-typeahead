# vue3-simple-typeahead

A Vue3 component for a simple typeahead component.
It will show a list of suggested items based on the user input.

The component includes it's own input and when the user types on it (at least two characters) the suggested options appear.

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

## Usage

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

Then, use the component in your app.

```html
<vue3-simple-typeahead
	id="typeahead_id"
	placeholder="Start writing..."
	:items="['One','Two','Three',...]"
	:minInputLength="1"
	@selectItem="selectItemEventHandler"
	@onInput="onInputEventHandler"
	@onFocus="onFocusEventHandler"
	@onBlur="onBlurEventHandler"
>
</vue3-simple-typeahead>
```

### Props

| Prop                                | Type             | Default              | Description                                                                             |
| :---------------------------------- | :--------------- | :------------------- | :-------------------------------------------------------------------------------------- |
| [`id`](#id)                         | String           | Random id generation | The id for the input control. Can be useful to link with a `label for=""`               |
| [`placeholder`](#placeholder)       | String           | `''`                 | Placeholder text for the input                                                          |
| [`items`](#items)                   | Array (Required) |                      | List of strings with the elements for suggestions                                       |
| [`minInputLength`](#minInputLength) | Number           | 2                    | Minimum input length for the suggestion length to appear, the prop value has to be >= 0 |

_Remember you can always use lower-kebap-case for camelCase props like `min-input-length`_

### Events

| Event                       | Signature                                                        | Description                                                                                         |
| :-------------------------- | :--------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------- |
| [`selectItem`](#selectItem) | `function (item: String): void`                                  | Emitted when the user selects an item from the suggestion list                                      |
| [`onInput`](#onInput)       | `function (event: Object { input: String, items: Array }): void` | Emitted when the user types anything                                                                |
| [`onFocus`](#onFocus)       | `function (event: Object { input: String, items: Array }): void` | Emitted when the input control get the focus                                                        |
| [`onBlur`](#onBlur)         | `function (event: Object { input: String, items: Array }): void` | Emitted when the input control lost the focus [When the user select an item, the focus is lost too] |
