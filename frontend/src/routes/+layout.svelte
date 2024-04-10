<script>
	import '../app.css';

	export let data = {};

	const { menuItems } = data.nav;
</script>

<nav>
	{#each menuItems as item}
		<a href={item.slug}>{item.title}</a>
	{/each}
</nav>

<slot />

<style>
	nav {
		display: flex;
		gap: 20px;
	}
</style>
