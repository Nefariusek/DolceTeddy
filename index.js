require('dotenv').config();

const keystone = require('keystone');

keystone.init({
	'name': 'DolceTeddy',
	'static': ['./backend/public/js/', './backend/public/img/'],
	'brand': 'DolceTeddy',
	'auto update': true,
	'session': true,
	'auth': true,
	'user model': 'User',
});

keystone.import('./backend/models');

keystone.set('locals', {
	_: require('lodash'),
	env: keystone.get('env'),
	utils: keystone.utils,
	editable: keystone.content.editable,
});

keystone.set('routes', require('./backend/routes'));

keystone.set('nav', {
	users: 'users',
});

keystone.start();
