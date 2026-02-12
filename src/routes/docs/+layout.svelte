<script lang="ts">
	import './layout.css';

	let { children } = $props();
</script>

<div class="docs"> <!--JANK workaround to make sure the CSS doesn't get preloaded :((( -->
	<div class="py-12 px-22">
		<a href="/">← Return home :D</a>
	</div>

	<div class="w-full flex justify-center px-12 pb-8">
		<div class="w-full max-w-4xl flex flex-col gap-6 relative">
			{@render children()}
		</div>
	</div>
</div>
