import path from 'path'
import payload from 'payload';

import { payloadCloud } from '@payloadcms/plugin-cloud'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { webpackBundler } from '@payloadcms/bundler-webpack'
import { slateEditor } from '@payloadcms/richtext-slate'
import { buildConfig } from 'payload/config'
import seo from '@payloadcms/plugin-seo';
import nestedDocs from '@payloadcms/plugin-nested-docs'
import redirects from '@payloadcms/plugin-redirects'

import Users from './collections/Users'
import Pages from './collections/Pages'
import Media from './collections/Media'

import General from './globals/General';
import Nav from './globals/Nav';

const collections = [Users, Pages, Media];
const globals = [General, Nav];

export default buildConfig({
	admin: {
		user: Users.slug,
		bundler: webpackBundler(),
	},
	endpoints: [
		{
			path: '/globals',
			method: 'get',
			handler: async (req, res, next) => {
				const response = {};
				const result: any = await Promise.all(
					globals.map(({ slug }) => req.payload.findGlobal({
						slug,
						depth: 2,
					}))
				);

				for (const i in result) {
					response[result[i].globalType] = result[i];
				}

				res.json(response);
			}
		}
	],
	editor: slateEditor({}),
	globals,
	collections,
	typescript: {
		outputFile: path.resolve(__dirname, 'payload-types.ts'),
	},
	graphQL: {
		schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
	},
	csrf: [
		process.env.FRONTEND_URL,
		process.env.BACKEND_URL,
	],
	plugins: [
		redirects({
			collections: ["pages"],
		}),
		seo({
			collections: ['pages'],
			uploadsCollection: 'media',
			generateTitle: ({ doc }) => `${doc.title.value} - Sallas.nl`,
				generateDescription: ({ doc }) => doc.excerpt,
		}),
			nestedDocs({
				collections: ['pages'],
				generateLabel: (_, doc) => doc.title,
					generateURL: (docs) => docs.reduce((url, doc) => `${url}/${doc.slug}`, ''),
			}),
	],
	db: mongooseAdapter({
		url: process.env.DATABASE_URI,
	}),
})
