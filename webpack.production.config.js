var webpack = require('webpack');
var path = require('path');
var loaders = require('./webpack.loaders');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var AssetsPlugin = require('assets-webpack-plugin')

var fs = require('fs');
var	buildPath='./build/';
var folder_exists = fs.existsSync(buildPath);
if(folder_exists == true)
{
   var dirList = fs.readdirSync(buildPath);
   dirList.forEach(function(fileName)
   {
       fs.unlinkSync(buildPath + fileName);
   });
   console.log("clearing " + buildPath);
};

module.exports = {
	entry: {
		app: './index.js',
		vendor: ['react']
	},
	//输出文件配置
	output: {
		path: path.join(__dirname, 'build'),
		filename: '[name]-[hash].js',
		publicPath: '/'
	},
	//更多配置项
	resolve: {
		extensions: ['', '.js', '.jsx']    //自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
	},
	//文件的加载配置
	module: {
		loaders: loaders
	},
	//插件配置
	plugins: [
		//Webpack提供了设置环境变量来优化代码的方案
		new webpack.DefinePlugin({
	      'process.env':{
	        'NODE_ENV': JSON.stringify('production')
	      }
	    }),
	    new ExtractTextPlugin("index-[hash].css"),
		new webpack.optimize.UglifyJsPlugin({
			output: {
				comments: false,  // remove all comments
			},
			compress: {
				warnings: false
			}
	    }),
	    new HtmlwebpackPlugin({
          	title: 'Hello World app',
          	filename: 'index.html',
          	template: './index.html',
          	inject: true
        }),
        new webpack.optimize.CommonsChunkPlugin({
        	name: 'vendor',
        }),
        new AssetsPlugin()
	]
};
