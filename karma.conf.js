"use strict"
const webpack = require("./webpack.config.js");

module.exports = function(config) {
    config.set({
        browsers: ["PhantomJS", "Chrome"],
        frameworks: ["jasmine"],
        files: [
            "./Tests/Tests.ts"
        ],
        preprocessors: {
            "./Tests/Tests.ts": ["webpack"]
        },
        webpack: {
            module: webpack.module,
            resolve: webpack.resolve
        },
        webpackMiddleware: {
            noInfo: true
        },
        reporters: ["progress"],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        singleRun: true,
        concurrency: Infinity
    })
}