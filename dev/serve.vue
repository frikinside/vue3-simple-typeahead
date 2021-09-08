<script>
import { defineComponent } from 'vue';
import Vue3SimpleTypeahead from '@/vue3-simple-typeahead.vue';

export default defineComponent({
  name: 'ServeDev',
  components: {
    Vue3SimpleTypeahead
  }
});
</script>

<template>
  <div id="app">
    <vue3-simple-typeahead :items="['One','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten']" />
  </div>
</template>
