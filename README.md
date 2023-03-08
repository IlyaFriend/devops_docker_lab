build image app 
```
sudo docker build -t app:v1 .
```

run with cpu and memory restrictions
```
sudo docker run -it --cpus=".8" --memory="600m" app:v1
```

creating another tag (didn't get why couldn't push old tag)
```
sudo docker tag v1 drugdocker/devops_lab1
```

pushing to docker hub

```
sudo docker push drugdocker/devops_lab1:latest
```