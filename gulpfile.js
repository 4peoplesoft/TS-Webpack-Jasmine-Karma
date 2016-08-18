"use strict"
const gulp = require("gulp");
const gutil = require("gulp-util");
const webpack = require("webpack");
const fs = require("fs");
const recursive = require("recursive-readdir");

const Sequence = require("sequence").Sequence
const Karma = require("karma").Server;

const webpackConfig = require("./webpack.config.js");

const Tests = {
    Root: "./Tests/",
    Start: "Tests.ts"
};

gulp.task("_Build", (callback) => {
    Sequence.create()
        .then((next) => {
            BuildTestsLauncher(next);
        })
        .then((next) => {
            BuildWebpack(callback)
        })
});
gulp.task("_Watch", () => {
    webpackConfig.watch = true;
    BuildWebpack();
});

gulp.task("_Test", (callback) => {
    Sequence.create()
        .then((next) => {
            BuildTestsLauncher(next);
        })
        .then((next) => {
            new Karma({
                configFile: __dirname + "/karma.conf.js",
            }, () => {
                callback();
            }).start();
        })
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

function BuildTestsLauncher(callback) {
    try {
        gutil.log(gutil.colors.yellow("Remove old test's launcher file."));
        fs.unlinkSync(Tests.Root + Tests.Start);
    } catch (error) {}

    let content = "";
    recursive(Tests.Root, function(err, files) {
        for (let file of files) {
            if (file.match(/\.spec\.ts$/)) {
                content += `import "./${file.replace(/\\/,"/").substring(Tests.Root.length - 2)}";\n`;
            }
        }

        fs.appendFileSync(Tests.Root + Tests.Start, content);
        gutil.log(gutil.colors.green("Build new test's launcher file."));

        if (callback) {
            callback();
        }
    });
}