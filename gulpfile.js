var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat'),
	ngmin = require('gulp-ngmin'),
	clean = require('gulp-clean'),
	sequence = require('gulp-sequence'),
	less = require('gulp-less'),
	watch = require('gulp-watch');

	var STATIC_CSS = ['node_modules/bootstrap/dist/css/bootstrap.min.css'];
	var STATIC_JS = ['node_modules/angular/angular.min.js']

gulp.task('clean', function() {
	return gulp.src('dist',{read:false})
		.pipe(clean())
})

gulp.task('move_static_css', function() {
	return gulp.src(STATIC_CSS)
		.pipe(gulp.dest('dist/css'))
});

gulp.task('move_static_js',function(){
	return gulp.src(STATIC_JS)
		.pipe(gulp.dest('dist/js'))
})

gulp.task('compile_less', function () {
  return gulp.src('src/style/less/**/*.less')
    .pipe(less())
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('less-watch',function(){
	return gulp.src(['src/style/less/**/*.less'])
		.pipe(watch('src/style/less/**/*.less'))
		.pipe(less())
		.pipe(gulp.dest('./dist/css'))
})

gulp.task('compile_js', function() {
	return gulp.src(['src/**/*.js'])
		.pipe(concat('app.js'))
		.pipe(ngmin())
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'));
});

gulp.task('js-watch',function(){
	return gulp.src(['src/**/*.js'])
		.pipe(watch('src/**/*.js'))
		.pipe(concat('app.js'))
		.pipe(ngmin())
		.pipe(gulp.dest('dist/js'));
})




gulp.task('dev',sequence('build',['less-watch','js-watch']))



gulp.task('build',sequence('clean',['move_static_css','move_static_js','compile_less','compile_js']))