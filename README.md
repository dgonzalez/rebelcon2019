# Kubernetes from the ground up for developers

Welcome to the workshop!

We are going to learn the basics of Kubernetes through exercises
and lectures from [Alex Knol](https://twitter.com/E_lexy?lang=en) and [David Gonzalez](https://twitter.com/dagonzago?lang=en).
By the end of this workshop, you should be able to deploy basic apps on a Kubernetes cluster and operate them.

Remember, this is a guided workshop: We will show you what to do step by step but, if you want to experiment, feel free to
do it so! We want you to get the best you can get out of it.

## Exercise 1: Setup a cluster on GKE or in your laptops

Before deploying any application, we need to create a cluster. At this stage we have two options:

- Setup a cluster in the room.
- Setup a cluster in Google Cloud Platform (using the free trial).

Those who want to setup the cluster in the room, follow Alex.
The rest, follow David.

### More info:
- Create a cluster on GCP: https://cloud.google.com/kubernetes-engine/docs/how-to/creating-a-cluster
- Create a single master cluster with Kubeadm: https://kubernetes.io/docs/setup/independent/create-cluster-kubeadm/

## Exercise 2: Get familiar with Kubectl

Here we are going to get familiar with Kube Control (kubectl): The tool used to operate Kubernetes.

### More info
- Install kubectl https://kubernetes.io/docs/tasks/tools/install-kubectl/
- kubectl documentation https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands

## Exercise 3: Deploy an app

The system that we are going to deploy into Kubernetes is composed of three micro-services:
- ISODateService: Converts a timestamp into a ISO formatted date
- UTCDateService: Converts a timestamp into a UTC formatted date
- Aggregator: Orchestrates the call from the frontend to the two backend services (ISODate and UTCDate) in order to format a timestamp

Alex and David will explain all the concepts you need to build the deployment descriptors required to run the app in Kubernetes.

All the source code you need is included in the folder `apps` but feel free to play with it.

### More Info:
- What is a deployment? https://kubernetes.io/docs/concepts/workloads/controllers/deployment/
- What is a service? How do I use it? https://kubernetes.io/docs/tutorials/kubernetes-basics/expose/expose-intro/

## Exercise 4: Deploy a new version of your app (scale up, scale down and deploy a new version)

On this part, we are going to learn how to deploy a new version of your applications. We will also learn how to scale
the cluster and your deployments in order to satisfy the demand.

### More Info:
- Create a Master and join workers using Kubeadm https://medium.com/@nikkikokitkar/creating-kubernetes-clusters-using-kubeadm-f46d331a2405
- Adding node pools to GKE https://cloud.google.com/kubernetes-engine/docs/how-to/node-pools
- Performing a zero downtime rolling update https://kubernetes.io/docs/tutorials/kubernetes-basics/update/update-intro/

## Excercise 5: The greedy neighbour

On this exercise we will deploy an application that keeps consuming more and more memory. This application is already
packed as a docker container and uploaded to Docker Hub but you can find the code in the `apps` folder.

First, we are going to let the app run wild. Then, we are going to patch it to keep it within reasonable boundaries.
This is a very familiar situation to every developer: a memmory leak that jeopardizes your system. Here we are going to see
how Kubernetes can turn a dreadful situation into a `not-so-bad` incident.
