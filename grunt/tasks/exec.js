module.exports = {
  serve: {
    cmd: 'bundle exec jekyll serve'
  },
  deploy: {
    cmd: 'bundle exec JEKYLL_ENV=production jekyll build && s3_website push'
  }
}
