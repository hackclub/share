<script lang="ts">
	import './layout.css';

	let { children } = $props();
</script>

<div class="py-12 px-22">
	<a href="/" class="underline decoration-wavy">← Return home :D</a>
</div>

<div class="w-full flex justify-center">
	<div class="w-full max-w-4xl flex flex-col gap-6">
		{@render children()}
	</div>
</div>

