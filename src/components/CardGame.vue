<template>
	<div class="card-game">
		<div class="card-game__group-flip-card" v-for="rowItem in rows" :key="'row-item-' + rowItem">
			<flip-card
				v-for="colItem in cols"
				:url="'https://source.unsplash.com/featured/200x200'"
				:key="'item-' + colItem"
			/>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FlipCard from '@/components/FlipCard.vue';
import '@/scss/card-game.scss';

export default defineComponent({
	components: {
		FlipCard,
	},
	props: {
		// Кол-во столбцов
		cols: {
			type: Number,
			default: 5,
		},
		// Кол-во строк
		rows: {
			type: Number,
			default: 4,
		},
	},
	data(): {
		countIdenticalCart: number, // Кол-во одинаковых карт
	} {
		return {
			countIdenticalCart: 2,
		}
	},
});
</script>
