module.exports = {
  javascript: {
    files: [
      '<%= paths.themeAssets %>/js/**/*.js',
      '<%= paths.siteAssets %>/js/**/*.js'
    ],
    tasks: ['concat:javascript']
  },
  css: {
    files: [
      '<%= paths.themeAssets %>/css/**/*.scss',
      '<%= paths.siteAssets %>/css/**/*.scss',
    ],
    tasks: ['sass', 'concat:css']
  },
  images: {
    files: [
      '<%= paths.themeAssets %>/images/**/*',
      '<%= paths.siteAssets %>/images/**/*'
    ],
    tasks: ['copy:images']
  }
}
