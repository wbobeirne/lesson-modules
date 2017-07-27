module.exports = {
	entry: "./js/index.js",
	output: {
		filename: "./dist/app.js",
	},
	module: {
		rules: [{
			test: /\.js$/,
			use: "babel-loader",
		}],
	},
};
