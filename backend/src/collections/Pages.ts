import payload from 'payload';
import { CollectionConfig } from 'payload/types';
import Slug from '../fields/Slug';
import findBySlug from '../endpoints/findBySlug';

const Pages: CollectionConfig = {
	slug: 'pages',
	endpoints: [findBySlug('pages')],
	admin: {
		useAsTitle: 'title'
	},
	fields: [
		{
			name: 'title',
			type: 'text',
		},
		Slug('title'),
	]
}

export default Pages;
