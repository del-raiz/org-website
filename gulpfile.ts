/// gulpfile.js

import { gulp } from 'gulp';
import { del } from 'del';

//var gulp = require('gulp');
//var del = require('del');

var paths = {
    scripts: ['src/**/*.js', 'src/**/*.ts', 'src/**/*.map'],
};

gulp.task('clean', function () {
    return del(['docs/src/**/*.js']);
});

gulp.task('default', function () {
    gulp.src(paths.scripts).pipe(gulp.dest('src'))
});