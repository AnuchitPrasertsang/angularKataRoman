module.exports = function(config){
  config.set({

    basePath : './',

    files : [
      'app/js/angular.js',
      'app/js/angular-mocks.js',
      'app/js/*.js',
      'test/unit/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-jasmine'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
