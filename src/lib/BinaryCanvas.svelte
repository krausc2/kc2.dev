<script lang="ts">
	let canvas: HTMLCanvasElement;
	let canvasWidth = $state(0);
	let canvasHeight = $state(0);
	let offscreen: HTMLCanvasElement;
	let offscreenDpr = 0;
	let currentDpr = $state(typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1);


	$effect(() => {
		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		const dpr = currentDpr; // Fix blurriness on high-DPR screens

		const width = canvasWidth;
		const height = canvasHeight;

		canvas.width = width * dpr;
		canvas.height = height * dpr;

		ctx.scale(dpr, dpr);

		/*
			Font declaration and measurement for sprite sheet.
		*/
		const fontSize = 16;
		const lineHeight = 16;
		ctx.font = `${fontSize}px monospace`;
		const rawCharWidth = ctx.measureText("0").width;
		const spriteWidth = Math.ceil(rawCharWidth);

		/*
			Create offscreen canvas to create sprites.
		*/
		if (!offscreen || offscreenDpr !== dpr) {
			offscreen = document.createElement("canvas");
			offscreenDpr = dpr;
			const oCtx = offscreen.getContext("2d");
			if (!oCtx) return;

			/*
				Print sprites on canvas. 
			*/
			offscreen.width = spriteWidth * 2 * dpr;
			offscreen.height = lineHeight * dpr;
			oCtx.scale(dpr, dpr);
			oCtx.font = `${fontSize}px monospace`;
			oCtx.textBaseline = "top";
			oCtx.fillStyle = "rgba(0, 0, 0, 0.10)";
			oCtx.fillText("0", 0, 0);
			oCtx.fillText("1", spriteWidth, 0);
		}

		/*
			Calculate grid for sprite to draw.
		*/
		const cols = Math.ceil(width / spriteWidth) + 2; // + 2 for page edges
		const rows = Math.ceil(height / lineHeight) + 2;
		const offsetX = (width - cols * spriteWidth) / 2; // Offset to center the grid

		const draw = () => {
			ctx.clearRect(0, 0, width, height); // Clear canvas before drawing

			/* 
				Draw grid using sprite sheet.
			*/
			for (let r = 0; r < rows; r++) {
				// For each row
				for (let c = 0; c < cols; c++) {
					// For each column
					const isOne = Math.random() > 0.5; // Set 1 or 0

					// TODO: If this cell is "glowing", add (spriteWidth * 2) to the sx coordinate
					const sx = isOne ? spriteWidth : 0; // Select sprite "1" (true) or "0" (false)

					const dx = offsetX + c * spriteWidth; // Destination x coordinate
					const dy = r * lineHeight; // Destination y coordinate

					/*
						drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
						Source coordinates must be multiplied by DPR because offscreen canvas 
						pixel dimensions are physically larger.
					*/
					ctx.drawImage(
						offscreen,
						sx * dpr,
						0,
						spriteWidth * dpr,
						lineHeight * dpr,
						dx,
						dy,
						spriteWidth,
						lineHeight // Destination (CSS units)
					);
				}
			}
		};

		draw();
		const interval = setInterval(draw, 250);

		return () => clearInterval(interval);
	});
</script>

<!-- Listen to the device pixel ratio -->
<svelte:window bind:devicePixelRatio={currentDpr} />

<div
	class="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
	bind:clientWidth={canvasWidth}
	bind:clientHeight={canvasHeight}
	aria-hidden="true"
>
	<canvas bind:this={canvas} class="block h-full w-full"></canvas>
</div>
