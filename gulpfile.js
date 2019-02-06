var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function () {
    return gulp.src([
        './node_modules/animate.css/animate.css',
        './node_modules/normalize.css/normalize.css',
        './assets/sass/**/*.*'
    ], { base: 'themes' })
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('geral.css'))
    .pipe(uglifycss({
        "uglyComments": true
    }))
    .pipe(sourcemaps.write('maps'))
    .pipe(gulp.dest('./assets/css'));
});

gulp.task('scripts', function() {
    return  gulp.src([
        './bower_components/jquery/dist/jquery.min.js',
        './bower_components/fancybox/dist/jquery.fancybox.min.js',
        './bower_components/jquery-ui/jquery-ui.min.js',
        './node_modules/scroll-out/dist/scroll-out.min.js',
        './assets/js/scripts.js',
      ], { base: 'themes'})
      .pipe(sourcemaps.init())
      .pipe(concat('geral.js'))
      .pipe(sourcemaps.write('maps'))
      .pipe(gulp.dest('./assets/js/'));
  });

gulp.task('assets:watch', function () {
    gulp.watch('./assets/sass/**/*.*', ['sass']);
    gulp.watch('./assets/js/*', ['scripts']);
});

gulp.task('default', ['sass', 'scripts', 'assets:watch']);