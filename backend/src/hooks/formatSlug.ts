import type { FieldHook } from 'payload/types'

const format = (val: string): string => val.replace(/ /g, '-').replace(/[^\w-]+/g, '').toLowerCase();

function formatSlug(fallback: string): FieldHook {
	return async function({
		operation,
		value,
		originalDoc,
		data,
		req,
		collection,
	}) {
		if (typeof value === 'string') {
			return format(value)
		}

		const fallbackData = data?.[fallback] || originalDoc?.[fallback]

		if (fallbackData && typeof fallbackData === 'string') {
			return format(fallbackData)
		}
	}
}

export default formatSlug
