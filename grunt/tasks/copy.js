module.exports = {
  fonts: {
    files: [{
      expand: true,
      cwd: '<%= paths.bowerComponents %>',
      src: '<%= sources.fonts %>',
      dest: '<%= paths.siteAssetDest %>/fonts/',
      flatten: true
    }]
  },
  images: {
    files: [{
      expand: true,
      cwd: '<%= paths.bowerComponents %>/lightbox2/dist/images',
      src: ['**'],
      dest: '<%= paths.siteAssetDest %>/images/'
    }]
  }
}
