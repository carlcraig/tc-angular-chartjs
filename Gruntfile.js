module.exports = function(grunt) {
  'use strict';

  require('load-grunt-tasks')(grunt);

  grunt.registerTask( 'build', [
    'jshint',
    'ngAnnotate:build',
    'uglify',
    'clean:tmp',
    'strip:build'
  ]);

  var config = {};

  config.pkg = grunt.file.readJSON('package.json');

  config.meta = {
    banner:
        '/**\n' +
            ' * <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n' +
            ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
            ' * Dual licensed with the Apache-2.0 or MIT license.\n' +
            ' */\n'
  };

  config.clean = {
    tmp: {
      src: ['dist/tmp']
    }
  };

  config.uglify = {
    options: {
      preserveComments: 'some',
      banner: '<%= meta.banner %>'
    },
    min: {
      options: {
        mangle: true
      },
      files: {
        'dist/tc-angular-chartjs.min.js': [
          'dist/tmp/tc-angular-chartjs.js'
        ]
      }
    },
    raw: {
      options: {
        compress: false,
        beautify: true,
        mangle: false
      },
      files: {
        'dist/tc-angular-chartjs.js': [
          'dist/tmp/tc-angular-chartjs.js'
        ]
      }
    }
  };

  config.strip = {
    build : {
      src : 'dist/**/*.js',
      options : {
        nodes : ['console'],
        inline : true
      }
    }
  };

  config.jshint = {
    src: {
      options: {
        jshintrc: '.jshintrc'
      },
      files: {
        src: [
          'src/tc-angular-chartjs.js',
          'Gruntfile.js'
        ]
      }
    },
    tests: {
      options: {
        jshintrc: 'test/.jshintrc'
      },
      files: {
        src: [
          'test/**/*.spec.js'
        ]
      }
    }
  };

  config.ngAnnotate = {
    options: {
    },
    build: {
      expand: true,
      cwd: 'src',
      src: [
        'tc-angular-chartjs.js'
      ],
      dest: 'dist/tmp'
    }
  };

  config.watch = {
    karma: {
      files: ['src/*.js', 'test/**/*.js'],
      tasks: ['karma:unit:run']
    }
  };

  config.karma = {
    unit: {
      configFile: 'test/karma.conf.js',
      background: true
    }
  };

  grunt.initConfig(config);

};