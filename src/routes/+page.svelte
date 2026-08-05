<script lang="ts">
	import { onMount } from "svelte";
	import { createSplash } from "$lib/splashes.svelte";
	import { createScramble } from "$lib/scramble.svelte";
	import { createAgeCounter } from "$lib/age.svelte";
	import { env } from "$env/dynamic/public";
	import BinaryCanvas from "$lib/BinaryCanvas.svelte";
	import External from "$lib/components/ui/svg-icons/External.svelte";
	import MoreInfo from "$lib/components/ui/svg-icons/MoreInfo.svelte";
	import childhoodPhoto from "$lib/assets/childhood_photo.jpg?enhanced";

	let emailAddress = $state("[EMAIL PROTECTED]");
	let emailHref = $state("");
	let splashReady = $state(false);
	let aboutSection = $state<HTMLElement>();
	let photoLoaded = $state(false);
	let photo = $state<HTMLElement>();

	onMount(() => {
		emailAddress = env.PUBLIC_EMAIL;
		emailHref = `mailto:${env.PUBLIC_EMAIL}`;
		splashReady = true;

		// photo = <img> (dev) or <picture> (prod)
		const img = photo instanceof HTMLImageElement ? photo : photo?.querySelector("img");
		if (img?.complete) {
			photoLoaded = true;
		}
	});

	/* #TODO Test for hydration error based on client/server timezones. */

	const hour = new Date().getHours();
	const splash = createScramble(createSplash(hour >= 18 || hour < 5));
	const age = createAgeCounter();
</script>

<!-- #TODO Fix layout issues where elements draw outside their bounds on small window sizes -->

<section class="relative flex min-h-screen flex-col border-t border-b">
	<BinaryCanvas />
	<div class="bg-hero-gradient pointer-events-none absolute inset-0 -z-10" aria-hidden="true"></div>

	<div class="mx-auto flex w-full max-w-[120ch] flex-1 flex-col justify-center px-8">
		<div class="relative">
			<h1
				class="block text-center text-7xl font-bold md:mb-4 md:inline-flex md:text-left md:text-5xl"
			>
				krausc2
			</h1>
			<div class="hidden bg-stone-900 px-6 py-4 font-mono text-custom-coral md:grid">
				<!-- Ghost element to set dynamic height based on longest quote -->
				<div
					class="pointer-events-none invisible col-start-1 row-start-1 flex items-start justify-between gap-4"
					aria-hidden="true"
				>
					<div>
						motd@system:~# {splash.longestValue}<span class="cursor opacity-0">|</span>
					</div>
					<div class="flex h-6 shrink-0 items-center"><MoreInfo /></div>
				</div>
				<!-- Visible splash text -->
				<div
					class="col-start-1 row-start-1 flex items-start justify-between gap-4 text-custom-coral {!splashReady
						? 'animate-pulse'
						: ''}"
				>
					<div>
						<!-- #TODO Investigate layout shift/flicker on line break (quote over 1 line in length) -->
						motd@system:~# {splash.value}{#if splashReady}<span class="cursor">|</span>{/if}
					</div>
					<div class="flex h-6 shrink-0 items-center">
						<a
							href="/splashes"
							class="text-stone-600 transition-colors duration-700 hover:text-custom-coral hover:duration-200"
						>
							<MoreInfo />
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!--
	Re-do this whole section eventually.

	Should start with brief into, then image to the side, then Q&A style section with expandable answers.
	Also add a timeline of career and education in style of git graph, education becomes branch off to the side,
	volunteer work becomes another branch, etc.

	Title of section "Let's go back in time" or something like that.
-->

<section
	bind:this={aboutSection}
	class="mx-auto flex w-full max-w-[100ch] flex-col gap-8 px-8 pt-32 pb-32 lg:block"
