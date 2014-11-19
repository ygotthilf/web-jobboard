'use strict';

module.exports = function (grunt) {

	grunt.initConfig ({

		less : {
			dev : {
				src : 'client/app/app.less',
				dest : '.tmp/app/app.css',
				options : {
					paths : [
						'client/bower_components',
						'client/assets/styles'
					]
				}
			}
		},

		autoprefixer : {
			all : {
				files : {
					'.tmp/app/app.css' : '.tmp/app/app.css'
				}
			}
		},

		concat : {
			js : {
				src : 'client/app/**/*.js',
				dest : '.tmp/app/combined-scripts.js',
				options : {
					banner : '// Copyright EPITECH\n\'use strict\';\n\n'
				}
			}
		},

		watch : {
			js : {
				files : 'client/app/**/*.js',
				tasks : ['concat:js']
			},
			css : {
				files : 'client/**/*.less',
				tasks : ['css']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-autoprefixer');

	grunt.registerTask('css', ['less:dev', 'autoprefixer']);
}