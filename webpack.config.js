const path = require('path');

module.exports = {
	mode: 'development',
	entry: './frontend/src/index.jsx',
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
						presets: ['@babel/preset-react', '@babel/preset-env'],
						plugins: ['@babel/plugin-proposal-class-properties'],
					},
				},
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: [
					{
						loader: 'file-loader',
					},
				],
			},
		],
	},
	watch: true,
	resolve: {
		extensions: ['.js', 'jsx', '.css', '.scss'],
	},
};
