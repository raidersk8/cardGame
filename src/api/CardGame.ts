import { ref, computed } from 'vue'
import type { Ref, ComputedRef } from 'vue'
import getUrls from '@/api/ListRandomUrlImages'

interface ICard {
	url: string, // URL изображения
	num: number, // Номер карточки для сравнения
	isOpen: boolean, // Открыта ли карточка
}

// Массив карточек
const mapCards: Ref<ICard[]> = ref([]);

// Массив выбранных карточек (должны быть одинаковые)
const selectedCards: Ref<number[]> = ref([]);

// Кол-во одинаковых карт в группе при выборе
let countIdenticalCard: number;

/**
 * Передаем функции для работы игры
 * @param count - Кол-во одинаковых карт в группе при выборе
 * @returns 
 */
export default function cardGame(count: number) {
	countIdenticalCard = count;
	return {
		initMapCards,
		isInitCardGame: computed(() => mapCards.value.length > 0),
		selectCard,
		isShowCard,
		getUrlCard,
	}
}

/**
 * Инициализируем переменную mapCards 
 * @param count - кол-во непарных карт
 */
async function initMapCards(count: number): Promise<void> {
	const urls: string[] = await getUrls(count);
	fillMapCards(count, urls);
	shuffleMapCard();
}

/**
 * Заполняем данные карт
 * @param count - кол-во непарных карт
 * @param urls - url изображений
 */
function fillMapCards(count: number, urls: string[]): void {
	mapCards.value = [];
	for (let i=0; i<count; i++) {
		const item: ICard = {
			url: urls[i],
			num: i,
			isOpen: false,
		};
		mapCards.value.push(item, item);
	}
}

/**
 * Перемешиваем карты
 */
function shuffleMapCard(): void {
	for (let i:number = mapCards.value.length - 1; i > 0; i--) {
		const j:number = Math.floor(Math.random() * (i + 1));
		[mapCards.value[i], mapCards.value[j]] = [mapCards.value[j], mapCards.value[i]];
	}
}

/**
 * Логика выбора карты
 * @param index - индекс карты
 */
function selectCard(index:number): void {
	if (selectedCards.value.length === countIdenticalCard) {
		return;
	}

	selectedCards.value.push(index);
	if (selectedCards.value.length > countIdenticalCard - 1) {
		const firstNum: number = mapCards.value[selectedCards.value[0]].num;
		const isFind = selectedCards.value.every((item: number) => mapCards.value[item].num == firstNum);
		if (isFind) {
			// Если все карты совпадают то помечаем их как открытые
			selectedCards.value.forEach((item: number) => {
				mapCards.value[item].isOpen = true;
			});
			clearSelectCards();
		} else {
			setTimeout(() => {
				clearSelectCards();
			}, 2000);
		}
	}
}

/**
 * Очищаем выбранные карты
 */
function clearSelectCards():void {
	selectedCards.value = [];
}

/**
 * По индексу карты получаем открыта карта или закрыта
 * @param index - индекс карты
 * @returns {boolean}
 */
function isShowCard(index: number): boolean {
	return selectedCards.value.includes(index) || mapCards.value[index].isOpen;
}

/**
 * По индексу карты получаем url изображения
 * @param index - индекс карты
 * @returns {string} - url изображения
 */
function getUrlCard(index: number): string {
	return mapCards.value[index].url;
}