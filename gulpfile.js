const gulp = require('gulp');

gulp.task('now:config', () => {
  return gulp
    .src(['now/package.json'])
    .pipe(gulp.dest('dist/angular-graphcool-chat'));
});

gulp.task('default', gulp.series(['now:config']));
