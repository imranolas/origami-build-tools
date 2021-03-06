'use strict';

var gulp = require('gulp');
var obt = require('./lib/origami-build-tools');

gulp.task('verify', function() {
	return obt.verify(gulp, {
		jsHintPath: '.jshintrc',
		editorconfigPath: '.editorconfig'
	});
});

gulp.task('test', function() {
	return obt.test.npmTest(gulp);
});

gulp.task('install', function() {
	return obt.install();
});

gulp.task('watch', function() {
	gulp.watch('./lib/**/*', ['verify', 'test']);
});

gulp.task('default', ['verify', 'test', 'watch']);
