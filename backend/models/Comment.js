const keystone = require('keystone');
const Types = keystone.Field.Types;

let Comment = new keystone.List('Comment', {});

Comment.add({
	author: { type: String, required: true, default: 'Anonymous' },
	description: { type: String, required: true, default: 'Comment' },
	publishedDate: { type: Date, default: Date.now },
});
