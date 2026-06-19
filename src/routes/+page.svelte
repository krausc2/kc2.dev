<script lang="ts">
	import { createSplash } from "$lib/splashes.svelte";
	import { createScramble } from "$lib/scramble.svelte";
	/* import BinaryCanvas from "$lib/BinaryCanvas.svelte"; */

	/* #TODO Test for hydration error based on client/server timezones. */

	const hour = new Date().getHours();
	const splash = createScramble(createSplash(hour >= 18 || hour < 5 ? "night" : "day"));
</script>

<!-- #TODO Change formatting to ensure correct proportions on huge screen sizes -->
<!-- #TODO Redo this section formatting to be more of a hero section then blurb below, too many elements to land on -->

<section class="relative mb-8 flex flex-col pt-16 lg:mb-32 lg:min-h-screen lg:pt-0">
	<!-- <BinaryCanvas /> -->
	<div class="pointer-events-none absolute inset-0 -z-10 bg-hero-gradient" aria-hidden="true"></div>
	
	<div class="mx-auto flex w-full max-w-[110ch] flex-1 flex-col justify-center border-b px-8">
		<h1 class="mb-4 text-5xl font-bold">krausc2</h1>
		<div class="mb-8 grid bg-stone-900 px-6 py-4 font-mono text-custom-coral lg:mb-0">
			<!-- Ghost element to set dynamic height based on longest quote -->
			<div class="pointer-events-none invisible col-start-1 row-start-1" aria-hidden="true">
				motd@system:~# {splash.longestValue}<span class="cursor opacity-0">|</span>
			</div>
			<!-- Visible splash text -->
			<div class="col-start-1 row-start-1">
				motd@system:~# {splash.value}<span class="cursor">|</span>
			</div>
		</div>
	</div>
</section>

<section class="mx-auto mb-32 flex w-full max-w-[110ch] flex-col gap-8 px-8 lg:block">
		<div
			class="mx-auto flex aspect-3/4 w-2/3 max-w-sm items-center justify-center bg-stone-400 lg:float-right lg:mx-0 lg:mb-4 lg:ml-8 lg:w-2/5 lg:max-w-none"
		>
			<p class="text-stone-500">Placeholder Image</p>
		</div>

		<p class="order-first lg:mb-8">
			G'day, <b>I'm Curtis</b>, a <b>Cyber Security Engineer</b> in Sydney, currently finishing my undergraduate
			studies at Macquarie University.
		</p>

		<p class="lg:mb-8">
			I've spent the last six years building a foundation in IT operations, hybrid infrastructure,
			and cyber risk management. I spent a significant amount of time as a Systems Administrator and
			Support Technician for large independent schools, was an Electronics Repair Technician, and
			also a Systems Integrator. This hands-on background gave me an understanding of how systems
			actually function (and break), which I now use to manage security posture and aligned with
			frameworks such as the ACSC Essential Eight.
		</p>
		<p class="lg:mb-8">You are not your job though, so who am I?</p>
		<p class="lg:mb-8">
			Well when I'm not neck deep in vulnerability reports, my interests are <b>very</b> broad. I enjoy
			building software (though would not consider myself a software engineer) and am currently learning
			Svelte, Tauri, Rust, and C for a variety of cross-platform projects. Analogue hardware is another
			big interest of mine, CRTs and tube amplifiers in particular, along with hardware design and repair
			more generally. I collect physical media (especially vinyl), and am always reading books that challenge
			my perception of the world. At university I studied cyber security, but also took electives in philosophy,
			sound engineering, and medical humanities.
		</p>
		<p class="lg:mb-8">
			Spending too much time lost in thought can leave the mind without physical grounding, so I
			also enjoy top-rope climbing, bouldering, and weight lifting.
		</p>
		<p class="lg:mb-8">
			Most of my professional time in spent buried in the security tools (Defender, Sentinel, Entra
			ID, Azure), but my favorite element of the job is the human part: translating complex
			technical risks into actionable mitigation strategies that actually make sense for businesses.
		</p>
		<!-- #TODO Insert email -->
		<p>
			Check out my <a href="/things">things</a> page for a living document of what I've found insightful,
			a reading (and listening) list of sorts. Feel free to reach out if you'd like to chat about tech,
			security, or anything in between: X@X(dot)X
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
			rgba(245, 245, 244, 0.6) 0%,
			#f5f5f4 30%,
			#f5f5f4 70%,
			rgba(245, 245, 244, 0.6) 100%
		);
	}
</style>
