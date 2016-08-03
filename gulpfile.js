"use strict"
const gulp = require("gulp");
const ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json', {
    typescript: require('typescript')
});
gulp.task("default", () => {
    gulp.src(["./Sources/**/*ts"])
        .pipe(ts({
            target: "es6",
            module: "es6",
        }, null, ts.reporter.nullReporter()))
        .d, ts.pipe(gulp.dest('Build/'));
})