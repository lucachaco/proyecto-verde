#!/usr/bin/env bash

apt-get update

export LANGUAGE=en_US.UTF-8
export LANG=en_US.UTF-8
export LC_ALL=en_US.UTF-8
locale-gen en_US.UTF-8
dpkg-reconfigure locales

apt-get install -y git

apt-get install -y ruby ruby-dev make gcc

curl -sL https://deb.nodesource.com/setup | sudo bash -
apt-get install -y nodejs

gem install jekyll --no-rdoc --no-ri