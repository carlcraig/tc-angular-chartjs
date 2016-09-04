module.exports = function (config) {
  config.set({

    basePath: '../..',
    
    frameworks: ['jasmine'],

    plugins : ['karma-jasmine', 'karma-phantomjs-launcher'],

    files: [
      'node_modules/chart.js/dist/Chart.js',
      'test/angular-1-5/node_modules/angular/angular.js',
      'test/angular-1-5/node_modules/angular-mocks/angular-mocks.js',
      'src/tc-angular-chartjs.js',
      'test/unit/*.spec.js'
    ],

    browsers: ['PhantomJS'],

    logLevel: config.LOG_INFO,

    captureTimeout: 60000,
    
    client: {
      captureConsole: true
    }

  });
};
