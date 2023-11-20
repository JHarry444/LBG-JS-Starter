const path = require('path');

module.exports = {
	mode: 'development',
	entry: path.resolve(__dirname, 'src/index.js'),
	output: { 
      path: path.resolve(__dirname, 'dist'),
      filename: 'main.js',
},
devServer: {
      static: {
	      directory: path.resolve(__dirname, 'dist'),            
},
	open: true,
hot: true,
compress: true,
historyApiFallback: true,
}, 
module: {
    rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/
        }
    ],
}

}
