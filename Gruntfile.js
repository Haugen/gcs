const sass = require('dart-sass');
require('load-grunt-tasks')(grunt);

module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    // Project metadata is imported into the Grunt config. This allows us to
    // refer to the values of properties within our package.json file.
    pkg: grunt.file.readJSON('package.json'),
    // Configuration for Sass plugin.

    /**
     * grunt-contrib-sass commented out in favor for grunt-sass, which should
     * work better with compiling sass for Bootstrap 4.
     *
    sass: {
      manual_mapping_short: {
      // Because these src-dest file mappings are manually specified, every
      // time a new file is added or removed, the Gruntfile has to be updated.
        files: {
          'style/style.css' : 'sass/style.scss',
          'style/second.css' : 'sass/second.scss'
        }
      },
      manual_mapping: {
      // A longer version with 'src' and 'dest' keys specified.
        files: [
          { src: 'sass/style.scss', dest: 'style/style.css' },
          { src: 'sass/second.scss', dest: 'style/second.css' },
        ],
      },
      dynamic_mapping: {
      // Grunt will search for "**\/*.scss" under "sass/" when the
      // "dynamic_mapping" task runs and build the appropriate src-dest file
      // mappings then, so you don't need to update the Gruntfile when files
      // are added or removed.
        files: [
          {
            expand: true,       // Enable dynamic expansion.
            cwd: 'sass/',       // Src matches are relative to this path.
            src: ['**\/*.scss'], // Actual pattern(s) to match.
            dest: 'style/',     // Destination path prefix.
            ext: '.css',        // Dest filepaths will have this extension.
            extDot: 'first'     // Extensions in filenames begin after the first dot
          },
        ],
      }
    },
    */

    // The Concat plugin concatinates files into one.
    concat: {
      options: {
        // Concatenated files will be joined on this string.
        separator: '\n'
      },
      dist: {
        // The files to concatenate. All css files in the styles folder.
        // They will be concatinated in alphabetic order if * is used. For a
        // specific order an array can be used, like below. Here style.css
        // comes first, followed by all files ending with .css.
        src: [
          'style/style.css',
          'style/second.css'
        ],
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
        tasks: ['sass:dynamic_mapping']
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
  // A demo custom task. "sass" generates css files from scss files, then
  // "concat" concatinates all files into one, and lastly "cssmin" minifies
  // that newly generated concatinated file.
  grunt.registerTask('generate', ['sass:dynamic_mapping', 'concat', 'cssmin']);
}
