var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserWebpackPlugin = require('open-browser-webpack-plugin');

module.exports = {
	entry: [
		'webpack-dev-server/client?http://0.0.0.0:8080', // WebpackDevServer host and port
		// 'webpack/hot/only-dev-server',
		'./app/index.js' // Your appʼs entry point
	],
	//生成的sourcemap的方式
	devtool: process.env.WEBPACK_DEVTOOL || 'source-map',
	output: {
		path: path.join(__dirname, 'build'),
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders:[
			{
				test: /\.js?$/,
				exclude: /(node_modules|bower_components)/,
				loaders: ['react-hot', 'babel'],
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract('style-loader', 'css-loader'),
			},
			{
				test: /\.(woff|woff2|eot|ttf|svg)$/,
				loader: "url-loader"
			},
			{
				test: /\.(png|jpg|jpeg|gif)$/,
				loader: "url-loader"
			}
		]
	},
	devServer: {
		contentBase: "./build", //静态资源的目录
		noInfo: true, //  --no-info option
		hot: true,   //自动刷新
		inline: true
	},
	plugins: [
		new webpack.DefinePlugin({
	      'process.env':{
	        'NODE_ENV': JSON.stringify('production')
	      }
	    }),
	    new ExtractTextPlugin("index.css"),
		new HtmlWebpackPlugin({
	      template: './app/index.html',
	      inject: true
	    }),
		new OpenBrowserWebpackPlugin({url: 'http://localhost:8080'})
	]
};
