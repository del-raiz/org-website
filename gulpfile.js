// gulpfile.js
'use strict'

const { 
	src, 
	dest, 
	series, 
	parallel, 
	watch 
} = require('gulp');
const rimraf = require('rimraf');
const ts = require('gulp-typescript');
const sourcemaps = require('gulp-sourcemaps')

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

let tsProject = ts.createProject('tsconfig.json');
function compile(cb) {
	return src(paths.scripts.src)
		.pipe(sourcemaps.init())
		.pipe(tsProject())
		.pipe(sourcemaps.write())
		.pipe(dest(paths.scripts.out));
};

function tsWatch() {
	watch(paths.scripts.src, compile)
}

function copyHtml (cb) {
	return src([paths.pages.src, 'CNAME'])
		.pipe(dest(paths.pages.out));
}
function copyStyles (cb) {
	return src(paths.styles.src)
		.pipe(dest(paths.styles.out));
};

function copyImgs(cb) {
	return src(paths.imgs.src)
		.pipe(dest(paths.imgs.out));
}

function clean(cb) {
	rimraf('docs/**/*', cb);
}

exports.clean = clean;
exports.build = series(
	clean,
	parallel(
		compile,
		copyHtml,
		copyStyles,
		copyImgs,
	),
	//tsWatch
);
