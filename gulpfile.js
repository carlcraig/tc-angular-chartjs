const gulp = require('gulp');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const umd = require('gulp-umd');
const pump = require('pump');
const del = require('del');
const banner = require('gulp-banner');
const ngAnnotate = require('gulp-ng-annotate');
const karma = require('karma').Server;
const runSequence = require('run-sequence');

const package = require('./package.json');
const date = new Date();
const license = `/**
 * ${package.name} - ${package.homepage}
 * Copyright (c) ${date.getFullYear()} Carl Craig
 * Dual licensed with the Apache-2.0 or MIT license.
 */
`;

gulp.task('watch', () => {
  return gulp.watch('./src/**/*', ['build']);
});

gulp.task('build', ['clean'], (cb) => {
  pump(
    [
      gulp.src('src/tc-angular-chartjs.js'),
      ngAnnotate(),
      umd({
        exports: function(file) {
          return 'TcChartjsFactory';
        },
        namespace: function(file) {
          return 'tcAngularChartjs';
        },
        dependencies: function(file) {
          return [
            {
              name: 'angular',
              amd: 'angular',
              cjs: 'angular',
              global: 'angular',
              param: 'angular'
            },
            {
              name: 'chart.js',
              amd: 'chart.js',
              cjs: 'chart.js',
              global: 'Chart',
              param: 'Chart'
            }
          ];
        }
      }),
      banner(license),
      gulp.dest('dist'),
      uglify({
        preserveComments: 'license'
      }),
      rename('tc-angular-chartjs.min.js'),
      gulp.dest('dist')
    ],
    cb
  );
});

gulp.task('clean', () => {
  return del([
    'dist/**/*'
  ]);
})

gulp.task('test', (cb) => {
  runSequence('test:angular-1-5', 'test:angular-1-2', cb);
});

gulp.task('test:angular-1-5', (cb) => {
  new karma({
    configFile: __dirname + '/test/angular-1-5/karma.conf.js',
    singleRun: true,
    browsers: ['PhantomJS']
  }, cb).start();
});

gulp.task('test:angular-1-2', (cb) => {
  new karma({
    configFile: __dirname + '/test/angular-1-2/karma.conf.js',
    singleRun: true,
    browsers: ['PhantomJS']
  }, cb).start();
});
