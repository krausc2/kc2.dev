<script lang="ts">
	let canvas: HTMLCanvasElement;
	let canvasWidth = $state(0);
	let canvasHeight = $state(0);

	$effect(() => {
		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		const dpr = window.devicePixelRatio || 1; // Fix blurriness on high-DPR screens

		canvas.width = canvasWidth * dpr;
		canvas.height = canvasHeight * dpr;

		ctx.scale(dpr, dpr);

		ctx.clearRect(0, 0, canvasWidth, canvasHeight); // Clear canvas before drawing

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
		const offscreen = document.createElement("canvas");
		const oCtx = offscreen.getContext("2d");
		if (!oCtx) return;

		/*
			Print sprites on canvas. 
		*/
		// TODO Increase to 4 sprites for orange variant
		offscreen.width = spriteWidth * 2 * dpr;
		offscreen.height = lineHeight * dpr;
		oCtx.scale(dpr, dpr);
		oCtx.font = `${fontSize}px monospace`;
		oCtx.textBaseline = "top";
		oCtx.fillStyle = "rgba(0, 0, 0, 0.25)";
		oCtx.fillText("0", 0, 0);
		oCtx.fillText("1", spriteWidth, 0);

		// TODO Future animation sprites
		// oCtx.fillStyle = "rgba(255, 165, 0, 1)"; // Glowing Orange
		// oCtx.fillText("0", spriteWidth * 2, 0);  // Glowing '0'
		// oCtx.fillText("1", spriteWidth * 3, 0);  // Glowing '1'

		/*
			Calculate grid for sprite to draw.
		*/
		const cols = Math.ceil(canvasWidth / spriteWidth) + 2; // + 2 for page edges
		const rows = Math.ceil(canvasHeight / lineHeight) + 2;
		const offsetX = (canvasWidth - cols * spriteWidth) / 2; // Offset to center the grid

		/* 
			Draw Grid using Sprite Sheet.
		*/
		// TODO For animation, wrap drawing logic in a requestAnimationFrame loop and track an array of active "glowing" coordinates to pick the glowing sprites.
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
	});
</script>

<div
	class="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
	bind:clientWidth={canvasWidth}
	bind:clientHeight={canvasHeight}
	aria-hidden="true"
>
	<canvas bind:this={canvas} class="block h-full w-full"></canvas>
</div>
