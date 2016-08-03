module.exports = {
    entry: {
        Library: './Sources/App.ts',
        // Tests: ['./Tests/Tests.ts', "./Sources/App.ts"]
    },
    output: {
        filename: '[name].js',
        path: __dirname + "/Build/",
        library: "lib"
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
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
