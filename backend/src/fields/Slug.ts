import type { Field } from 'payload/types';
import formatSlug from '../hooks/formatSlug';

function Slug(field: string): Field {
	return {
		name: 'slug',
		label: 'Slug',
		type: 'text',
		index: true,
		hooks: {
			beforeValidate: [formatSlug(field || 'title')],
		},
		admin: {
			position: 'sidebar',
		}
	}
}

export default Slug;
