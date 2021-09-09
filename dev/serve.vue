<script>
import { defineComponent } from 'vue';
import Vue3SimpleTypeahead from '@/vue3-simple-typeahead.vue';

export default defineComponent({
	name: 'ServeDev',
	components: {
		Vue3SimpleTypeahead,
	},
});
</script>

<template>
	<section id="app" class="container">
		<form>
			<vue3-simple-typeahead :items="['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten']" />
		</form>
	</section>
</template>

<style>
@import '//fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic';
@import '//cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.css';
@import 'https://cdnjs.cloudflare.com/ajax/libs/milligram/1.4.1/milligram.min.css';
</style>
