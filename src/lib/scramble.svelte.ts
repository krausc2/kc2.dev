import { untrack } from "svelte";

/* 
	#TODO Fix "catch-up" animation on page resume by listening for visibilitychange
*/

export function createScramble(source: { value: string; longestValue: string }) {
	const SCRAMBLE_CHARS = "!-_\\/[]{}—=+*^?#_";
	let liveSplash = $state(source.value);

	$effect(() => {
		const newSplash = source.value; // Splash target
		const startText = untrack(() => liveSplash);

		let isDeleting = startText.length > 0;
		let deleteFrameIndex = startText.length;
		let drawFrameIndex = 0;
		const targetLength = newSplash.length;
		
		let scrambleTimer: ReturnType<typeof setTimeout>;

		const tick = () => {
			if (isDeleting) { // Delete block
				deleteFrameIndex--;
				liveSplash = startText.slice(0, deleteFrameIndex); // keep(start, end)

				if (deleteFrameIndex <= 0) {
					isDeleting = false;
					scrambleTimer = setTimeout(tick, 30); 
				} else {
					scrambleTimer = setTimeout(tick, 20); 
				}
			} else { // Draw block
				/*
					Selects the largest of two values to determine how many characters to "settle":
						* settleCount is defined with -4 to allow a sliding window of up to 5 
						scrambled characters at the end, "winding up" to 5, before "settling" back 
						to 0.
				*/
				const settledCount = Math.max(0, drawFrameIndex - 4);
				const settledText = newSplash.slice(0, settledCount);
				
				/*
					Selects the smallest of 3 values to determine how many characters to scramble:
					* 5 characters at most
					* Num of frames drawn so far + 1 (ramp up)
					* Target num of characters - settled characters (cool down)
				*/
				const scrambleLength = Math.min(5, drawFrameIndex + 1, targetLength - settledCount);
				let scrambledPart = ""; // Reset
				for (let i = 0; i < scrambleLength; i++) {
					scrambledPart += SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
				}
				
				liveSplash = settledText + scrambledPart;
				drawFrameIndex++;

				if (settledCount < targetLength) {
					scrambleTimer = setTimeout(tick, 30); 
				}
			}
		};

		scrambleTimer = setTimeout(tick, isDeleting ? 20 : 30);

		return () => clearTimeout(scrambleTimer);
	});

	return {
		get value() {
			return liveSplash;
		},
		get longestValue() {
			return source.longestValue;
		}
	};
}
