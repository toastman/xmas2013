module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    autoprefixer: {
      css: {
        src: 'app/css/application.css',
        dest: 'app/css/application.pref.css'
      }
    },

    htmlmin: {                                     // Task
      dev: {                                       // Another target
        options: {                                 // Target options
          removeComments: true,
          removeOptionalTags: false,
          collapseWhitespace: true,
          removeRedundantAttributes:true
        },
        files: {
          'build/index.html': 'app/index.html'
        }
      }
    },

    sass: {                              // Task
      dist: {                            // Target
        options: {                       // Target options
          style: 'compact'
        },
        files: {                         // Dictionary of files
          'app/css/application.css': 'app/css/application.scss'       // 'destination': 'source'
        }
      }
    },

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        files: {
          'app/js/application.min.js': ['app/js/src/libs/*.js', 'app/js/src/*.js']
        }
      }
    },

    watch: {
      options: {
        livereload: true
      },
      html: {
        files: 'app/*.html'
      },
      css: {
        files: 'app/css/*.scss',
        tasks: ['sass', 'autoprefixer', 'cssmin']
      },
      js: {
        files: 'app/js/src/*.js',
        tasks: ['uglify']
      }
    },

    copy: {
      dev: {
        files: [
          {
            cwd: 'app/audio',
            src: '*',
            dest: 'build/audio',
            expand: true
          },
          {
            cwd: 'app/js',
            src: 'application.min.js',
            dest: 'build/js',
            expand: true
          },
          {
            cwd: 'app/css',
            src: 'application.min.css',
            dest: 'build/css',
            expand: true
          },
          {
            cwd: 'app/svg',
            src: ['**'],
            expand: true,
            dest: 'build/svg/'}
        ]
      }
    },

    cssmin: {
      css: {
        files: {
          'app/css/application.min.css': ['app/css/application.pref.css']
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);
  grunt.registerTask('dev', ['htmlmin','copy']);

};