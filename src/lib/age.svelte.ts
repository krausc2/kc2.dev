import { SvelteDate } from "svelte/reactivity";

export function createAgeCounter() {
	const INTERVAL_MS = 50; // 20 fps
	const spawnDate = new SvelteDate("2002-06-22T00:01:00+10:00").getTime();
	const yearMs = 1000 * 60 * 60 * 24 * 365.2425;

	let currentAge = $state((Date.now() - spawnDate) / yearMs);

	$effect(() => {
		const tick = setInterval(() => {
			currentAge = (Date.now() - spawnDate) / yearMs;
		}, INTERVAL_MS);
		return () => clearInterval(tick);
	});

	return {
		get value() {
			return currentAge.toFixed(9);
		}
	};
}
