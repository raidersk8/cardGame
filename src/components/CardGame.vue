<template>
	<div class="card-game">
		<button @click="handleClickRestart">restart</button>
		<template v-if="isInitCardGame">
			<div class="card-game__group-flip-card" v-for="rowItem in rows" :key="'row-item-' + rowItem">
				<flip-card
					v-for="colItem in cols"
					:url="urlCard(rowItem, colItem)"
					:key="'item-' + colItem"
					:is-show="isShowFlipCard(rowItem, colItem)"
					@click="handleClickCard(rowItem, colItem)"
				/>
			</div>
		</template>
		<div v-else>
			loading...
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FlipCard from '@/components/FlipCard.vue';
import cardGame from '@/api/CardGame';
import '@/scss/card-game.scss';

const countIdenticalCard = 2; // Кол-во одинаковых карт
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
			default: 6,
		},
	},
	setup(props) {
		const { selectCard, initMapCards, restartCardGame, isInitCardGame, isShowCard, getUrlCard } = cardGame(countIdenticalCard);
		const count = (props.cols * props.rows) / countIdenticalCard;
		initMapCards(count);

		return {
			isInitCardGame, // Игра инициализирована
			getUrlCard, // По индексу карты получаем url изображения
			selectCard, // Механизм выбора карты
			isShowCard, // По индексу карты получаем открыта карта или закрыта
			restartCardGame, // Рестарт игры
		};
	},
	methods: {
		/**
		 * Получаем индекс
		 */
		getIndex(rowItem: number, colItem: number): number {
			return this.cols * (rowItem - 1) + (colItem - 1);
		},

		/**
		 * Показываем скрываем карту
		 */
		isShowFlipCard(rowItem: number, colItem: number): boolean {
			const index: number = this.getIndex(rowItem, colItem);
			return this.isShowCard(index);
		},

		/**
		 * Выводим url карты
		 */
		urlCard(rowItem: number, colItem: number): string {
			const index: number = this.getIndex(rowItem, colItem);
			return this.getUrlCard(index);
		},

		/**
		 * Обработка клика по карте
		 */
		handleClickCard(rowItem: number, colItem: number): void {
			const index: number = this.getIndex(rowItem, colItem);
			this.selectCard(index);
		},

		/**
		 * Перезапускаем игру
		 */
		handleClickRestart() {
			this.restartCardGame();
		}
	},
});
</script>
