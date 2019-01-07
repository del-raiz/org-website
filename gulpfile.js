"use strict";
/// gulpfile.js
Object.defineProperty(exports, "__esModule", { value: true });
var gulp_1 = require("gulp");
var del_1 = require("del");
//var gulp = require('gulp');
//var del = require('del');
var paths = {
    scripts: ['src/**/*.js', 'src/**/*.ts', 'src/**/*.map'],
};
gulp_1.gulp.task('clean', function () {
    return del_1.del(['docs/src/**/*.js']);
});
gulp_1.gulp.task('default', function () {
    gulp_1.gulp.src(paths.scripts).pipe(gulp_1.gulp.dest('src'));
});
//# sourceMappingURL=gulpfile.js.map