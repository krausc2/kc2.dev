const MS_PER_SPLASH = 12000;

/*
	#TODO Fix page resume animation. Browser optimisation causes animation
	to sleep or slow down when inactive (?).
	#TODO Add check for selection of the same splash twice in a row.
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
		"Why not build a digital garden? It's quite fun.",
		"As you start to walk on the way, the way appears.",
		"Vibe coding? Prompt engineering.",
		"Underestimation never stopped a pigeon from unlatching itself or being old.",
		"git push --force",
		"He who awaits the perfect JavaScript framework shall never ship a project.",
		"You finished it, and that's all that matters.",
		"Made with Svelte ♥",
		"An idiot admires complexity. A genius admires simplicity.",
		"Gleep glorp gloop glurp gleep. - The Aliens, probably.",
		"Knowing what is to come does not prevent it from coming.",
		"AI is a statistical mirror; It is the ultimate conformist.",
		"3000? All my homies use 5173.",
		"Real things are messy and living.",
		"Don't touch the CSS, it's still wet.",
		"Is it better for a man to have chosen evil than to have good imposed upon him?",
		"The truth is... the game was rigged from the start.",
		"It is not enough to be industrious; so are the ants.",
		"Be the tree, whose shade you shall never live to sit in.",
		"640x480. Just as God intended.",
		"I can and I will.",
		'If an article contains "let that sink in", it\'s probably not worth reading.',
		"'The Cloud' is just someone else's computer.",
		"Your smart fridge is spying on you.",
		"LARP like your life depends on it.",
		"Look up, it's free.",
		"Orwell was an optimist.",
		"To understand recursion, one must first understand recursion."
	],
	night: [
		"The best code is written at 2am.",
		"No one is more stressed than a 20y/o who thinks they're out of time.",
		"It's later than you think, therefore hasten to do the work of god.",
		"Society has become far too okay with accepting preventable tragedies.",
		"Never run down the clock.",
		"Tyranny exercised for the good of its victims may be the most oppressive.",
		"The valiant never taste of death but once.", // S2
		"Cowards die many times before their deaths.", // S1
		"Memento mori.",
		"...and then? The world.",
		"You're gonna die either way, so hurry up.",
		"He who has a 'why' to live for can bear almost any 'how'.",
		"Life is a war against entropy.",
		"8 hours of sleep is recommended for optimal performance.",
		"The glowies are asleep.",
		"Inequality is required to motivate men to greatness.",
		"Were you expecting a dark mode?",
		"#TODO Go to sleep."
	]
};

export function createSplash(includeNight: boolean = false) {
	let value = $state("");
	const splashes = includeNight ? [...SPLASHES.day, ...SPLASHES.night] : SPLASHES.day;
	const longestValue = splashes.reduce((a, b) => (a.length > b.length ? a : b));

	$effect(() => {
		let tick = Math.floor(Math.random() * splashes.length);

		value = splashes[tick];

		const interval = setInterval(() => {
			tick = Math.floor(Math.random() * splashes.length);
			value = splashes[tick];
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
