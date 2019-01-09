// gulpfile.js
'use strict'

const gulp = require('gulp');
const rimraf = require('rimraf');
const tsb = require('gulp-tsb');

let paths = {
	scripts: {
		src: 'src/**/*.ts',
		out: 'docs/src'
	},
	pages: {
		src: 'src/*.html',
		out: 'docs'
	},
	styles: {
		src: "src/css/*.css",
		out: "docs/src/css"
	},
	imgs: {
		src: 'src/imgs/**/*',
		out: 'docs/src/imgs'
	}
};

let compilation = tsb.create('tsconfig.json');
gulp.task('compile', () => {
	return gulp
		.src(paths.scripts.src)
		.pipe(compilation()) // <- new compilation
		.pipe(gulp.dest(paths.scripts.out));
});

gulp.task('watch', ['compile'], () => {
	gulp.watch(paths.scripts.src, ['compile']);
})

gulp.task('copy-html', () => {
	return gulp
	.src([paths.pages.src, 'CNAME'])
	.pipe(gulp.dest(paths.pages.out));
});

gulp.task('copy-styles', () => {
	return gulp
	.src(paths.styles.src)
	.pipe(gulp.dest(paths.styles.out));
});

gulp.task('copy-imgs', () => {
	return gulp
	.src(paths.imgs.src)
	.pipe(gulp.dest(paths.imgs.out));
});

gulp.task('clean', cb => {
	rimraf('docs/**/*', cb);
});

gulp.task('build', ['compile', 'copy-html', 'copy-styles', 'copy-imgs']);

