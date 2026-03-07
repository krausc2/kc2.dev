import type { PageServerLoad } from './$types';
import { getSplash } from '$lib/splashes';

// Sets splash.
export const load: PageServerLoad = () => {
	const splash = getSplash('day');

	return {
		splash
	};
};
