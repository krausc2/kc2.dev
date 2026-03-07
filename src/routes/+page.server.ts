import type { PageServerLoad } from './$types';
import { splashes } from '$lib/splashes';

const MS_PER_DAY = 86400000; // 24 * 60 * 60 * 1000

/*
	Sets the splash text for index page.

	Calculates days since epoch and uses that value to select
	a splash from the splashes array.
*/
export const load: PageServerLoad = () => {
	const daysSinceEpoch = Math.floor(Date.now() / MS_PER_DAY);
	const splash = splashes[daysSinceEpoch % splashes.length];

	return {
		splash
	};
};