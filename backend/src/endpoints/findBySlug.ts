function findBySlug(collection: string) {
	return {
		path: '/',
		method: 'get',
		handler: async (req, res, next) => {
			if (req.query.slug) {
				const { docs } = await req.payload.find({
					collection,
					where: {
						slug: {
							equals: req.query.slug
						}
					}
				});

				if (docs.length > 0) {
					res.status(200).json(docs[0]);
				} else {
					res.sendStatus(404);
				}
			} else {
				next();
			}
		}
	}
}
export default findBySlug;
