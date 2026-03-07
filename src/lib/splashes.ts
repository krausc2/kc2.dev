const MS_PER_DAY = 86400000; // 24 * 60 * 60 * 1000

const SPLASHES = {
	day: [
		"Any computer is a laptop if you're strong enough",
		"Hello world!",
		"<s>Vibe coding?</s> Prompt engineering."
	],
	night: [
		"8 hour of sleep is reccomended for optimal performance",
	]
};

export function getSplash(type: keyof typeof SPLASHES): string {
	const items = SPLASHES[type];
	const daysSinceEpoch = Math.floor(Date.now() / MS_PER_DAY);
	return items[daysSinceEpoch % items.length];
}
