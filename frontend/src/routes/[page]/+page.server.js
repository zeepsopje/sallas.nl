import { error } from '@sveltejs/kit';

export async function load({ params, fetch }) {
	const result = await fetch(`/api/pages?slug=${params.page}`);

	if (result.status !== 200) {
		return error(404);
	}

	return {
		...(await result.json()),
	}
}
