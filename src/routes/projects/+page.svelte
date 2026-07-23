<script lang="ts">
	import { onMount } from "svelte";
	import { env } from "$env/dynamic/public";

	let emailAddress = $state("[EMAIL PROTECTED]");
	let emailHref = $state("");

	onMount(() => {
		emailAddress = env.PUBLIC_EMAIL;
		emailHref = `mailto:${env.PUBLIC_EMAIL}`;
	});
</script>

<section class="mb-32 flex flex-col">
	<p class="border-b pb-4 text-5xl leading-none font-bold">projects</p>

	<div class="flex flex-col gap-8 border-b border-stone-300 pt-4 pb-4">
		<p>
			Building in public can be a daunting task, but it's also one of the best ways to learn. Most
			people chase comfort, but being comfortable means you are within you your edge; lean just past
			your edge and you will perpetually grow. Don't lean too far though or you'll fall off the
			edge...
		</p>
		<p>
			See something that's broken or just kinda sucks? Open an issue on <a
				href="https://github.com/krausc2?tab=repositories"
				target="_blank"
				class="font-mono text-custom-coral hover:underline">GitHub</a
			> or send an email to <a href={emailHref} class="font-mono text-custom-coral hover:underline">{emailAddress}</a> and I'll gladly credit your contribution.
		</p>
	</div>
</section>
