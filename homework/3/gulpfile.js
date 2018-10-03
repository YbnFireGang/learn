require('babel-polyfill');
const gulp = require('gulp'),
  babel = require('gulp-babel'),
  clean = require('gulp-clean'),
  runSequence = require('run-sequence');

const BUILD = 'build';
let jsFile = ['src/**/*.js', '!src/public/**/'];

//babel 转义
gulp.task('babel', () =>
  gulp.src(jsFile)
    .pipe(babel({
      presets: ['@babel/env'],
      plugins: ['@babel/transform-runtime'],
    }))
    .pipe(gulp.dest(BUILD))
);


//清除
gulp.task('clean', () =>
  gulp.src(BUILD)
    .pipe(clean())
);


//监听
// const watcher = gulp.watch(jsFile, ['default']);
// watcher.on('change', function (event) {
//   console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
// });

gulp.task('default', ['clean'], () => {
  runSequence('babel');
});
