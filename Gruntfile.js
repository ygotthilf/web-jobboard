// Generated on 2014-10-28 using generator-angular-fullstack 2.0.13
'use strict';

module.exports = function (grunt) {

  // Load grunt tasks automatically, when needed
  require('jit-grunt')(grunt, {
    express: 'grunt-express-server',
    useminPrepare: 'grunt-usemin',
    ngtemplates: 'grunt-angular-templates',
    protractor: 'grunt-protractor-runner'
  });

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Define the configuration for all the tasks
  grunt.initConfig({

    // Project settings
    pkg: grunt.file.readJSON('package.json'),
    project: {
      client: 'client',
      server: 'server',
      dist: 'dist',
      tmp: '.tmp'
    },
    express: {
      options: {
        port: process.env.PORT || 9000
      },
      dev: {
        options: {
          script: '<%= project.server %>/app.js',
          debug: true
        }
      },
      prod: {
        options: {
          script: '<%= project.dist %>/server/app.js'
        }
      }
    },
    open: {
      server: {
        url: 'http://localhost:<%= express.options.port %>'
      }
    },
    watch: {

      mochaTest: {
        files: ['<%= project.server %>/**/*.spec.js'],
        tasks: ['env:test', 'mochaTest']
      },
      jsTest: {
        files: [
          '<%= project.client %>/app/**/*.spec.js',
          '<%= project.client %>/app/**/*.mock.js'
        ],
        tasks: ['newer:jshint:all', 'karma']
      },
      script: {
        files: [
          '<%=  project.client %>/app/**/*.js',
        ],
        tasks: ['newer:jshint:all', 'concat:scripts']
      },
      less: {
        files: [
          '<%= project.client %>/app/**/*.less',
          '<%= project.client %>/assets/styles/**/*.less'],
        tasks: ['less', 'autoprefixer']
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      livereload: {
        files: [
          '<%= project.tmp %>/app/**/*.css',
          '<%= project.client %>/**/*.html',
          '<%= project.tmp %>/app/**/*.js',
          '!{<%= project.tmp %>,<%= project.client %>}app/**/*.spec.js',
          '!{<%= project.tmp %>,<%= project.client %>}/app/**/*.mock.js',
          '<%= project.client %>/assets/images/{,*//*}*.{png,jpg,jpeg,gif,webp,svg}'
        ],
        options: {
          livereload: true
        }
      },
      express: {
        files: [
          '<%= project.server %>/**/*.{js,json}'
        ],
        tasks: ['jshint:server','express:dev', 'wait'],
        options: {
          livereload: true,
          nospawn: true //Without this option specified express won't be reloaded
        }
      }
    },

    concat :{
      scripts : {

        options : {
          banner : '\'use strict\';\n\n',
          process : function (src, filepath){
            return '/* '+filepath+' */\n(function(){\n\n'+src+'\n\n})();';
          }
        },
        src: [
          '<%=  project.client %>/app/app.js',
          '<%=  project.client %>/app/**/*.js',
          '!{<%= project.tmp %>,<%= project.client %>}/app/**/*.spec.js',
          '!{<%= project.tmp %>,<%= project.client %>}/app/**/*.mock.js',
        ],
        dest: '<%= project.tmp %>/app/combined-scripts.js'
      }
    },

    // Make sure code styles are up to par and there are no obvious mistakes
    jshint: {
      options: {
        jshintrc: '<%= project.client %>/.jshintrc',
        reporter: require('jshint-stylish'),
        force : true
      },
      server: {
        options: {
          jshintrc: '<%= project.server %>/.jshintrc'
        },
        src: [
          '<%= project.server %>/**/*.js',
          '!server/**/*.spec.js'
        ]
      },
      serverTest: {
        options: {
          jshintrc: '<%= project.server %>/.jshintrc-spec'
        },
        src: ['<%= project.server %>/**/*.spec.js']
      },
      all: [
        '<%= project.client %>/app/**/*.js',
        '!<%= project.client %>/app/**/*.spec.js',
        '!<%= project.client %>/app/**/*.mock.js'
      ],
      test: {
        src: [
          '<%= project.client %>/app/**/*.spec.js',
          '<%= project.client %>/app/**/*.mock.js'
        ]
      }
    },

    // Empties folders to start fresh
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '<%= project.tmp %>',
            '<%= project.dist %>/*',
            '!<%= project.dist %>/.git*',
            '!<%= project.dist %>/Procfile'
          ]
        }]
      },
      server: '<%= project.tmp %>'
    },

    // Add vendor prefixed styles
    autoprefixer: {
      options: {
        browsers: ['last 1 version']
      },
      dist: {
        files: [{
          expand: true,
          cwd: '<%= project.tmp %>',
          src: '{,*/}*.css',
          dest: '<%= project.tmp %>'
        }]
      }
    },


    // Renames files for browser caching purposes
    rev: {
      dist: {
        files: {
          src: [
            '<%= project.dist %>/public/{,*/}*.js',
            '<%= project.dist %>/public/{,*/}*.css',
            '<%= project.dist %>/public/assets/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
            '<%= project.dist %>/public/assets/fonts/*'
          ]
        }
      }
    },

    // Reads HTML for usemin blocks to enable smart builds that automatically
    // concat, minify and revision files. Creates configurations in memory so
    // additional tasks can operate on them
    useminPrepare: {
      html: ['<%= project.client %>/index.html'],
      options: {
        dest: '<%= project.dist %>/public'
      }
    },

    // Performs rewrites based on rev and the useminPrepare configuration
    usemin: {
      html: ['<%= project.dist %>/public/{,*/}*.html'],
      css: ['<%= project.dist %>/public/{,*/}*.css'],
      js: ['<%= project.dist %>/public/{,*/}*.js'],
      options: {
        assetsDirs: [
          '<%= project.dist %>/public',
          '<%= project.dist %>/public/assets/images'
        ],
        // This is so we update image references in our ng-templates
        patterns: {
          js: [
            [/(assets\/images\/.*?\.(?:gif|jpeg|jpg|png|webp|svg))/gm, 'Update the JS to reference our revved images']
          ]
        }
      }
    },

    // The following *-min tasks produce minified files in the dist folder
    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= project.client %>/assets/images',
          src: '{,*/}*.{png,jpg,jpeg,gif}',
          dest: '<%= project.dist %>/public/assets/images'
        }]
      }
    },

    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= project.client %>/assets/images',
          src: '{,*/}*.svg',
          dest: '<%= project.dist %>/public/assets/images'
        }]
      }
    },

    // Allow the use of non-minsafe AngularJS files. Automatically makes it
    // minsafe compatible so Uglify does not destroy the ng references
    ngAnnotate: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= project.tmp %>/concat',
          src: '*/**.js',
          dest: '<%= project.tmp %>/concat'
        }]
      }
    },

    // Package all the html partials into a single javascript payload
    ngtemplates: {
      options: {
        // This should be the name of your apps angular module
        module: 'webJobboardApp',
        htmlmin: {
          collapseBooleanAttributes: true,
          collapseWhitespace: true,
          removeAttributeQuotes: true,
          removeEmptyAttributes: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true
        },
        usemin: 'app/app.js'
      },
      main: {
        cwd: '<%= project.client %>',
        src: ['app/**/*.html'],
        dest: '<%= project.tmp %>/templates.js'
      },
      tmp: {
        cwd: '<%= project.tmp %>',
        src: ['app/**/*.html'],
        dest: '<%= project.tmp %>/tmp-templates.js'
      }
    },

    // Copies remaining files to places other tasks can use
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= project.client %>',
          dest: '<%= project.dist %>/public',
          src: [
            '*.{ico,png,txt}',
            '.htaccess',
            'bower_components/**/*',
            'assets/images/{,*/}*.{webp}',
            'assets/fonts/**/*',
            'index.html'
          ]
        }, {
          expand: true,
          cwd: '<%= project.tmp %>/images',
          dest: '<%= project.dist %>/public/assets/images',
          src: ['generated/*']
        }, {
          expand: true,
          dest: '<%= project.dist %>',
          src: [
            'package.json',
            'server/**/*'
          ]
        }]
      },
      styles: {
        expand: true,
        cwd: '<%= project.client %>',
        dest: '.tmp/',
        src: ['{app,components}/**/*.css']
      }
    },

    // Run some tasks in parallel to speed up the build process
    concurrent: {
      server: [
        'less',
        'concat:scripts'
      ],
      test: [
        'less',
        'concat:scripts'
      ],
      dist: [
        'less',
        'concat:scripts',
        'imagemin',
        'svgmin'
      ]
    },

    // Test settings
    karma: {
      unit: {
        configFile: 'karma.conf.js',
        singleRun: true
      }
    },

    mochaTest: {
      options: {
        reporter: 'spec'
      },
      src: ['server/**/*.spec.js']
    },

    protractor: {
      options: {
        configFile: 'protractor.conf.js'
      },
      chrome: {
        options: {
          args: {
            browser: 'chrome'
          }
        }
      }
    },

    env: {
      test: {
        NODE_ENV: 'test'
      },
      prod: {
        NODE_ENV: 'production'
      },
      all: {}
    },

    // Compiles Less to CSS
    less: {
      options: {
        paths: [
          '<%= project.client %>/bower_components',
          '<%= project.client %>/app',
          '<%= project.client %>/assets/styles'
        ]
      },
      server: {
        files: {
          '<%= project.tmp %>/app/app.css' : '<%= project.client %>/app/app.less'
        }
      },
    },
  });

  // Used for delaying livereload until after server has restarted
  grunt.registerTask('wait', function () {
    grunt.log.ok('Waiting for server reload...');

    var done = this.async();

    setTimeout(function () {
      grunt.log.writeln('Done waiting!');
      done();
    }, 1500);
  });

  grunt.registerTask('express-keepalive', 'Keep grunt running', function() {
    this.async();
  });

  grunt.registerTask('serve', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'env:all', 'env:prod', 'express:prod', 'wait', 'open', 'express-keepalive']);
    }

    grunt.task.run([
      'clean:server',
      'env:all',
      'concurrent:server',
      'autoprefixer',
      'express:dev',
      'wait',
      'open',
      'watch'
    ]);
  });

  grunt.registerTask('server', function () {
    grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
    grunt.task.run(['serve']);
  });

  grunt.registerTask('test', function(target) {
    if (target === 'server') {
      return grunt.task.run([
        'env:all',
        'env:test',
        'mochaTest'
      ]);
    }

    else if (target === 'client') {
      return grunt.task.run([
        'clean:server',
        'env:all',
        'concurrent:test',
        'autoprefixer',
        'karma'
      ]);
    }

    else if (target === 'e2e') {
      return grunt.task.run([
        'clean:server',
        'env:all',
        'env:test',
        'concurrent:test',
        'autoprefixer',
        'express:dev',
        'protractor'
      ]);
    }

    else grunt.task.run([
      'test:server',
      'test:client'
    ]);
  });

  grunt.registerTask('build', [
    'clean:dist',
    'concurrent:dist',
    'useminPrepare',
    'autoprefixer',
    'ngtemplates',
    'concat:generated',
    'ngAnnotate',
    'copy:dist',
    'cssmin',
    'uglify',
    'rev',
    'usemin'
  ]);

  grunt.registerTask('default', [
    'newer:jshint',
    'test',
    'build'
  ]);
};
