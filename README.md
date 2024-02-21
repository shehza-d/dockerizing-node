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
   docker build -t package-name .
   ```

1. Running the image

   ```bash
   sudo docker run -it -p 8000:8000 package-name
   ```

   It will map 8000 port of container image to 8000 port of my machine

---

5.  On AWS ERC we will create repo 


<!-- https://www.youtube.com/watch?v=31k6AtW-b3Y -->

### [Taste of DevOps Tutorial](https://youtu.be/YOqUAfNtXFE)

### [Never install locally](https://youtu.be/J0NuOlA2xDc)

---

00:03 Introduction to the staff room session

02:22 Discussion on containerization and deployment

06:36 Setting up TypeScript configuration and basic Express application

08:28 Building and running the project with npm

12:19 How to copy package.json and package-lock.json in DevOps

14:59 Copying and organizing source code within containers and understanding Dockerfile usage

19:00 Package management and building distribution in DevOps

20:53 Running NPM and Docker commands

24:58 Containerized Node.js application with Docker image

27:11 Hosting code on a cloud and using image registries

31:12 Creating and configuring AWS IAM user and access keys

33:05 Setting up ADB and Docker build commands

36:54 Introduction to Elastic Container Service (ECS)

38:51 Setting up own clusters for staging and production

43:00 Using ECR for image management

44:59 Monitoring container health with health route

48:44 Deployment options and rolling updates

50:41 Handling bugs and scaling in DevOps

54:44 Autoscaling for ECS service

56:34 Auto scaling based on traffic and memory utilization

1:00:29 Setting up and monitoring task health status and target group

1:02:11 Setting up load balancer and target group for container management

1:06:07 Discussing Kubernetes deployment and scaling in DevOps

1:07:53 Managing zero running tasks in DevOps
