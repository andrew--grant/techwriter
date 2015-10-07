var gulp = require('gulp');
var browserify = require('browserify');
var watch = require('gulp-watch');
var batch = require('gulp-batch');
var source = require('vinyl-source-stream');
var nodemon = require('gulp-nodemon');
var livereload = require('gulp-livereload');
var notify = require('gulp-notify');
var babelify = require("babelify");

var bundleCommon = {src: './public/js/common/src/index.js', dest: './public/js/common', bundleName: 'bundle-common.js'};
var bundleEditor = {src: './public/js/editor/src/index.js', dest: './public/js/editor', bundleName: 'bundle-editor.js'};


gulp.task('watch', function () {
	watch(['./public/js/common/src/**/*.js', './public/js/editor/src/**/*.js'], batch(function (events, done) {
		gulp.start(['browserify-common', 'browserify-editor'], done);
	}));
});

gulp.task('browserify-common', function () {
	return browserify({entries: bundleCommon.src})
		.transform(babelify)
		.bundle()
		.pipe(source(bundleCommon.bundleName))
		.pipe(gulp.dest(bundleCommon.dest));
});

gulp.task('browserify-editor', function () {
	return browserify({entries: bundleEditor.src})
		.transform(babelify)
		.bundle()
		.pipe(source(bundleEditor.bundleName))
		.pipe(gulp.dest(bundleEditor.dest));
});

gulp.task('start', function () {
	nodemon({
		script: 'keystone.js'
		, ext: 'js hbs',
		ignore: ['./public/js/'],
		execMap: {
			js: "node --harmony"
		}
	})
});
 
