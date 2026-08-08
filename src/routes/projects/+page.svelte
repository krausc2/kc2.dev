<script lang="ts">
	import { onMount } from "svelte";
	import { fade } from "svelte/transition";
	import { env } from "$env/dynamic/public";
	import External from "$lib/components/ui/svg-icons/External.svelte";
	import type { Project } from "./data/projects";

	let emailAddress = $state("[EMAIL PROTECTED]");
	let emailHref = $state("");
	let projects: Project[] | null = $state(null);

	onMount(async () => {
		emailAddress = env.PUBLIC_EMAIL;
		emailHref = `mailto:${env.PUBLIC_EMAIL}`;

		const res = await fetch("/projects/data");
		projects = await res.json();
	});
</script>

<section class="mb-32">
	<div class="mx-auto max-w-[100ch] px-8 pt-16">
		<p class="border-b pb-4 text-5xl leading-none font-bold">projects</p>

		<div class="flex flex-col gap-8 border-b border-stone-300 pt-4 pb-4">
			<p>Building in public can be a daunting task, but it's also one of the best ways to learn.</p>
			<!-- Use quote elsewhere: 
			 	Most people chase comfort, but being comfortable means you are within you your edge; lean just past
				your edge and you will perpetually grow. Don't lean too far though or you'll fall off the
				edge...
			-->
			<p>
				See something that's broken or just kinda sucks? Open an issue on <a
					href="https://github.com/krausc2?tab=repositories"
					target="_blank"
					class="inline-flex items-center gap-1 font-mono text-custom-coral">GitHub <External /></a
				>
				or send an email to
				<a href={emailHref} class="inline-flex items-center gap-1 font-mono text-custom-coral"
					>{emailAddress} <External /></a
				> and I'll gladly credit your contribution.
			</p>
		</div>
	</div>

	<div class="grid">
		{#if !projects}
			<div
				class="col-start-1 row-start-1 mx-auto max-w-[100ch] animate-pulse px-8 pt-12"
				out:fade={{ duration: 300 }}
			>
				There is no server error. Your internet just genuinely sucks...
			</div>
		{:else}
			<div class="col-start-1 row-start-1 pt-8">
				{#each projects as project, i (project.slug)}
					<a
						href="/projects/{project.slug}"
						class="group relative block py-4"
						in:fade|global={{ duration: 300, delay: 300 + i * 150 }}
					>
						<div
							class="pointer-events-none absolute inset-0 z-0 transform-gpu bg-linear-to-r from-white to-stone-100 opacity-0 transition-opacity duration-700 group-hover:opacity-100 group-hover:duration-200"
						></div>
						<div class="relative z-10 mx-auto max-w-[100ch] px-8">
							<p>{project.title}</p>
							<div class="flex flex-col md:flex-row md:items-baseline md:justify-between">
								<p class="font-mono text-sm text-custom-coral">#{project.tag}</p>
							</div>
						</div>
					</a>
				{/each}
			</div>
		{/if}
	</div>
</section>
