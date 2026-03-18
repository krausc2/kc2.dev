const MS_PER_DAY = 86400000; // 24 * 60 * 60 * 1000

const SPLASHES = {
	day: [
		"Any computer is a laptop if you're strong enough.",
		'Clippy just wanted to help.',
		'See my latest project at localhost:5173/',
		'Hello world!',
		'<s>Vibe coding?</s> Prompt engineering.',
		'git push --force',
		'Made with Svelte ♥',
		'3000? All my homies use 5173.',
		"Don't touch the CSS, it's still wet.",
		'640x480. Just as God intended.',
		"'The Cloud' is just someone else's computer.",
		'Your smart fridge is spying on you.',
		'To understand recursion, one must first understand recursion.',
		'Orwell was an optimist.'
	],
	night: [
		'8 hours of sleep is recommended for optimal performance.',
		'The best code is written at 2am.',
		'The glowies are asleep.',
		'#TODO Go to sleep.',
		'Were you expecting a dark mode?',
		'The edge of oblivion. A soul-crushing weight. I drown in the radiance.'
	]
};

export type SplashType = keyof typeof SPLASHES;

export function getSplash(type: SplashType): string {
	const items = SPLASHES[type];
	const daysSinceEpoch = Math.floor(Date.now() / MS_PER_DAY);
	return items[daysSinceEpoch % items.length];
}
