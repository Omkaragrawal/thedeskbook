var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var connect = require('gulp-connect');
var nodemon = require('gulp-nodemon');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var jshint = require('gulp-jshint');

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

gulp.task('copy', ['browserify'], function() {
    gulp.src('./src/**/*.*')
        .pipe(gulp.dest('./public'))
});

gulp.task('build',['lint', 'browserify', 'copy']);

gulp.task('server', function () {
	nodemon({
		script: '../bin/index.js'
		, ext: 'js html'
		, env: { 'NODE_ENV': 'development' }
		, tasks: ['build']
	})
})


gulp.task('default', ['build'] ,function(){
	gulp.start('server');
	gulp.start('watch');
})


gulp.task('watch', function() {
    gulp.watch('./src/**/*.*', ['build'])
})
