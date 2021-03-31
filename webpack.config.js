const path = require('path');

module.exports = {
	entry: './src/index.ts',
	output: {
		path: path.resolve(__dirname, 'docs'),
		filename: 'bundle.js'
	},
	resolve: {
		extensions: [".ts", ".js", ".json"]
	},
	module: {
		rules: [
			// all files with a '.ts' extension will be handled by 'ts-loader'
			{ test: /\.ts$/, use: ["ts-loader"], exclude: /node_modules/ }
		]
	}
};