import { redirect } from '@sveltejs/kit';

export async function load({ params, fetch }) {
	const { nav, general } = await fetch('/api/globals')
		.then(res => res.json())
		.then(res => res);

	if (params.page === general?.presets?.homepage?.slug) {
		redirect(302, '/');
	}

	return {
		nav,
		general,
	}
}
