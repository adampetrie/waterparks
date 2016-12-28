## Setup

- Clone this repo
- Inside of `/ontario` run `npm install` and then `bundle install`
- Inside of `/ohio` run `npm install`
- Inside of `/theme` run 'bower install`
- Run `bundle exec grunt serve` inside of `/ontario` or `/ohio` to run the blog locally

## Making Changes

- cd into the `waterparks` folder
- Run `git pull` to get the latest changes
- cd into the site you are changing
- Make your changes
- Run `git status` to see a list of files that you have modified
- Run `git add FILENAME` where FILENAME is a modified file to 'stage' that file for commit. Alternatively, run `git add .` to stage all files in or below the current directory.
- Once all of your changes are staged, run `git commit -m 'Enter a detailed commit message'` to commit your changes
- Run `git push origin master` to push your changes to github.
- Run `bundle exec grunt deploy` to deploy your changes to production

## Grunt Tasks

The following commands are availble to grunt:
  - `bundle exec grunt serve` will build the site locally and serve it at http://127.0.0.1:4000 for you to view. Changes made will be reflected automatically
  - `bundle exec grunt deploy` will build the site for production and push it to S3. You should be able to see changes instantaneously after a deploy

