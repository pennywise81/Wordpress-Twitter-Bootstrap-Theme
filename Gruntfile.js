module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    uglify: {
      stickyfooter: {
        options: {
          sourceMap: true,
          sourceMapName: 'js/min/sticky_footer.min.js.map'
        },
        files: {
          'js/min/sticky_footer.min.js': ['js/sticky_footer.js']
        }
      }
    },

    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'css/non-responsive.css': 'scss/non-responsive.scss',
          'css/admin/customizer.css': 'scss/admin/customizer.scss',
          'style.css': 'scss/style.scss'
        }
      }
    },

    watch: {
      css: {
        files: ['**/*.scss'],
        tasks: ['sass']
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
};