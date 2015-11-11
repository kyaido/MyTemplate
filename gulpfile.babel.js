import gulp         from 'gulp';
import sass         from 'gulp-sass';
import postcss      from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import csswring     from 'csswring';
import sourcemaps   from 'gulp-sourcemaps';
import plumber      from 'gulp-plumber';
import webserver    from 'gulp-webserver';
import notify       from 'gulp-notify';


const AUTOPREFIXER_BROWSERS = [
  'last 2 version', 'Explorer >= 10', 'Android >= 4.0'
];


/* sass task */
gulp.task('sass', () => {
  return gulp.src('src/styles/**/*.scss')
    .pipe(plumber({
      errorHandler: notify.onError('Error: <%= error.message %>')
    }))
    .pipe(sourcemaps.init())
    .pipe(sass({
      errLogToConsole: true,
    }))
    .pipe(postcss([
      autoprefixer({browsers: AUTOPREFIXER_BROWSERS}),
      csswring({preserveHacks: true})
    ]))
    .pipe(sourcemaps.write('maps/'))
    .pipe(gulp.dest('dist/styles/'));
});


/* webserver task */
gulp.task('webserver', () => {
  gulp.src('./dist/')
    .pipe(webserver({
      host: '0.0.0.0',
      port: 8000,
      livereload: true,
      directoryListing: false,
      open: 'http://localhost:8000'
    }));
});


/* watch task */
gulp.task('watch', () => {
  gulp.watch(['src/styles/**/*.scss'], ['sass']);
});


/* compile task */
gulp.task('compile', ['sass']);


/* default task */
gulp.task('default', ['compile', 'webserver', 'watch']);