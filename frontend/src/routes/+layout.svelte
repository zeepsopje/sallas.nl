<script>
	import '../app.css';
	import {
		Navbar,
		Footer,
	} from '$ui';

	export let data = {};

	const menuItems = data.nav.menuItems.map(item => ({
		label: item.title,
		url: item.breadcrumbs?.[item.breadcrumbs.length - 1]?.url,
	}));
</script>

<Navbar items={menuItems} />
<slot />
<Footer {menuItems} />

<style>
	:global(body, html) {
		height: 100%;
	}
</style>
