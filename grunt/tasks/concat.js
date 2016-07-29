module.exports = {
  javascript: {
    src: '<%= sources.javascript %>',
    dest: '<%= paths.siteAssetDest %>/js/main.min.js'
  },
  css: {
    src: '<%= sources.css %>',
    dest: '<%= paths.siteAssetDest %>/css/style.min.css'
  }
}
