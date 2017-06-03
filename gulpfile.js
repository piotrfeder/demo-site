var gulp = require('gulp');

var jshint = require('gulp-jshint');
var hintStylish = require('jshint-stylish');
var sass = require('gulp-sass');
var uncss = require('gulp-uncss');
var csslint = require('gulp-csslint');
var concat = require('gulp-concat');
var autoPrefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');
var cssMin = require('gulp-cssmin');
var rename = require('gulp-rename');
var htmlhint = require('gulp-htmlhint');
var csscomb = require('gulp-csscomb');
var htmlmin = require('gulp-htmlmin');


gulp.task('js_test', function() {
		return gulp.src('src/js/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('jshint-stylish'));
});


gulp.task('css_task', function() {
	return gulp.src('src/scss/*.scss')
	.pipe(sass())
	.pipe(autoPrefixer({
			browsers: ['Firefox > 20', 'ie > 10', 'Safari > 5', 'iOS > 8', 'Android > 4', 'Chrome > 20'],
			cascade: true
		}))
	.pipe(csscomb())
	.pipe(csslint())
	.pipe(cssMin())
	.pipe(concat('style.min.css'))
	.pipe(gulp.dest('app/css'));

});

gulp.task('js_task', function() {
		return gulp.src('src/js/*.js')
		.pipe(rename('script.min.js'))
		.pipe(gulp.dest('app/js'));
});


gulp.task('html_test', function() {
		return gulp.src('src/*.html')
		/* .pipe(htmlhint()) */
		.pipe(htmlhint.reporter());

});
gulp.task('html_task', function() {
		return gulp.src('src/*.html')
		.pipe(htmlmin())
		.pipe(gulp.dest('app/'));

});









gulp.task('watch', function() {

	gulp.watch('src/js/*.js', ['js_task']);
	gulp.watch('src/scss/*.scss', ['css_task']);
	gulp.watch('src/*.html', ['html_task', 'html_test']);
	});

gulp.task('robimy', ['js_task', 'css_task', 'js_test', 'html_task', 'html_test', 'watch']);
