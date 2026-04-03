const MS_PER_SPLASH = 10000;

const SPLASHES = {
	day: [
		"Any computer is a laptop if you're strong enough.",
		"Clippy just wanted to help.",
		"See my latest project at localhost:5173/",
		"Hello world!",
		"<s>Vibe coding?</s> Prompt engineering.",
		"git push --force",
		"Made with Svelte ♥",
		"3000? All my homies use 5173.",
		"Don't touch the CSS, it's still wet.",
		"640x480. Just as God intended.",
		"'The Cloud' is just someone else's computer.",
		"Your smart fridge is spying on you.",
		"To understand recursion, one must first understand recursion.",
		"Orwell was an optimist."
	],
	night: [
		"8 hours of sleep is recommended for optimal performance.",
		"The best code is written at 2am.",
		"The glowies are asleep.",
		"#TODO Go to sleep.",
		"Were you expecting a dark mode?",
		"At the edge of oblivion."
	]
};

export type SplashType = keyof typeof SPLASHES;

export function createSplash(type: SplashType) {
	let tick = $state(Math.floor(Math.random() * 100));

	$effect(() => {
		const interval = setInterval(() => tick++, MS_PER_SPLASH);
		return () => clearInterval(interval);
	});

	return {
		get value() {
			const splashes = SPLASHES[type];
			return splashes[tick % splashes.length];
		}
	};
}
