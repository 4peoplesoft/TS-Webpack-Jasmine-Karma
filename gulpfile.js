"use strict"
const gulp = require("gulp");
const gutil = require("gulp-util");
const webpack = require("webpack");

const webpackConfig = require("./webpack.config.js");

gulp.task("_Build", (callback) => {
    BuildWebpack(callback)
});
gulp.task("_Watch", () => {
    webpackConfig.watch = true;
    BuildWebpack();
});
function BuildWebpack(callback) {
    gutil.log(gutil.colors.green("Start build webpack"));
    webpack(webpackConfig, (error, statistic) => {
        if (error) {
            throw new gutil.PluginError("webpack", error);
        }
        gutil.log(statistic.toString({
            colors: true,
            chunks: false
        }));
        if (callback) {
            callback();
        }
    });
}