const MS_PER_DAY = 86400000; // 24 * 60 * 60 * 1000

const SPLASHES = {
	day: [
		"Any computer is a laptop if you're strong enough.",
		"Hello world!",
		"<s>Vibe coding?</s> Prompt engineering.",
		"git push --force",
		"Built with Svelte ♥",
		"Don't touch the CSS, it's still wet.",
		"640x480. Just as God intended.",
		"'The Cloud' is just someone else's computer.",
		"Your smart fridge is spying on you.",
		"To understand recursion, one must first understand recursion."
	],
	night: [
		"8 hours of sleep is recommended for optimal performance.",
		"The best code is written at 2am.",
		"The glowies are asleep."
	]
};

export function getSplash(type: keyof typeof SPLASHES): string {
	const items = SPLASHES[type];
	const daysSinceEpoch = Math.floor(Date.now() / MS_PER_DAY);
	return items[daysSinceEpoch % items.length];
}
