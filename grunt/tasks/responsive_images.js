module.exports = {
  default: {
    options: {
      engine: 'gm',
      sizes: [{ 
        name: 'thumb',
        width: 100,
        height: 100,
        aspectRatio: false
      }]
    },
    files: [{
      expand: true,
      src: ['**/*.{jpg,jpeg,png}', '!carousel/*.{jpg,jpeg}'],
      cwd: '<%= paths.siteAssets %>/images',
      dest: '<%= paths.siteAssets %>/images'
    }]
  }
}
