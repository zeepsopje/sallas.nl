<script>
	import '../app.css';
	import { Navbar } from '$ui';

	export let data = {};

	const { menuItems } = data.nav;
</script>

<Navbar items={menuItems} />
<slot />

<style>
	:global(body, html) {
		height: 100%;
		background-color: #fafafa;
	}
</style>
