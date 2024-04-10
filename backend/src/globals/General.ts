import { GlobalConfig } from 'payload/types';

const General: GlobalConfig = {
	slug: 'general',
	fields: [
		{
			type: 'tabs',
			tabs: [
				{
					name: 'presets',
					fields: [
						{
							name: 'homepage',
							type: 'relationship',
							relationTo: 'pages',
						},
					]
				}
			]
		}
	]
};

export default General;
