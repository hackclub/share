<script lang="ts">
	import './layout.css';
	import favicon from '/images/favicon.png';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Ship Projects, Get Prizes</title>
</svelte:head>

{@render children()}
