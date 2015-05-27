var gulp         = require('gulp');
var sass         = require('gulp-sass');
// var sass         = require('gulp-ruby-sass');
var autoprefixer = require('gulp-autoprefixer');
var minifyCSS    = require('gulp-minify-css');
var plumber      = require('gulp-plumber');
var webserver    = require('gulp-webserver');

var AUTOPREFIXER_BROWSERS = [
  'last 2 version', 'Explorer >= 8', 'android >= 2.3'
];

/* sass task */
gulp.task('sass', function() {
  return gulp.src('src/scss/**/*.scss')
    .pipe(plumber())
    .pipe(sass( { errLogToConsole: true } ))
    .pipe(autoprefixer({browsers: AUTOPREFIXER_BROWSERS}))
    .pipe(minifyCSS({advanced: false}))
    .pipe(gulp.dest('dist/css/'));
});


/* ruby-sass task */
// gulp.task('sass', function() {
//   return gulp.src('src/scss/**/*.scss')
//     .pipe(plumber())
//     .pipe(sass({
//       'sourcemap=none': true,
//       sourcemapPath: '../../src/scss',
//       style: 'expanded'
//     }))
//     .pipe(autoprefixer({browsers: AUTOPREFIXER_BROWSERS}))
//     .pipe(gulp.dest('dist/css/'));
// });


/* webserver task */
gulp.task('webserver', function() {
  gulp.src('./dist/')
    .pipe(webserver({
      host: '0.0.0.0',
      port: 9000,
      livereload: true,
      directoryListing: false,
      open: false
    }));
});


/* watch task */
gulp.task('watch', function() {
  gulp.watch(['src/scss/**/*.scss'], ['sass']);
});


/* default task */
gulp.task('default', ['webserver', 'watch']);