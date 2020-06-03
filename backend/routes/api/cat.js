const keystone = require('keystone');

let Cat = keystone.list('Cat');

exports.list = (req, res) => {
	Cat.model
		.find((err, items) => {
			if (err) return res.apiError('Database error', err);
			res.apiResponse({
				cat: items,
			});
		})
		.limit(Number(req.query.limit));
};
