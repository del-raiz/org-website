// gulpfile.ts
let gulp = require('gulp');
let del = require('del');

var paths = {
    scripts: ['src/*'],
};

gulp.task('clean', function () {
    return del(['docs/src/**/*.js', './docs/*.html', './docs/*.css']);
});

gulp.task('default', function () {
    gulp.src(paths.scripts).pipe(gulp.dest('src'))
});