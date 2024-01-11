#### docker image --help

| Commands  | Descriptions                                                               |
|-----------|----------------------------------------------------------------------------|
| *build*   | `Build an image from a Dockerfile`                                         |
| *history* | `Show the history of an image`                                             |
| *history* | `Show the history of an image`                                             |
| *import*  | `Import the contents from a tarball to create a filesystem image`          |
| *inspect* | `Display detailed information on one or more images`                       |
| *load*    | `Load an image from a tar archive or STDIN`                                |
| *ls*      | `List images`                                                              |
| *prune*   | `Remove unused images`                                                     |
| *pull*    | `Download an image from a registry`                                        |
| *push*    | `Upload an image to a registry`                                            |
| *rm*      | `Remove one or more images`                                                |
| *save*    | `Save one or more images to a tar archive (streamed to STDOUT by default)` |
| *tag*     | `Create a tag TARGET_IMAGE that refers to SOURCE_IMAGE`                    |

https://docs.docker.com/engine/reference/commandline/build/

#### CONSTRUCCIÓN DE UNA IMAGEN

```bash
docker build --tag app-cron .
docker build --no-cache --tag app-cron .
```

#### RE-CONSTRUCCIÓN DE UNA IMAGEN Y CAMBIO DE VERSION

```bash
docker image tag app-cron:1.0.0 app-cron:1.0.1
```

#### SUBIR UNA IMAGEN A REPOSITORIO PUBLICO

```bash
docker image tag app-cron dbacilio88/app-cron
docker image tag app-cron dbacilio88/app-cron
docker login
username: username
password: ********
```

#### CONSTRUCCIÓN DE UNA IMAGEN MULTIPLE PLATAFORMA

https://docs.docker.com/build/building/multi-platform/#getting-started

```bash
# Dependencias de desarrollo
FROM node:19.2-alpine3.16 as deps
WORKDIR /app
COPY package.json ./
RUN npm install

# Build y Tests
FROM node:19.2-alpine3.16 as builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run test

# Dependencias de Producción
FROM node:19.2-alpine3.16 as prod-deps
WORKDIR /app
COPY package.json ./
RUN npm install --prod

# Ejecutar la APP
FROM node:19.2-alpine3.16 as runner
WORKDIR /app
COPY --from=prod-deps /app/node_modules ./node_modules
COPY app.js ./
COPY tasks/ ./tasks
CMD [ "node", "app.js" ]

```

```bash
#/app /usr /lib
FROM --platform=$BUILDPLATFORM node:19-alpine3.16
LABEL authors="cbaciliod"
# logs
RUN echo "I am running on $BUILDPLATFORM, building for $TARGETPLATFORM"
# cd app
WORKDIR /app

#copy files package.json /app
COPY package.json ./

#install dependencies
RUN npm install

#copy files
COPY . .

#test running
RUN npm run test

#remove directories not needed in production
RUN rm -rf test && rm -rf node_modules

#install dependencies production
RUN npm install --prod

#command for image execution
CMD ["node", "index.js"]

```

```bash
docker buildx build --platform `
  linux/amd64,linux/arm64,linux/arm/v7 `
  --tag dbacilio88/app-cron:1.0.2 --push .

```
https://github.com/Klerith/docker-teslo-shop


