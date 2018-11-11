const gulp = require('gulp'),
  babel = require('gulp-babel'),
  clean = require('gulp-clean'),
  runSequence = require('run-sequence'),
  rollup = require('gulp-rollup'),
  uglify = require('gulp-uglify'),
  eslint = require('gulp-eslint');

const BUILD = 'build';
const SERVER_JS_FILE = ['node-server/**/*.js'];
const isProd = process.env.NODE_ENV === 'prod';

//生产环境
gulp.task('prod', () => {
  gulp.src(SERVER_JS_FILE)
    .pipe(babel({ //babel 转义
      presets: ['@babel/env'],
      plugins: ['@babel/transform-runtime'],
    }))
    .pipe(rollup({  //tree-shaking 去除无引用代码
      input: './node-server/app.js',
      output: {
        file: 'app.js',
        format: 'cjs'
      },
    }))
    .pipe(uglify()) //压缩js
    .pipe(gulp.dest(BUILD));
});

//开发环境

gulp.task('dev', () => {
  gulp.src(SERVER_JS_FILE)
    .pipe(eslint({configFle: ".eslintrc"})) //eslint
    .pipe(eslint.format())

    .pipe(babel({ //babel 转义
      presets: ['@babel/env'],
      plugins: ['@babel/transform-runtime'],
    }))
    .pipe(gulp.dest(BUILD));
});

//清除
gulp.task('clean', () =>
  gulp.src([`${BUILD}/!webapp/**/*`])
    .pipe(clean())
);

//监听
gulp.task('watcher', () => {
  const watcher = gulp.watch(SERVER_JS_FILE, ['default']);
  watcher.on('change', event => {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
  });
});

//开始执行
gulp.task('default', ['clean'], () => {
  if (isProd) {
    runSequence('prod')
  } else {
    runSequence('watcher', 'dev');
  }
});
