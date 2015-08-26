var webpack = require("webpack");

var jqueryPlugin = new webpack.ProvidePlugin({
        $: "jquery",    
        jQuery: "jquery",
        "window.jQuery": "jquery"
    });

module.exports = {
	entry: './app/index.js',
	output:{
		filename: 'build.js',
        path: 'app'
	},

 	module: {
        loaders: [
            { 
            	test: /\.js$/, 
            	exclude: /node_modules/,
            	loader: "babel" 
            },

            { 
                test: /\.css$/, 
                loader: "style-loader!css-loader" 
            },

            { 
                test: /\.html$/, 
                loader: "raw" 
            },

            { 
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
                loader: "url-loader?limit=10000&minetype=application/font-woff" 
            },
            
            { 
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
                loader: "file-loader" 
            },

            { 
                test: "\.jpg$", 
                loader: "file" 
            },
            { 
                test: "\.png$", 
                loader: "url" 
            }]
    },

    plugins: [ jqueryPlugin ],

    devServer: {
        contentBase: "./app"
    }
};