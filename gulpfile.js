var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat'),
	ngmin = require('gulp-ngmin'),
	clean = require('gulp-clean'),
	sequence = require('gulp-sequence'),
	less = require('gulp-less')

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


gulp.task('scripts', function() {
	return gulp.src(['src/**/module.js', 'src/**/*.js'])
		.pipe(concat('app.js'))
		.pipe(ngmin())
		.pipe(uglify())
		.pipe(gulp.dest('dist'));
});


gulp.task('default',sequence('clean',['move_static_css','move_static_js','compile_less']))