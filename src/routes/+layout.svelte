<script lang="ts">
	import './layout.css';
	import favicon from '/images/favicon.png';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Share Projects, Get Prizes</title>
</svelte:head>

<div class="min-h-screen flex flex-col relative overflow-hidden">
	{@render children()}

	<div class="mt-auto text-center mb-8 pt-16">
		<a href="https://github.com/KaiPereira" target="_blank" rel="noreferrer" class="inline-block underline decoration-wavy">Made by Kai Pereira :D</a>
	</div>
</div>
