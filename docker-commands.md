git remote add origin https://jensBitAtWork@bitbucket.org/jensBitAtWork/test-docker-pl.git 

# upgrad docker machine
docker-machine upgrade default

#!/bin/bash
# Delete all containers
docker rm $(docker ps -a -q)
# Delete all images
docker rmi $(docker images -q)

docker exec node-codewithdan-1 node dbSeeder.js
docker-compose ps
docker-compose down


# in powershell
$env:APP_ENV="development"

# or in cmd
set APP_ENV="development"


1. Install Docker Toolbox (http://docker.com/toolbox).

2. Open the `Docker QuickStart Terminal`. After VirtualBox starts in the terminal navigate to the app's folder.

3. Run `docker-compose build`

4. Run `docker-compose up`

4. Navigate to http://192.168.99.100:3000 



docker-machine env default

& "C:\Program Files\Docker Toolbox\docker-machine.exe" env default | Invoke-Expression

docker build -f aspnetcore.dockerfile -t jensdocker/dotnet-preview:1.0.0-rc2-002697 .

docker run -d --name my-postgres -e POSTGRES_PASSWORD=password postgres

docker run -d -p 5000:5000 --link my-postgres:postgres jensdocker/aspnetcore


docker network create --driver bridge isolated_network


docker-machine env default

& "C:\Program Files\Docker Toolbox\docker-machine.exe" env default | Invoke-Expression

docker build -f aspnetcore.dockerfile -t jensdocker/dotnet-preview:1.0.0-rc2-002697 .

docker run -d --name my-postgres -e POSTGRES_PASSWORD=password postgres

docker run -d -p 5000:5000 --link my-postgres:postgres jensdocker/aspnetcore


docker network create --driver bridge isolated_network



# list docker machines
docker-machine ls 

# start docker machine
docker-machine start [machine name]

# stop docker machine
docker-machine stop [machine name]

# setup the environment to link a terminal into a machine
docker-machine env [machine name]

# docker machine ip
docker-machine ip [machine name]

# get the status of a machine
docker-machine status [machine name]


docker pull [image name]
docker run [image name]
docker images
dockers ps


# show docker commands
docker

# docker pulling images
docker pull hello-world

# docker run container
docker run hello-world


# show all containers 
docker ps -a

# remove a container
docker rm [id]

# remove an image
docker rmi 

# remove a volume 
docker rm -v last Container

docker rmi --force 03b 

docker pull kitematic/hello-world-nginx


docker run -p 80:80 kitematic/hello-world-nginx

docker stop d7


# creating a data volume
docker run -p 8080:3000 -v /var/www node

docker run -p 8080:3000 -v $(pwd):/var/www node


# got to working directory
* $(pwd) => current working directory
* is the directory that the volume in the container is actually gonna point to
* "node" is the name of the image here
docker run -p 8080:3000 -v $(pwd):/var/www -w "/var/www" node npm start

docker run -i -t -p 8080:5000 -v $(pwd):/app -w "/app" microsoft aspnet:1.0.0-rc1-update1-coreclr /bin/bash 


# delete container and also the volume
docker rm -v [containerID]



# find virtual folder 
docker inspect mycontainer


docker run -p 8080:3000 -v /var/www node



# notes 
* docker host runs the container 

# stop / remove all of Docker containers:
docker stop $(docker ps -a -q)
docker rm $(docker ps -a -q)

# delete all docker volumes
docker volume rm $(docker volume ls -qf dangling=true)

# remove docker images
FOR /f "tokens=*" %i IN ('docker ps -a -q') DO docker rm %i

# tag an image
docker build -t jenshoffmann/node 

docker build -tag jenshoffmann/node 




# example with asp net 

1) 
docker pull microsoft/aspnet:1.0.0-rc1-update1-coreclr

docker run -i -t -p 8080:5000 -v $(pwd):/app -w "/app" microsoft/aspnet:1.0.0-rc1-update1-coreclr /bin/bash

2 ) restore all packages
dnu restore 

3) fire up the castrol server
dnx web

4) go to http://192.168.99.100:8080


# building






