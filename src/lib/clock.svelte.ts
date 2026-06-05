import { SvelteDate } from "svelte/reactivity";

export function createClock(timeZone = "Australia/Sydney") {
	const time = new SvelteDate();

	$effect(() => {
		const tick = setInterval(() => {
			time.setTime(Date.now());
		}, 1000);
		return () => clearInterval(tick);
	});

	const timeDisplay = $derived.by(() => {
		const formatter = new Intl.DateTimeFormat("en-AU", {
			timeZone,
			hour: "2-digit",
			minute: "2-digit",
			hour12: false
		});
		const parts = formatter.formatToParts(time);

		const hours = parts.find((p) => p.type === "hour")?.value || "00";
		const minutes = parts.find((p) => p.type === "minute")?.value || "00";

		const hourNum = parseInt(hours, 10);

		let emoji;

		// #TODO Find out what actually works because of daylight savings >:C
		if (hourNum >= 18 || hourNum < 5) {
			emoji = "🌑";
		} else {
			emoji = "☀️";
		}

		return {
			hours,
			minutes,
			emoji
		};
	});

	return {
		get hours() {
			return timeDisplay.hours;
		},
		get minutes() {
			return timeDisplay.minutes;
		},
		get emoji() {
			return timeDisplay.emoji;
		}
	};
}
