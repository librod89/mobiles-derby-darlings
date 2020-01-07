# README

## Ruby version: 2.6.1

## Deployment instructions

1. sudo yum install -y git gcc openssl-devel readline-devel zlib-devel
2. git clone https://github.com/rbenv/rbenv.git ~/.rbenv
3. echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bash_profile
4. ~/.rbenv/bin/rbenv init
5. source ~/.bash_profile
6. eval "$(rbenv init -)"
7. type rbenv
8. git clone https://github.com/rbenv/ruby-build.git ~/.rbenv/plugins/ruby-build
9. rbenv install 2.6.2
10. rbenv global 2.6.2
11. ruby -v
12. gem install bundler
13. git clone git://github.com/dcarley/rbenv-sudo.git ~/.rbenv/plugins/rbenv-sudo
14. sudo yum groupinstall "Development tools" - to install gcc compiler
15. git clone #YOUREPOSITORY
16. cd #YOUREPOSITORY
17. bundle
18. bin/rails s -p 3001 -b 0.0.0.0 &
