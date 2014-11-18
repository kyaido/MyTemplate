var gulp = require('gulp');
// var sass = require('gulp-sass');
var sass = require('gulp-ruby-sass');
var autoprefixer = require('gulp-autoprefixer');
var plumber = require('gulp-plumber');

/* sass task */
gulp.task('sass', function() {
  return gulp.src('scss/**/*.scss')
    .pipe(plumber())
    .pipe(sass({
      sourcemap: true,
      sourcemapPath: '../scss',
      style: 'expanded'
    }))
    .pipe(gulp.dest('css/'));
});

/* autoprefixer task */
gulp.task('autoprefixer', ['sass'], function() {
  return gulp.src('css/**/*.css')
    .pipe(autoprefixer({
      browsers: ['last 2 version', 'Explorer >= 8', 'android 2.3']
    }))
    .pipe(gulp.dest('css/'));
});

/* watch task */
gulp.task('watch', function() {
  gulp.watch(['scss/**/*.scss'], ['autoprefixer']);
});