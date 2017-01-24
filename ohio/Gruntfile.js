module.exports = function(grunt) {
  var path = require('path');
  var gruntTasksPath = '../grunt/';
  var bowerPath = '../theme/bower_components/'
  var cwd = process.cwd();

  require('load-grunt-config')(grunt, {
    configPath: path.join(process.cwd(), gruntTasksPath + '/tasks'),

    jitGrunt: {
      cwd: '..'
    },

    data: {
      paths: {
        themeRoot: '../theme',
        themeAssets: '../theme/_assets',
        bowerComponents: '../theme/bower_components',
        siteAssets: '_assets',
        siteAssetDest: 'public/assets', 
      },
      sources: {
        javascript: [
          bowerPath + 'jquery/dist/jquery.min.js',
          bowerPath + 'bootstrap-sass/assets/javascripts/bootstrap/dropdown.js',
          bowerPath + 'bootstrap-sass/assets/javascripts/bootstrap/collapse.js',
          bowerPath + 'bootstrap-sass/assets/javascripts/bootstrap/transition.js',
          bowerPath + 'lightbox2/dist/js/lightbox.min.js',
          bowerPath + 'slick-carousel/slick/slick.min.js',
          bowerPath + 'simpleWeather/jquery.simpleWeather.min.js',
          bowerPath + 'moment/min/moment.min.js',
          bowerPath + 'underscore/underscore-min.js',
          bowerPath + 'backbone/backbone.js',
          '../theme/_assets/js/main.js',
          '../theme/_assets/js/*/*.js'
        ],
        sass: [
          '_assets/css',
          bowerPath + 'bootstrap-sass/assets/stylesheets',
          bowerPath + 'weather-icons/sass',
          bowerPath + 'font-awesome/scss',
          bowerPath + 'slick-carousel/slick'
        ],
        css: [
          bowerPath + 'lightbox2/dist/css/lightbox.min.css',
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
