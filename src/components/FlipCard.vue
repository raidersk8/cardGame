<template>
	<div class="flip-card">
		<img :src="url" />
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import '@/scss/flip-card.scss';

export default defineComponent({
	props: {
		url: {
			type: String,
			required: true
		},
	},
});
</script>
