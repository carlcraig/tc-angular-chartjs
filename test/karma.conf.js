module.exports = function (config) {
  config.set({

    basePath: '..',
    
    frameworks: ['jasmine'],

    plugins : ['karma-jasmine', 'karma-phantomjs-launcher'],

    files: [
      'bower_components/Chart.js/Chart.js',
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'src/tc-angular-chartjs.js',
      'test/unit/*.spec.js'
    ],

    browsers: ['PhantomJS', 'Chrome', 'Firefox'],

    logLevel: config.LOG_INFO,

    captureTimeout: 60000

  });
};
