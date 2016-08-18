"use strict"
const webpack = require("webpack");

//let production = true;

const configs = {
    entry: {
        App: "./Sources/App.ts",
        Tests: "./Tests/Tests.ts",
    },
    output: {
        filename: "[name].js",
        path: __dirname + "/Build/",
        library: "app"
    },
    devtool: "source-map",
    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".js"]
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: "regenerator!babel!ts-loader"
            }
        ]
    }
}
//Minify or not
if ("undefined" != typeof (production) && production) {
    configs.plugins.push(new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    }));
}

module.exports = configs;
