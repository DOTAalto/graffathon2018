from fabric.api import *
from fabric.contrib.project import *

env.hosts = ['dot@kapsi.fi']

def deploy():
    local('gulp --production')
    rsync_project(local_dir='./build/', remote_dir='/home/users/dot/sites/www.graffathon.fi/www/2017/', delete=True)

def github():
    local('git checkout master')
    local('gulp --production')
    local('git checkout gh-pages')
    local('rm -rf README.md fabfile.py fabfile.pyc gulp gulpfile.babel.js node_modules npm-debug.log package.json src')
    local('mv build/* .')
    local('git add .')
    local('git commit -m \'Build\'')
    local('git push')
    local('git checkout master')
    #rsync_project(local_dir='./build/', remote_dir='/home/users/dot/sites/www.graffathon.fi/www/2017/', delete=True)
