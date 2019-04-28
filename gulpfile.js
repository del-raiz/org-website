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
const sourcemaps = require('gulp-sourcemaps');

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
function compile() {
	return src(paths.scripts.src)
		.pipe(sourcemaps.init())
		.pipe(tsProject())
		.pipe(sourcemaps.write())
		.pipe(dest(paths.scripts.out));
}

function watching() {
	watch([paths.scripts.src,
		paths.pages.src,
		paths.styles.src], 
		parallel(compile, copyHtml, copyStyles))
}

function copyHtml() {
	return src([paths.pages.src, 'CNAME'])
		.pipe(dest(paths.pages.out));
}

function copyStyles() {
	return src(paths.styles.src)
		.pipe(dest(paths.styles.out));
}

function copyImgs() {
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
);
exports.dev = series(
	clean,
	parallel(
		compile,
		copyHtml,
		copyStyles,
		copyImgs,
	),
	watching
);
