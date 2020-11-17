#!/bin/bash

export TERM=xterm

if [ ! -d 'logs' ]; then
    mkdir -p logs
    mkdir -p logs/nginx
    mkdir -p logs/app
fi
cp $HOME/docker/nginx.conf /etc/nginx/nginx.conf
nginx
tail -f logs/nginx/access.log -f logs/nginx/error.log
