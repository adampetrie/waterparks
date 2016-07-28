module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  var sources = {
    javascript: [
      'bower_components/jquery/dist/jquery.min.js',
      'bower_components/bootstrap-sass/assets/javascripts/bootstrap/dropdown.js',
      'bower_components/bootstrap-sass/assets/javascripts/bootstrap/collapse.js',
      'bower_components/bootstrap-sass/assets/javascripts/bootstrap/transition.js',
      'bower_components/lightbox2/dist/js/lightbox.min.js',
      'bower_components/slick-carousel/slick/slick.min.js',
      'bower_components/simpleWeather/jquery.simpleWeather.min.js',
      'bower_components/moment/min/moment.min.js',
      'bower_components/underscore/underscore-min.js',
      'bower_components/backbone/backbone.js',
      '_assets/js/main.js',
      '_assets/js/*/*.js'
    ],
    sass: [
      'bower_components/bootstrap-sass/assets/stylesheets',
      'bower_components/weather-icons/sass',
      'bower_components/font-awesome/scss'
    ],
    css: [
      'bower_components/lightbox2/dist/css/lightbox.min.css',
      'bower_components/slick-carousel/slick/slick.css',
      'public/assets/css/style.css'
    ],
    fonts: [
      'bootstrap-sass/assets/fonts/bootstrap/*',
      'weather-icons/font/*',
      'font-awesome/fonts/*'
    ]
  };

  grunt.initConfig({
    sass: {
      dev: {
        options: {
          style: 'expanded',
          loadPath: sources.sass,
        },
        files: {
          'public/assets/css/style.css': '_assets/css/style.scss'
        },
      },
    },

    concat: {
      javascript: {
        src: sources.javascript,
        dest: 'public/assets/js/main.min.js'
      },
      css: {
        src: sources.css,
        dest: 'public/assets/css/style.css'
      }
    },

    copy: {
      fonts: {
        files: [{
          expand: true,
          cwd: 'bower_components/',
          src: sources.fonts,
          dest: 'public/assets/fonts/',
          flatten: true
        }]
      },
      images: {
        files: [{
          expand: true,
          cwd: '_assets/images',
          src: ['**'],
          dest: 'public/assets/images/'
        },
        {
          expand: true,
          cwd: 'bower_components/lightbox2/dist/images',
          src: ['**'],
          dest: 'public/assets/images/'
        }]
      }
    },

    uglify: {
      javascript: {
        files: {
          'public/assets/js/main.min.js': sources.javascript
        }
      }
    },

    watch: {
      javascript: {
        files: ['_assets/js/**/*.js'],
        tasks: ['concat:javascript']
      },
      css: {
        files: ['_assets/css/**/*.scss'],
        tasks: ['build_css']
      }
    },

    exec: {
      serve: {
        cmd: 'jekyll serve'
      },
      deploy: {
        cmd: 'JEKYLL_ENV=production jekyll build && s3_website push'
      }
    },

    concurrent: {
      serve: ['exec:serve', 'watch'],
      options: {
          logConcurrentOutput: true
      }
    }
  });

  // Default task(s).
  grunt.registerTask('build_css', ['sass:dev', 'concat:css'])
  grunt.registerTask('serve', ['sass:dev', 'copy', 'concat', 'concurrent:serve']);
  grunt.registerTask('deploy', ['sass:dev', 'copy', 'uglify', 'concat:css', 'exec:deploy']);

};
