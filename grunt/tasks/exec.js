module.exports = {
  serve: {
    cmd: 'jekyll serve'
  },
  deploy: {
    cmd: 'JEKYLL_ENV=production jekyll build && s3_website push'
  }
}
