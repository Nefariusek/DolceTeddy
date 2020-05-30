const keystone = require('keystone');
const Types = keystone.Field.Types;

let Cat = new keystone.List('Cat', {});

Cat.add({
	name: { type: String, required: true },
	description: { type: Types.Html, wysiwyg: true, height: 300 },
	image: { type: Types.CloudinaryImage },
	publishedDate: { type: Date, default: Date.now },
});

Cat.register();
