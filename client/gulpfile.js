var gulp = require('gulp');
//var sass = require('gulp-ruby-sass');
var sass = require('gulp-sass');
var connect = require('gulp-connect');
var nodemon = require('gulp-nodemon');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var jshint = require('gulp-jshint');
var shell = require('gulp-shell');
var browserSync = require('browser-sync').create();

gulp.task('lint', function() {
  return gulp.src('./src/app/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('browserify', function() {
    // Grabs the app.js file
    return browserify('./src/app/app.js')
        // bundles it and creates a file called main.js
        .bundle()
        .pipe(source('main.js'))
        // saves it the public/js/ directory
        .pipe(gulp.dest('./src/'));
})

gulp.task('copy', ['browserify','scss'], function() {
    gulp.src('./src/**/*.*')
        .pipe(gulp.dest('./public'))
		.pipe(browserSync.stream())
});

gulp.task('scss', function() {
    gulp.src('./src/assets/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./src/assets/stylesheets/'));
});

gulp.task('build',['lint', 'browserify', 'scss', 'copy']);

/* gulp.task('server', ['build'], shell.task([
	'node ../bin/index.js'
])) */
gulp.task('server',['build'], function (cb) {
	var started = false;
	return nodemon({
		script: '../bin/index.js'
		, ext:'html js'
		, env: { 'NODE_ENV': 'development' }
		, ignore: ["../"]
	}).on('start', function () {
		// to avoid nodemon being started multiple times
		// thanks @matthisk
		if (!started) {
			cb();
			started = true;
		} 
	});
})


gulp.task('browser-sync', ['server'], function() {
	browserSync.init(null, {
		proxy: "http://localhost:3000",
        files: ["./src/**/*.*"],
        browser: "firefox",
        port: 7000,
	});
});


gulp.task('default', ['browser-sync'] ,function(){
	gulp.watch(['./src/**/*.*',  '!./src/main.js'], ['build']);
	gulp.watch("./public/index.html").on('change', browserSync.reload);
})


gulp.task('watch', function() {
    gulp.watch(['./src/**/*.*',  '!./src/main.js', '!./src/assets/scss/*.scss'], ['build']);
	gulp.watch("./public/index.html").on('change', browserSync.reload);
})
