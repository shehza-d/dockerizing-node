# Dockerizing Node App

<p align="center">
<img src="https://skillicons.dev/icons?i=docker,nodejs" />
</p>

Dockerization, also known as “containerization,” refers to the process of packaging an application and its dependencies into a standardized container called a “Docker container.” Docker is an open-source platform that provides a lightweight and isolated environment for running applications.

## Steps

1. [Docker Installation](https://docs.docker.com/engine/install/ubuntu/)

1. Verify that the Docker Engine installation is successful by running the hello-world image.

   ```bash
   sudo docker run hello-world
   ```

1. Containerizing app

   ```bash
   docker build -t package-name ./us-folder-ka-path-jidher-Dockerfile-hai
   ```

1. Running the image

   ```bash
   sudo docker run -it -p 8000:8000 package-name
   ```

It will map 8000 port of container image to 8000 port of my machine
