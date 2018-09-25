require('babel-polyfill');
const gulp = require('gulp'),
  babel = require('gulp-babel'),
  htmlMin = require('gulp-htmlmin'),
  imageMin = require('gulp-imagemin'),
  clean = require('gulp-clean'),
  runSequence = require('run-sequence'),
  cleanCSS = require('gulp-clean-css');

const BUILD = 'build',
  SRC_BASE = '.';

let jsFile = ['config', 'controller', 'database', 'model', 'public', 'views']
    .map(file => file + '/**/*.js'),
  cssFile = ['public'].map(file => file + '/**/*.css'),
  imgFile = ['public/img'].map(file => file + '/**/*'),
  htmlFile = ['views'].map(file => file + '/**/*.html');

jsFile = jsFile.concat(['./index.js']);

//压缩css
gulp.task('miniCss', () => {
  return gulp.src(cssFile, {base: SRC_BASE})
    .pipe(cleanCSS())
    .pipe(gulp.dest(BUILD));
});

//html压缩
gulp.task('miniHtml', function () {
  gulp.src(htmlFile, {base: SRC_BASE})
    .pipe(htmlMin({
      removeComments: true,//清除HTML注释
      collapseWhitespace: true,//压缩HTML
      removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
      minifyJS: true,//压缩页面JS
      minifyCSS: true//压缩页面CSS
    }))
    .pipe(gulp.dest(BUILD));
});

//babel 转义
gulp.task('babel', () => {
  return gulp.src(jsFile, {base: SRC_BASE})
    .pipe(babel({
      presets: ['@babel/env'],
      plugins: ['@babel/transform-runtime'],
    }))
    .pipe(gulp.dest(BUILD));
});

//压缩图片
gulp.task('miniImage', function () {
  gulp.src(imgFile, {base: SRC_BASE})
    .pipe(imageMin())
    .pipe(gulp.dest(BUILD));
});

//清除
gulp.task('clean', function () {
  return gulp.src(BUILD)
    .pipe(clean())
});


//监听
const watcher = gulp.watch(jsFile.concat(htmlFile), ['default']);
watcher.on('change', function (event) {
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
});

gulp.task('default', () => {
  runSequence('clean',
    ['babel', 'miniHtml', 'miniCss', 'miniImage'])
});
