var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var runSequence = require('run-sequence');
var del = require('del');
var merge2 = require('merge2');

var cfg = {
  paths: {
    src: './public',
    dist: './dist',
    categories: {
      mobile: '/mobile',
      android: '/mobile/android',
      web: '/web',
      frontend: '/web/frontend'
    }
  },
};

gulp.task('clean:dist', () => {
  return del([cfg.paths.dist]);
});

gulp.task('clean:categories', () => {
  return del([cfg.paths.dist + '/categories']);
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

gulp.task('copyCategories', () => {
  var tasks = [];

  for (var cat in cfg.paths.categories) {
    var t = gulp.src(cfg.paths.dist + '/categories/' + cat + '/**/*')
      .pipe(gulp.dest(cfg.paths.dist + cfg.paths.categories[cat]));
    tasks.push(t);
  }

  return merge2(tasks);
});

gulp.task('build', ['clean:dist'], (cb) => {
  runSequence(
    ['styles', 'js', 'images', 'html', 'fonts'],
    'copyCategories',
    'clean:categories',
    cb
  );
});
