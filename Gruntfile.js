module.exports = function(grunt) {
  var path = require('path');
  var gruntTasksPath = '../grunt-tasks/';

  require('load-grunt-config')(grunt, {
    configPath: path.join(process.cwd(), gruntTasksPath + '/tasks'),

    loadGruntTasks: {
      config: require(gruntTasksPath + '/package.json'),
    },

    data: {
      sources: {
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
      }
    }
  });
};
