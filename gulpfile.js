var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

gulp.task('sass', function () {
    return gulp.src('./assets/sass/**/*.sass')
    //.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./assets/css'));
});

gulp.task('scripts', function() {
    return  gulp.src([
        './bower_components/jquery/dist/jquery.min.js',
        './bower_components/fancybox/dist/jquery.fancybox.min.js',
        './bower_components/jquery-ui/jquery-ui.min.js',
        './bower_components/bootstrap-sass/assets/javascripts/bootstrap.min.js',
      ])
      .pipe(concat('plugins.js'))
      .pipe(gulp.dest('./assets/js/'));
  });

gulp.task('sass:watch', function () {
    gulp.watch('./assets/sass/**/*.sass', ['sass']);
});

gulp.task('default', ['sass', 'sass:watch']);