import { BACKEND_URL } from '$env/static/private';

export function GET({ params }) {
	return fetch(`${BACKEND_URL}/media/${params.name}`);
}
