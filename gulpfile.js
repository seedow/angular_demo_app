var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat'),
	ngmin = require('gulp-ngmin'),
	clean = require('gulp-clean'),
	sequence = require('gulp-sequence'),
	less = require('gulp-less'),
	watch = require('gulp-watch'),
	connect = require('gulp-connect');

var STATIC_CSS = ['node_modules/bootstrap/dist/css/bootstrap.min.css'],
	STATIC_JS = ['node_modules/angular/angular.min.js']

gulp.task('clean', function() {
	return gulp.src('dist', {
			read: false
		})
		.pipe(clean())
})

gulp.task('move_static_css', function() {
	return gulp.src(STATIC_CSS)
		.pipe(gulp.dest('dist/css'))
});

gulp.task('move_static_js', function() {
	return gulp.src(STATIC_JS)
		.pipe(gulp.dest('dist/js'))
})

gulp.task('compile_less', function() {
	return gulp.src('src/style/less/**/*.less')
		.pipe(less())
		.pipe(gulp.dest('./dist/css'))
		.pipe(connect.reload());
});

gulp.task('compile_js', function() {
	return gulp.src(['src/**/*.js'])
		.pipe(concat('app.js'))
		.pipe(ngmin())
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'))
		.pipe(connect.reload());
});


gulp.task('connect', function() {
	connect.server({
		root: './',
		livereload: true
	});
});


gulp.task('watch_html', function () {
  gulp.src('index.html')
    .pipe(connect.reload());
});

gulp.task('watch', function() {
	gulp.watch('src/style/less/*.less', ['compile_less']);
	gulp.watch('src/**/*.js', ['compile_js']);
	gulp.watch('index.html', ['watch_html']);
});



gulp.task('dev', sequence(['build', 'connect'], ['watch']))



gulp.task('build', sequence('clean', ['move_static_css', 'move_static_js', 'compile_less', 'compile_js']))