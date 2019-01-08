// gulpfile.ts
import { parallel } from 'gulp';
import { del } from 'del';

var paths = {
    scripts: ['src/*'],
};

function clean(cb: any) {

	cb();
}

function defaultTask(cb: any) {
	// place code for your default task here.
	cb();
}

exports.default = defaultTask;