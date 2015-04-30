module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    fave_algo: 'sand',
    browserify: {
      sand: {
        files: {
          '<%= pkg.name %>.sand.max.js' : ['src/sand/unbrowserify.js']
        }
      },
      rocks: {
        files: {
          '<%= pkg.name %>.rocks.max.js' : ['src/rocks/unbrowserify.js']
        }
      }
    },
    uglify: {
      sand: {
        src: '<%= pkg.name %>.sand.max.js',
        dest: '<%= pkg.name %>.sand.min.js'
      },
      rocks: {
        src: '<%= pkg.name %>.rocks.max.js',
        dest: '<%= pkg.name %>.rocks.min.js'
      }
    },
    copy: {
      min: {
        src: '<%= pkg.name %>.<%= fave_algo %>.min.js',
        dest: '<%= pkg.name %>.min.js',
      },
      max: {
        src: '<%= pkg.name %>.<%= fave_algo %>.max.js',
        dest: '<%= pkg.name %>.max.js',
      }
    }
  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.loadTasks('grunt-tasks');
  grunt.registerTask('default', ['gentest-easy', 'browserify', 'uglify', 'copy']);
  //grunt.registerTask('default', ['gentest-easy', 'gentest', 'browserify', 'uglify']);
  
//  grunt.registerTask('default', ['browserify', 'uglify', 'copy']);

}
