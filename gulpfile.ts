// gulpfile.ts
import { src, dest, series, parallel } from 'gulp';
const del = require('del');

var paths = {
    scripts: ['src/*'],
};

function clean(cb: any) {
	// place code for clean task here
	cb();
}

function build(cb: any) {
	// place code for build task here
	cb();
}

function defaultTask(cb: any) {
	// place code for your default task here.
	cb();
}

function streamTask() {
	return src('*.js')
		.pipe(dest('./docs/src/'));
}

exports.default = defaultTask;
exports.build = build;