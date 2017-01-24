module.exports = {
  default: {
    options: {
      style: 'expanded',
      includePaths: '<%= sources.sass %>',
    },
    files: {
      '<%= paths.siteAssetDest %>/css/style.css': '<%= paths.themeAssets %>/css/style.scss'
    }
  }
}
