const gulp = require('gulp');
const watcher = gulp.watch(['./**/*', '!./node_modules/**/*']);
watcher.on('change', function (event) {
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
});

gulp.task('default', []);