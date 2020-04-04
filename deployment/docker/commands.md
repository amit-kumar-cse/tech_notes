* Flags
    * D --debug
* image
    * **docker image build -t homepage/homepage:latest .**
    * docker image ls
    * inspect a docker image
        * docker image inspect <image-id>
* Run a docker image
    * **docker run -t image-name -p <outside docker>:<inside_docker>**
* Containers
    * Docker container ls -a
    * Remove all stopped containers
        * **docker container prune**
    * stop and remove all containers
        * **sudo docker container stop $(sudo docker ps -a -q)** 
            * check the containers after running this command with this command **sudo docker ps -a -q**
* login to a docker file
    * **docker exec -it <container-id> /bin/sh**
* docker-compose 
    * **docker-compose -f <docker-compose-file-name.yml> up**
* clean your docker 
    * **docker system prune -a**