>
	<div class="order-first">
		<p class="mb-4 border-b pb-4 text-5xl leading-none font-bold">about</p>

		<p class="text-sm lg:mb-8">
			G'day, <span class="text-base font-bold">I'm Curtis</span>, a
			<span class="text-base font-bold">Cyber Security Engineer</span> in Sydney, currently finishing
			my undergraduate studies at Macquarie University.
		</p>
	</div>

	<p class="text-sm lg:mb-8">
		My focus area for the past few years has been IT operations, hybrid infrastructure, and cyber
		risk management. I spent a significant amount of time as a Systems Administrator and Support
		Technician for independent schools, assisted small business clients at an MSP, and was also a
		Sales Engineer for a hardware retailer. This hands-on background gave me an understanding of how
		systems work (and break), which I now use to manage security posture aligned with models such as
		the ACSC Essential Eight.
	</p>

	<figure
		class="mx-auto w-2/3 max-w-sm lg:float-right lg:mx-0 lg:mb-4 lg:ml-8 lg:w-2/5 lg:max-w-none"
	>
		<div
			class="relative aspect-3/4 w-full overflow-hidden [&_picture]:relative [&_picture]:z-10 [&_picture]:block [&_picture]:size-full"
		>
			<div class="absolute inset-0 animate-pulse bg-stone-300" aria-hidden="true"></div>
			<enhanced:img
				bind:this={photo}
				src={childhoodPhoto}
				alt="Photo of me circa 2014."
				onload={() => (photoLoaded = true)}
				class="size-full object-cover transition-opacity duration-700 {photoLoaded
					? 'opacity-100'
					: 'opacity-0'}"
			/>
		</div>
		<figcaption class="mt-4 text-center font-mono text-sm">
			Stylish as always, circa 2014.
		</figcaption>
	</figure>

	<p class="text-base lg:mb-8">Who are you?</p>

	<p class="text-sm lg:mb-8">
		I'm <span class="pointer-events-none font-mono text-custom-coral tabular-nums select-none"
			>{age.value}</span
		> years old, and have been tinkering with tech since a young age. I enjoy building software (though
		would not consider myself a software engineer) and am currently learning Svelte, Tauri, Rust, and
		C for a variety of cross-platform projects. Analogue hardware is another big interest of mine, CRTs
		and tube amplifiers in particular, along with hardware design and repair more generally. I collect
		physical media (especially vinyl), and am always reading books that challenge my perception of the
		world. At university I studied cyber security, but also took electives in philosophy, sound engineering,
		and medical humanities.
	</p>

	<p class="text-base lg:mb-8">Do you play sportsball?</p>

	<p class="text-sm lg:mb-8">
		Spending too much time lost in thought can leave the mind without physical grounding, so I enjoy
		going top-rope climbing, bouldering (yeah, yeah, really playing into the trope there), and
		weight lifting.
	</p>

	<p class="text-base lg:mb-8">What are you like to work with?</p>

	<p class="text-sm lg:mb-8">
		Most of my professional time is spent buried in security tools (Defender, Sentinel, Entra ID,
		Azure), but my favorite part of the job is the human element: translating complex technical
		risks into actionable mitigation strategies for businesses. I work best in environments where
		ideas are detached from ego in pursuit of building great things.
	</p>

	<p class="text-base lg:mb-8">How do I become so cool?</p>

	<p class="text-sm">
		Check out my <a href="/articles" class="font-mono text-custom-coral">articles</a>
		page for a list of things I've found insightful: tutorials, reviews for books (and albums), philosophy,
		and other shower thoughts. Feel free to reach out if you'd like to chat about tech, cyber security,
		or anything in between:
		<a href={emailHref} class="inline-flex items-center gap-1 font-mono text-custom-coral"
			>{emailAddress}<External /></a
		>.
	</p>
</section>

<style>
	.cursor {
		animation: blink 1s step-end infinite;
	}

	@keyframes blink {
		from,
		to {
			opacity: 1;
		}
		50% {
			opacity: 0;
		}
	}

	.bg-hero-gradient {
		/* Solid band at center, gradient above and below */
		background-image: linear-gradient(
			to bottom,
			rgba(245, 245, 244, 0.15) 0%,
			#f5f5f4 25%,
			#f5f5f4 75%,
			rgba(245, 245, 244, 0.15) 100%
		);
	}
</style>
