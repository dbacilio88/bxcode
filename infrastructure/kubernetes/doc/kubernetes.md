| component     | Description                                               |
|---------------|-----------------------------------------------------------| 
| `Pod`         | *Capa que se construye sobre los contenedores*            |
| `Service`     | *Permite comunicación con direcciones fijas*              |
| `Ingress`     | *Tráfico externo que viaja para adentro del cluster*      |
| `ConfigMap`   | *Configuraciones como variables de entorno*               |
| `Secrets`     | *Similar al ConfigMap pero secretos*                      |
| `Volume`      | *Mantener la data persistente*                            |
| `Deployment`  | *Planos o "BluePrints" de la construcción de un pod*      |
| `StatefulSet` | *Similar al "Deployment" pero para uso de bases de datos* |

# MINI KUBE

```
https://minikube.sigs.k8s.io/docs/
```

### KUBECTL

## Basic Kubernetes Commandskb

| command                                                                | description                                      |
|------------------------------------------------------------------------|--------------------------------------------------|
| `kubectl config view`                                                  | Para ver la configuración actual de kubectl      |
| `kubectl config get-contexts`                                          | Para enumerar todos los contextos disponibles    |
| `kubectl cluster-info`                                                 | información del cluster                          |
| `kubectl get nodes`                                                    | lista de los nodos del cluster                   |
| `kubectl get service`                                                  | lista de los servicios                           |
| `kubectl get pods`                                                     | lista de los pods                                |
| `kubectl get deployments`                                              | lista de deployments                             |
| `kubectl get namespaces`                                               | lista de namespaces                              |
| `kubectl get pods -n prueba`                                           | lista de los pods del namespace prueba           |
| `kubectl expose deployment first-deployment --port=80 --type=NodePort` | exponer un deployment                            |
| `kubectl describe pod apache1`                                         | información detallada del pod apache1            |
| `kubectl delete service hello-world`                                   | eliminar servicio                                |
| `kubectl delete deployment hello-world`                                | eliminar deployment                              |
| `kubectl scale --replicas=3 deployment prestashop -n prestashop`       | escalar a 3 replicas un deployment               |
| `kubectl apply -f deployment.yaml`                                     | aplicar el contenido del fichero deployment.yaml |
| `kubeadm token list`                                                   | listar los tokens                                |
| `kubectl config current-context`                                       | Para obtener el contexto actual de kubectl       |

```bash
$ minikube start
$ minikube version
$ kubectl version --shot
$ kubectl get all
```

### OUT KUBECTL

#### kubectl get all

| NAME                                    | READY | STATUS  | RESTARTS | AGE |
|-----------------------------------------|-------|---------|----------|-----|
| pod/postgres-deployment-cb955444f-rfmmw | 1/1   | Running | 0        | 15m |

| NAME                     | TYPE      | CLUSTER-IP     | EXTERNAL-IP | PORT(S)  | AGE |
|--------------------------|-----------|----------------|-------------|----------|-----|
| service/kubernetes       | ClusterIP | 10.96.0.1      | <none>      | 443/TCP  | 45m |
| service/postgres-service | ClusterIP | 10.111.187.169 | <none>      | 5432/TCP | 15m |

| NAME                                | READY | UP-TO-DATE | AVAILABLE | AGE |
|-------------------------------------|-------|------------|-----------|-----|
| deployment.apps/postgres-deployment | 1/1   | 1          | 1         | 15m |

| NAME                                          | DESIRED | CURRENT | READY | AGE |
|-----------------------------------------------|---------|---------|-------|-----|
| replicaset.apps/postgres-deployment-cb955444f | 1       | 1       | 1     | 15m |

## SECRETS

### Managing Secrets using Configuration File

#### 1. Create the Secret Convert the strings to base64:

```bash
$ echo -n 'admin' | base64
$ echo -n '1f2d1e2e67df' | base64
```

#### The output is similar to:

```textmate
 YWRtaW4=
 MWYyZDFlMmU2N2Rm
```

#### 2. Create the manifest:

