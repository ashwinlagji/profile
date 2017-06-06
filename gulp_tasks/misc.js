const path = require('path');

const gulp = require('gulp');
const del = require('del');
const filter = require('gulp-filter');

const conf = require('../conf/gulp.conf');

gulp.task('clean', clean);
gulp.task('other', other);

const ghPages = require('gulp-gh-pages');

gulp.task('deploy', function() {
    return gulp.src('./dist/**/*')
        .pipe(ghPages());
});

function clean() {
  return del([conf.paths.dist, conf.paths.tmp]);
}

function other() {
  const fileFilter = filter(file => file.stat.isFile());

  return gulp.src([
    path.join(conf.paths.src, '/**/*'),
    path.join(`!${conf.paths.src}`, '/**/*.{scss,ts,html}')
  ])
    .pipe(fileFilter)
    .pipe(gulp.dest(conf.paths.dist));
}
