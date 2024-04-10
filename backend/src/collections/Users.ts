import { CollectionConfig } from 'payload/types'

const Users: CollectionConfig = {
	slug: 'users',
	auth: {
		useAPIKey: true,
	},
	admin: {
		useAsTitle: 'email',
	},
	fields: [],
}

export default Users
