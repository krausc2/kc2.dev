const MS_PER_SPLASH = 12000;

/*
	#TODO Fix page resume animation. Browser optimisation causes animation
	to sleep or slow down when inactive (?)
*/

/*
	Unclassified
*/

const SPLASHES = {
	day: [
		"Any computer is a laptop if you're strong enough.",
		"Clippy just wanted to help.",
		"See my latest project at localhost:5173/",
		"To err is human; to forgive, divine.",
		"Hello world!",
		"As you start to walk on the way, the way appears.",
		"Vibe coding? Prompt engineering.",
		"Underestimation never stopped a pigeon from unlatching itself or being old.",
		"git push --force",
		"Tyranny exercised for the good of its victims may be the most oppressive.",
		"Made with Svelte ♥",
		"An idiot admires complexity. A genius admires simplicity.",
		"Knowing what is to come does not prevent it from coming.",
		"AI is a statistical mirror; It is the ultimate conformist.",
		"3000? All my homies use 5173.",
		"Real things are messy and living.",
		"...and then? The world.",
		"Don't touch the CSS, it's still wet.",
		"Is it better for a man to have chosen evil than to have good imposed upon him?",
		"Be the tree, whose shade you shall never live to sit under.",
		"640x480. Just as God intended.",
		"I can and I will.",
		"'The Cloud' is just someone else's computer.",
		"Your smart fridge is spying on you.",
		"To understand recursion, one must first understand recursion."
	],
	night: [
		"The best code is written at 2am.",
		"Cowards die many times before their deaths.", // S1
		"The valiant never taste of death but once.", // S2
		'"It\'s later than you think, therefore hasten to do the work of god."',
		"Never run down the clock.",
		"It is not enough to be industrious; so are the ants.",
		"8 hours of sleep is recommended for optimal performance.",
		"Orwell was an optimist.",
		"The glowies are asleep.",
		"Inequality is required to motivate men to greatness.",
		"Were you expecting a dark mode?",
		"#TODO Go to sleep.",
		"Memento mori."
	]
};

export type SplashType = keyof typeof SPLASHES;

export function createSplash(type: SplashType) {
	let value = $state("");
	const splashes = SPLASHES[type];
	const longestValue = splashes.reduce((a, b) => (a.length > b.length ? a : b));

	$effect(() => {
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
		},
		get longestValue() {
			return longestValue;
		}
	};
}
