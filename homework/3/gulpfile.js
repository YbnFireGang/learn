require('babel-polyfill');
const gulp = require('gulp'),
  babel = require('gulp-babel'),
  htmlMin = require('gulp-htmlmin'),
  clean = require('gulp-clean'),
  runSequence = require('run-sequence');

const BUILD = 'build';
let jsFile = ['src/**/*.js'],
  htmlFile = ['src'].map(file => file + '/**/*.html');

//html压缩
gulp.task('miniHtml', () =>
  gulp.src(htmlFile, {base: '.'})
    .pipe(htmlMin({
      removeComments: true,//清除HTML注释
      collapseWhitespace: true,//压缩HTML
      removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
      minifyJS: true,//压缩页面JS
      minifyCSS: true//压缩页面CSS
    }))
    .pipe(gulp.dest(BUILD))
);

//babel 转义
gulp.task('babel', () =>
  gulp.src(jsFile, {base: '.'})
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
const watcher = gulp.watch(jsFile.concat(htmlFile), ['default']);
watcher.on('change', function (event) {
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
});

gulp.task('default', ['clean'], () => {

  runSequence('babel', 'miniHtml');
});
