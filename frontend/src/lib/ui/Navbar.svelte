<script>
	import { page } from '$app/stores';

	export let items = [];

	const { pathname } = $page.url;
</script>

<div class="h-[80px] bg-white">
	<div class="h-full container mx-auto px-4 flex justify-between items-center">
		<a href="/">
			<img src="/img/logo.png" class="h-[50px]" alt="Sallas Logo" />
		</a>
		<nav class="flex gap-[20px]">
			{#each items as item}
				<a href={item.url}>{item.label}</a>
			{/each}
		</nav>
	</div>
</div>
