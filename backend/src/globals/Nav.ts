import { GlobalConfig } from 'payload/types';

const Nav: GlobalConfig = {
	slug: 'nav',
	label: 'Navigation',
	fields: [
		{
			name: 'menuItems',
			type: 'relationship',
			relationTo: 'pages',
			hasMany: true,
		}
	]
};

export default Nav;
