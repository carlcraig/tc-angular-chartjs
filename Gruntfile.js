module.exports = function(grunt) {
  "use strict";

  grunt.loadNpmTasks( 'grunt-contrib-jshint' );
  grunt.loadNpmTasks( 'grunt-contrib-uglify' );
  grunt.loadNpmTasks( 'grunt-contrib-clean' );
  grunt.loadNpmTasks( 'grunt-strip' );
  grunt.loadNpmTasks( 'grunt-ngmin' );
  grunt.loadNpmTasks( 'grunt-karma' );
  grunt.loadNpmTasks( 'grunt-contrib-watch' );

  grunt.registerTask( 'build', [
    'jshint',
    'ngmin:build',
    'uglify',
    'clean:tmp',
    'strip:build'
  ]);

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    meta: {
      banner:
        '/**\n' +
          ' * <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n' +
          ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
          ' * Dual licensed with the Apache-2.0 or MIT license.\n' +
          ' */\n'
    },

    /**
     * Clean
     */
    clean: {
      tmp: {
        src: ["dist/tmp"]
      }
    },

    /**
     * Uglify
     */
    uglify: {
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
    },

    /**
     * Strip
     */
    strip : {
      build : {
        src : 'dist/**/*.js',
        options : {
          nodes : ['console'],
          inline : true
        }
      }
    },

    /**
     * JSHint
     */
    jshint: {
      options: {
        curly:true,
        eqeqeq:true,
        immed:true,
        latedef:true,
        newcap:true,
        noarg:true,
        sub:true,
        boss:true,
        eqnull:true,
        evil:true,
        globals:{}
      },
      all:['src/tc-angular-chartjs.js', 'Gruntfile.js','test/**/*.js']
    },

    /**
     * NGMIN
     */
    ngmin: {
      build: {
        expand: true,
        cwd: 'src',
        src: [
          'tc-angular-chartjs.js'
        ],
        dest: 'dist/tmp'
      }
    },

    /**
     * Watch. Run karma watcher with
     * grunt karma:unit:start watch
     */
    watch: {
      karma: {
        files: ['src/*.js', 'test/**/*.js'],
        tasks: ['karma:unit:run']
      }
    },

    /**
     * Karma
     */
    karma: {
      unit: {
        configFile: 'test/karma.conf.js',
        background: true
      }
    }

  });
};