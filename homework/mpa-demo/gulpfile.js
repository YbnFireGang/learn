const gulp = require('gulp'),
  babel = require('gulp-babel'),
  clean = require('gulp-clean'),
  runSequence = require('run-sequence'),
  rollup = require('gulp-rollup'),
  eslint = require('gulp-eslint');

const BUILD = 'build';
const SERVER_JS_FILE = ['node-server/**/*.js'];

//babel 转义
gulp.task('babel', () =>
  gulp.src(SERVER_JS_FILE)
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

gulp.task('eslint', () =>
  gulp.src(SERVER_JS_FILE)
    .pipe(eslint({configFle: ".eslintrc"}))
    .pipe(eslint.format())
);


//监听
const watcher = gulp.watch(SERVER_JS_FILE, ['default']);
watcher.on('change', function (event) {
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
});

//tree-shaking 去除无引用代码
gulp.task('treeShaking', () =>
  gulp.src(SERVER_JS_FILE)
    .pipe(rollup({
      input: './node-server/app.js',
      format: 'cjs'
    }))
    .pipe(gulp.dest('build')));


//开始执行
gulp.task('default', ['clean'], () => {
  if (process.env.NODE_ENV === 'dev') {
    runSequence('eslint', 'babel');
  } else if (process.env.NODE_ENV === 'prod') {
    runSequence('babel', 'treeShaking')
  }
});
