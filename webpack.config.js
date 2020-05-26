const path = require('path');

module.exports = {
	mode: 'development',
	entry: './frontend/index.jsx',
	output: {
		path: path.join(__dirname, '/backend/public/js/'),
		filename: 'bundle.js',
		publicPath: 'backend/public/js/',
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['react', 'env'],
					},
				},
			},
		],
	},
	watch: true,
	resolve: {
		extensions: ['.js', 'jsx', '.css', '.scss'],
	},
};
