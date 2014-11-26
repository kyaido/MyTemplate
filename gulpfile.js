var gulp = require('gulp');
// var sass = require('gulp-sass');
var sass = require('gulp-ruby-sass');
var autoprefixer = require('gulp-autoprefixer');
var plumber = require('gulp-plumber');
var webserver = require('gulp-webserver');

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
      browsers: ['last 2 version', 'Explorer >= 8', 'android >= 2.3']
    }))
    .pipe(gulp.dest('css/'));
});

/* webserver task */
gulp.task('webserver', function() {
  gulp.src('.')
    .pipe(webserver({
      host: '0.0.0.0',
      port: 9000,
      livereload: true,
      directoryListing: true,
      open: false
    }));
});

/* watch task */
gulp.task('watch', ['webserver'], function() {
  gulp.watch(['scss/**/*.scss'], ['autoprefixer']);
});

/* default task */
gulp.task('default', ['watch'], function() {
  // call watch task simply.
});