var path = require('path');
var mozjpeg = require(path.join(process.cwd(), '../node_modules/imagemin-mozjpeg'));

module.exports = {
  jpg: {
    options: {
      optimizationLevel: 3,
      progressive: true,
      use: [mozjpeg()]
    },
    files: [{
      expand: true,
      cwd: '<%= paths.siteAssets %>/images',
      src: ['**/*.{jpg,jpeg,png}'],
      dest: '<%= paths.siteAssetDest %>/images/'
    },
    {
      expand: true,
      cwd: '<%= paths.bowerComponents %>lightbox2/dist/images',
      src: ['**'],
      dest: '<%= paths.siteAssetDest %>/images/'
    }]
  }
}
