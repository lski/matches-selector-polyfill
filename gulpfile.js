"use strict";

const gulp = require('gulp'),
	fs = require('fs'),
	replace = require('gulp-replace'),
	rename = require('gulp-rename'),
	minify = require('gulp-uglify'),
	insert = require('gulp-insert'),
	merge = require('merge-stream'),
	sourcemaps = require('gulp-sourcemaps'),
	del = require('del'),
	injectContentReg = /^([\t ]*)\/\* inject:content \*\//gm,
	settings = require('./package.json'),
	pageComment = ["/*! ", settings.author, " - ", settings.name, " - ", settings.version, " */"].join("");

gulp.task('clean', clean);
gulp.task('dist', ['clean'], dist);
gulp.task('default', ['dist']);

function clean() {
	return del('./dist');
}

function dist() {

	let poly = _createPolyfillVersion();
	let mod = _createModuleVersion();

	return merge(poly, mod)
		.pipe(sourcemaps.init())
		.pipe(minify())
		.pipe(insert.prepend(pageComment))
		.pipe(sourcemaps.write('./maps'))
		.pipe(gulp.dest('./dist'));
}

function _createPolyfillVersion() {

	let code = _getCode('./src/matches-selector.js');

	return gulp.src('./src/polyfill.js')
		.pipe(replace(injectContentReg, code))
		.pipe(replace())
		.pipe(rename('matches-selector-polyfill.js'));
}

function _createModuleVersion() {

	let code = _getCode('./src/matches-selector.js');

	return gulp.src('./src/umd.js')
		.pipe(replace(injectContentReg, code))
		.pipe(rename('matches-selector.js'));
}

function _getCode(path) {
	return '$1' + fs.readFileSync(path, 'utf8').replace(/\n/g, '\n$1');
}