var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var runSequence = require('run-sequence');
var del = require('del');

var cfg = {
  paths: {
    src: './public',
    dist: './dist'
  }
};

gulp.task('clean:dist', () => {
  return del([cfg.paths.dist]);
});

gulp.task('images', () => {
  return gulp.src(cfg.paths.src + '/img/**/*')
    .pipe($.imagemin())
    .pipe(gulp.dest(cfg.paths.dist + '/img'));
});

gulp.task('styles', () => {
  return gulp.src(cfg.paths.src + '/css/**/*.css')
    .pipe($.cssmin())
    .pipe(gulp.dest(cfg.paths.dist + '/css'));
});

gulp.task('js', () => {
  return gulp.src(cfg.paths.src + '/js/**/*.js')
    .pipe($.jshint())
    .pipe($.uglify())
    .pipe(gulp.dest(cfg.paths.dist + '/js'));
});

gulp.task('html', () => {  
  return gulp.src(cfg.paths.src + '/**/*.{html,xml}')
    .pipe($.htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest(cfg.paths.dist));
});

gulp.task('fonts', () => {
  return gulp.src(cfg.paths.src + '/fonts/**/*')
    .pipe(gulp.dest(cfg.paths.dist + '/fonts'));
});

gulp.task('build', ['clean:dist'], (cb) => {
  runSequence(
    ['styles', 'js', 'images', 'html', 'fonts'],
    cb
  );
});