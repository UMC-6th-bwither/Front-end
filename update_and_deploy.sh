#!/bin/bash
cd ~/bwither
git pull origin develop
sudo docker-compose up --build -d