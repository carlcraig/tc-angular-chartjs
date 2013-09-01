basePath = '..';

files = [
  JASMINE,
  JASMINE_ADAPTER,
  'bower_components/Chart.js/Chart.js',
  'bower_components/angular/angular.js',
  'bower_components/angular-mocks/angular-mocks.js',
  'src/*.js',
  'test/*.spec.js'
];

exclude = [];

reporters = ['dots'];

colors = true;

logLevel = LOG_INFO;

autoWatch = false;

browsers = ['PhantomJS', 'Chrome', 'Firefox'];

captureTimeout = 60000;

singleRun = false;