```yml
apiVersion: v1
kind: Secret
metadata:
  name: postgres-secrets
type: Opaque
data:
  DB_USER: cG9zdGdyZXM=
  DB_PASSWORD: cG9zdGdyZXM=
```

#### 3. Create the Secret using kubectl apply:

```bash
$ kubectl apply -f postgres-secret.yml
```

```text
 secret/postgres-secrets created
```

#### 4. When you retrieve the Secret data

```bash
$ kubectl get secret 
````

#### The output is similar to:

| NAME             | TYPE   | DATA | AGE |
|------------------|--------|------|-----|
| postgres-secrets | Opaque | 2    | 28s |

#### 4.1 When you retrieve the Secret data

```bash
$ kubectl get secret postgres-secrets -o yaml
````

#### The output is similar to:

```yaml
apiVersion: v1
data:
  DB_PASSWORD: cG9zdGdyZXM=
  DB_USER: cG9zdGdyZXM=
kind: Secret
metadata:
  annotations:
    kubectl.kubernetes.io/last-applied-configuration: |
      {"apiVersion":"v1","data":{"DB_PASSWORD":"cG9zdGdyZXM=","DB_USER":"cG9zdGdyZXM="},"kind":"Secret","metadata":{"annotations":{},"name":"postgres-secrets","namespace":"default"},"type":"Opaque"}
  creationTimestamp: "2023-12-12T12:41:17Z"
  name: postgres-secrets
  namespace: default
  resourceVersion: "6698"
  uid: 7950fc20-fb8f-4f6d-9bae-d52897d82f72
type: Opaque
```

#### 5. Edit a Secret

#### 5.1. Encode the new password string:

```bash
$ echo -n 'postgres1' | base64
```

#### The output is similar to:

```textmate
 cG9zdGdyZXMx
```

#### 5.2. Update the data field with your new password string:

```yml
apiVersion: v1
kind: Secret
metadata:
  name: postgres-secrets
type: Opaque
data:
  DB_USER: cG9zdGdyZXM=
  DB_PASSWORD: cG9zdGdyZXMx
```

#### 5.3. Apply the manifest to your cluster:

```bash
$ kubectl apply -f postgres-secret.yml
```

```text
 secret/postgres-secrets configured
```

#### 6. Clean up

```bash
$ kubectl delete secret postgres-secrets
````

```text
 secret "postgres-secrets" deleted
```

# updating down

### CONFIG MAP

```yml
apiVersion: v1
kind: ConfigMap
metadata:
  name: postgres-config
data:
  DB_NAME: postgres
  DB_HOST: postgres-service
  DB_PORT: "5432"
```

### RUN CONFIG MAP

```bash
$ kubectl apply -f postgres-config.yml
```

## DEPLOYMENT AND SERVICES

```yml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: postgres-deployment
spec:
  replicas: 1
  selector:
    matchLabels:
      app: postgres
  template:
    metadata:
      labels:
        app: postgres
    spec:
      containers:
        - name: postgres
          image: postgres:15.1
          resources:
            limits:
              memory: "128Mi"
              cpu: "500m"
          ports:
            - containerPort: 5432
          env:
            - name: POSTGRES_PASSWORD
              valueFrom:
                secretKeyRef:
                  name: postgres-secrets
                  key: DB_PASSWORD
---
apiVersion: v1
kind: Service
metadata:
  name: postgres-service
spec:
  selector:
    app: postgres
  ports:
    - protocol: TCP
      port: 5432 #cualquier puerto
      targetPort: 5432

```

### RUN DEPLOYMENT AND SERVICES

```bash
$ kubectl apply -f postgres.yml
```

### DESCRIBE DEPLOYMENT

```bash
$ kubectl describe deployment.apps/postgres-deployment
```

### LOGS PODS

```bash
$ kubectl logs pod/postgres-deployment-cb955444f-rfmmw
```

### PODS

```bash
$ kubectl get pods
```

### OUT PODS

| NAME                                | READY | STATUS  | RESTARTS | AGE |
|-------------------------------------|-------|---------|----------|-----|
| postgres-deployment-cb955444f-rfmmw | 1/1   | Running | 0        | 11m |

```bash
$ echo dbacilio88@gmail.com | base64
```