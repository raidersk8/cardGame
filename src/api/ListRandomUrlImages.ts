
/**
 * Получаем список случайных изображений из source.unsplash.com
 * @param count кол-во изображений
 * @returns string[]
 */
export default async function listRandomUrlImages(count: number): Promise<string[]> {
	const arrFetch = [];
	for(let i=0; i<count; i++) {
		arrFetch.push(fetch('https://source.unsplash.com/featured/200x' + (200 + i).toString()));
	}
	const values: Response[] = await Promise.all(arrFetch);
	return values.map((item: Response) => item.url);
}