module.exports = {
  default: {
    options: {
      style: 'expanded',
      loadPath: '<%= sources.sass %>',
    },
    files: {
      '<%= paths.siteAssetDest %>/css/style.css': '<%= paths.themeAssets %>/css/style.scss'
    }
  }
}
