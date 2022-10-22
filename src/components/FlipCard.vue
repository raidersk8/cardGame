<template>
	<div class="flip-card" :class="{ 'flip-card--show': isShow }">
		<img :src="url" />
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import '@/scss/flip-card.scss';

export default defineComponent({
	props: {
		// Url изображения
		url: {
			type: String,
			required: true
		},
		// Показываем изображение
		isShow: {
			type: Boolean,
			required: true
		},
	},
});
</script>
