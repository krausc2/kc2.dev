<script lang="ts">
	import type { Component } from "svelte";

	// Icon imports
	import SvelteIcon from "$lib/components/ui/svg-icons/Svelte.svelte";
	import TypeScriptIcon from "$lib/components/ui/svg-icons/TypeScript.svelte";
	import CloudflareIcon from "$lib/components/ui/svg-icons/Cloudflare.svelte";

	let { tag } = $props<{ tag: string }>();

	const tagConfig: Record<string, { icon: Component<{ size?: string }>; color: string }> = {
		Svelte: { icon: SvelteIcon, color: "text-[#FF3E00]" },
		TypeScript: { icon: TypeScriptIcon, color: "text-[#007acc]" },
		Cloudflare: { icon: CloudflareIcon, color: "text-[#F48120]" }
	};

	let config = $derived(tagConfig[tag]);
</script>

{#if config}
	{@const Icon = config.icon}
	<span class="inline-flex items-center gap-1.5 border px-2 py-1 font-mono text-sm {config.color}">
		<Icon size="14" />
		{tag}
	</span>
{:else}
	<span class="border px-2 py-1 font-mono text-sm text-custom-coral">{tag}</span>
{/if}
