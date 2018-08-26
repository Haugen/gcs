module.exports = function(grunt) {
	// Project configuration.
	grunt.initConfig({
		// Project metadata is imported into the Grunt config. This allows us to
		// refer to the values of properties within our package.json file.
		pkg: grunt.file.readJSON('package.json'),
		// Configuration for Sass plugin.
		sass: {
			dist: {
				files: {
					'style/style.css' : 'sass/style.scss',
					'style/second.css' : 'sass/second.scss'
				}
			}
		},
		// The Concat plugin concatinates files into one.
		concat: {
		  options: {
		    // Concatenated files will be joined on this string.
		    separator: '\n'
		  },
		  dist: {
		    // The files to concatenate. All css files in the styles folder.
				// They will be concatinated in alphabetic order if * is used.
		    src: ['style/*.css'],
		    // The location of the resulting concatinated css file. Using pkg.name
				// here as an example. Refers to the "name" property in package.json.
		    dest: 'style/prod/<%= pkg.name %>.css'
		  }
		},
		// Plugin for minifying css files.
		cssmin: {
		  target: {
				// Set the file generated from concat as target source.
		    src: '<%= concat.dist.dest %>',
				// The folder destination for our minified css file.
				dest: 'style/prod/<%= pkg.name %>.min.css'
		  }
		},
		// The Watch plugin Runs a task whenever files are added, changed or
		// deleted.
		watch: {
			css: {
				files: '**/*.scss',
				// The task to run when prompted, in this case "sass".
				tasks: ['sass']
			}
		}
	});

	// Load Grunt plugins.
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-concat');
	// Set the default task to "watch", so running "grunt" will be equal to
	// running "grunt watch"
	grunt.registerTask('default',['watch']);
}
