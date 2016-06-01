var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: __dirname + '/app/index.html',
	filename: 'index.html',
	inject: 'body'
});

module.exports = {
	entry: {
		'./app/assets/js/project.js'
	},
	output: {
		path: __dirname + '/dist',
		filename: "[name].js"
	},
	module: {
		loaders: [
			{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
			{ test: /\.njk$/, loader: 'nunjucks-loader' }
		]
	},
	plugins: [HtmlWebpackPluginConfig]
};

