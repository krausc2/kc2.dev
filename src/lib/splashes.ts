const MS_PER_DAY = 86400000; // 24 * 60 * 60 * 1000

const SPLASHES = {
	day: [
		'Splash a',
		'Splash b',
		'Splash c',
		'Splash d',
		'Splash e'
	],
	night: [
		'Night splash a',
		'Night splash b',
		'Night splash c',
		'Night splash d',
		'Night splash e'
	]
};

export function getSplash(type: keyof typeof SPLASHES): string {
	const items = SPLASHES[type];
	const daysSinceEpoch = Math.floor(Date.now() / MS_PER_DAY);
	return items[daysSinceEpoch % items.length];
}
