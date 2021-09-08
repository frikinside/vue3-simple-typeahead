# vue3-simple-typeahead

A Vue3 component for a simple typeahead component.
It will show a list of suggested items based on the user input.

## Demo

//Pending

## Installation

### NPM

```js
npm install vue3-simple-typeahead
```

### Browser

You can also use the browser bundle in a script tag.

```html
<script src="https://unpkg.com/@frikinside/vue3-simple-typeahead"></script>
```

## Usage

Import the vue3-simple-typeahead component and register it globally in your Vue app. Import the CSS as well if you wish to use the default styling.

```js
import Vue from 'vue'
import SimpleTypeahead from 'vue3-simple-typeahead'
import 'vue3-simple-typeahead/dist/vue3-simple-typeahead.css'

Vue.use(SimpleTypeahead)
```

You can also import vue3-simple-typeahead locally in your component if you prefer.

```js
import SimpleTypeahead from 'vue3-simple-typeahead'

export default {
  name: 'my-component',
  ...
  components: {
    SimpleTypeahead
  }
  ...
}
```

Then, use the component in your app.

```html
<simple-typeahead 
    id="typeahead_id" 
    placeholder="Start writing..." 
    :items="['One','Two','Three',...]" 
    @selectItem="selectItemEventHandler" 
    @onInput="onInputEventHandler"
    @onFocus="onInputEventHandler"
    @onBlur="onInputEventHandler">
</simple-typeahead>
```

### Props

| Prop                                | Type                | Default              | Description                                                                 |
| :---------------------------------- | :------------------ | :------------------- | :-------------------------------------------------------------------------- |
| [`id`](#id)                         | String              | Random id generation | The id for the input control. Can be useful to link with a `label for=""`   |
| [`placeholder`](#placeholder)       | String              | `''`                 | Placeholder text for the input                                              |
| [`items`](#items)                   | Array (Required)    |                      | List of strings with the elements for suggestions                           |


### Events

| Event                       | Signature                                                | Description                                                                                         |
| :-------------------------- | :------------------------------------------------------- | :-------------------------------------------------------------------------------------------------- |
| [`selectItem`](#selectItem) | `function (item: String): void`                          | Emitted when the user selects an item from the suggestion list                                      |
| [`onInput`](#onInput)       | `function (input: String): void`                         | Emitted when the user types anything                                                                |
| [`onFocus`](#onFocus)       | `function (input: String): void`                         | Emitted when the input control get the focus                                                        |
| [`onBlur`](#onBlur)         | `function (input: String): void`                         | Emitted when the input control lost the focus [When the user select an item, the focus is lost too] |
