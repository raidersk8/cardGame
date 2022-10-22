<template>
	<card-game />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CardGame from '@/components/CardGame.vue';

export default defineComponent({
	name: 'App',
	components: {
		CardGame,
	},
});
</script>

<style lang="scss">
</style>
