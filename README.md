# README

## Ruby version: 2.6.1

## Deployment instructions

$ sudo yum install -y git gcc openssl-devel readline-devel zlib-devel
$ git clone https://github.com/rbenv/rbenv.git ~/.rbenv
$ echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bash_profile
$ ~/.rbenv/bin/rbenv init
$ source ~/.bash_profile
$ eval "$(rbenv init -)"
$ type rbenv
$ git clone https://github.com/rbenv/ruby-build.git ~/.rbenv/plugins/ruby-build
$ rbenv install 2.6.2
$ rbenv global 2.6.2
$ ruby -v
$ gem install bundler
$ git clone git://github.com/dcarley/rbenv-sudo.git ~/.rbenv/plugins/rbenv-sudo
$ sudo yum groupinstall "Development tools" - to install gcc compiler
$ git clone #YOUREPOSITORY
$ cd #YOUREPOSITORY
$ bundle
$ bin/rails s -p 3001 -b 0.0.0.0 &