/**
 * Created by ggm on 07-May-16.
 */
module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'src/css/',
          src: ['main.scss'],
          dest: 'dest/css/',
          ext: '.css'
        }]
      }
    },

    watch: {
      sass: {
        files: ['src/css/*.scss'],
        tasks: ['sass']

      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['sass']);
};
