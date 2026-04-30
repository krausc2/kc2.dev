const MS_PER_SPLASH = 10000;

/*
	#TODO Fix page resume animation. Browser optimisation causes animation
	to sleep or slow down when inactive (?)
*/

const SPLASHES = {
	day: [
		"Any computer is a laptop if you're strong enough.",
		"Clippy just wanted to help.",
		"See my latest project at localhost:5173/",
		"To err is human; to forgive, divine.",
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
		/* #TODO re-join Shakespeare quotes when layout is fixed in page.svelte */
		"Cowards die many times before their deaths.", // #1
		"The valiant never taste of death but once.", // #2
		"The glowies are asleep.",
		"Were you expecting a dark mode?",
		"#TODO Go to sleep.",
		"At the edge of oblivion."
	]
};

export type SplashType = keyof typeof SPLASHES;

export function createSplash(type: SplashType) {
	let value = $state("");

	$effect(() => {
		const splashes = SPLASHES[type];
		let tick = Math.floor(Math.random() * splashes.length);

		value = splashes[tick];

		const interval = setInterval(() => {
			tick++;
			value = splashes[tick % splashes.length];
		}, MS_PER_SPLASH);

		return () => clearInterval(interval);
	});

	return {
		get value() {
			return value;
		}
	};
}
