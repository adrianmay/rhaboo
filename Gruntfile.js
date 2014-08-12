module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        banner: '"use strict"',
      },
      dist: {
        src: ['src/*.js'],
        dest: '<%= pkg.name %>.max.js',
      },
    },
    uglify: {
      build: {
        src: '<%= pkg.name %>.max.js',
        dest: '<%= pkg.name %>.min.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['concat', 'uglify']);

}
