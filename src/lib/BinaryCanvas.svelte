<script lang="ts">
	import { untrack } from "svelte";

	let canvas: HTMLCanvasElement;
	let canvasWidth = $state(0);
	let canvasHeight = $state(0);
	let offscreen: HTMLCanvasElement;
	let offscreenDpr = 0;
	let currentDpr = $state(typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1);
	let ready = $state(false);

	const fontSize = 16;
	const lineHeight = 16;
	let spriteWidth = 10;

	const generateOffscreen = (dpr: number, width: number) => {
		offscreen = document.createElement("canvas");
		offscreenDpr = dpr;
		const oCtx = offscreen.getContext("2d");
		if (!oCtx) return;

		offscreen.width = width * 2 * dpr; // * 2 as 2 sprites
		offscreen.height = lineHeight * dpr;
		oCtx.scale(dpr, dpr);
		oCtx.font = `${fontSize}px monospace`;
		oCtx.textBaseline = "top";
		oCtx.fillStyle = "rgba(0, 0, 0, 0.10)";
		oCtx.fillText("0", 0, 0);
		oCtx.fillText("1", width, 0);
	};

	const draw = () => {
		if (!canvas || !offscreen) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		const width = canvasWidth;
		const height = canvasHeight;
		const dpr = currentDpr;
		const sWidth = spriteWidth;

		if (width === 0 || height === 0) return;

		const cols = Math.ceil(width / sWidth) + 2;
		const rows = Math.ceil(height / lineHeight) + 2;
		const offsetX = (width - cols * sWidth) / 2;

		ctx.clearRect(0, 0, width, height);

		for (let r = 0; r < rows; r++) {
			for (let c = 0; c < cols; c++) {
				const isOne = Math.random() > 0.5;
				const sx = isOne ? sWidth : 0;

				const dx = offsetX + c * sWidth;
				const dy = r * lineHeight;

				ctx.drawImage(
					offscreen,
					sx * dpr,
					0,
					sWidth * dpr,
					lineHeight * dpr,
					dx,
					dy,
					sWidth,
					lineHeight
				);
			}
		}
		ready = true;
	};

	// #TODO Explore restricting effect trigger speed for rapid window resizing (poor perf) (debounce?)
	// Reactive effect for window resize
	$effect(() => {
		if (!canvas) return;

		const width = canvasWidth;
		const height = canvasHeight;
		const dpr = currentDpr;

		if (width === 0 || height === 0) return;

		canvas.width = width * dpr;
		canvas.height = height * dpr;

		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		ctx.scale(dpr, dpr);
		ctx.font = `${fontSize}px monospace`;
		spriteWidth = Math.ceil(ctx.measureText("0").width);

		if (!offscreen || offscreenDpr !== dpr) {
			generateOffscreen(dpr, spriteWidth);
		}

		untrack(() => draw());
	});

	// Animation loop
	$effect(() => {
		const interval = setInterval(draw, 250);
		return () => clearInterval(interval);
	});
</script>

<!-- Listen to the device pixel ratio -->
<svelte:window bind:devicePixelRatio={currentDpr} />

<div
	class="pointer-events-none absolute inset-0 -z-10 overflow-hidden transition-opacity duration-700 {ready ? 'opacity-100' : 'opacity-0'}"
	bind:clientWidth={canvasWidth}
	bind:clientHeight={canvasHeight}
	aria-hidden="true"
>
	<canvas bind:this={canvas} class="block h-full w-full"></canvas>
</div>
