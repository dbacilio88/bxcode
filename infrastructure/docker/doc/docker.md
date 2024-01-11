```bash
docker pull hello-world
docker container run hello-world
```

### docker image --help

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

### docker container --help

| Commands  | Descriptions                                                           |
|-----------|:-----------------------------------------------------------------------|
| *logs*    | `Fetch the logs of a container`                                        |
| *ls*      | `List containers`                                                      |
| *pause*   | `Pause all processes within one or more containers`                    |
| *port*    | `List port mappings or a specific mapping for the container`           |
| *prune*   | `Remove all stopped containers`                                        |
| *rename*  | `Rename a container`                                                   |
| *restart* | `Restart one or more containers`                                       |
| *rm*      | `Remove one or more containers`                                        |
| *run*     | `Create and run a new container from an image`                         |
| *start*   | `Start one or more stopped containers`                                 |
| *stats*   | `Display a live stream of container(s) resource usage statistics`      |
| *stop*    | `Stop one or more running containers`                                  |
| *top*     | `Display the running processes of a container`                         |
| *unpause* | `Unpause all processes within one or more containers`                  |
| *update*  | `Update configuration of one or more containers`                       |
| *wait*    | `Block until one or more containers stop, then print their exit codes` |

```bash
docker container ls -a
```

### BORRAR CONTENEDORES E IMÁGENES

```bash
docker container prune
docker container rm -f id1 id2
docker image prune
```

### PUBLISH AND DETACHED MODES (MODOS SEPARADOS)

```bash
docker container run -d docker/getting-started
docker container run docker/getting-started
docker container run -d -p 80:80 docker/getting-started
puerto-equipo:puerto-image
docker container run -d -p 80:80 docker/getting-started
docker container run -dp 8080:80 docker/getting-started
docker container stop 6058404ce7e6
```

### VARIABLES DE ENTORNO:

```bash
docker pull postgres
```

```bash
docker container run --name some-postgres -e POSTGRES_PASSWORD=admin -dp 5432:5432 postgres
```

### MULTIPLES INSTANCIAS DE CONTENEDORES:

```bash
docker container run `
    --name postgres-alpha `
    -e POSTGRES_PASSWORD=admin `
    -dp 5432:5432 postgres
```

```bash
docker container run `
    --name postgres-beta `
    -e POSTGRES_PASSWORD=admin `
    -dp 5433:5432 postgres:alpine3.18
```

### DOCKER LOGS

```bash
docker pull mariadb
```

```bash
docker pull mariadb:jammy
```

```bash
docker container run --detach --name mariadb-alpha `
    --env MARIADB_RANDOM_ROOT_PASSWORD=yes `
    -p 3306:3306 `
    mariadb:jammy
```

```bash
    docker container run --detach --name mariadb-alpha `
    --env MARIADB_USER=example-user `
    --env MARIADB_PASSWORD=my_cool_secret `
    --env MARIADB_ROOT_PASSWORD=my-secret-pw `
    mariadb:jammy
```

```bash
docker container logs -f id
docker container logs id
```

### VOLÚMENES Y REDES

Temas puntuales de la sección
Esta sección empieza a ponerse más interesante con los siguientes temas:

Terminal interactiva dentro del contenedor
Aplicaciones con múltiples contenedores
Redes
Volúmenes
Mapeo de directorios y relaciones
Montar un servidor Apache con PHPMyAdmin junto a MariaDB
Revisar el file system de alpine y node
Esta sección empieza a dejar bases para el uso de los contenedores a otro nivel.

##### TIPOS DE VOLÚMENES:

    - Hay 3 tipos de volúmenes, son usados para hacer persistente la data entre reinicios y levantamientos de imágenes.
    * Named Volumes: Este es el volumen más usado.
    * Bind volumes: Vincular volúmenes Bind volumes trabaja con paths absolutos Terminal
    * Anonymous Volumes: Volúmenes donde sólo se especifica el path del contenedor y Docker lo asigna automáticamente en el host

```bash
docker container run --name mariadb-alpha `
    --env MARIADB_USER=example-user `
    --env MARIADB_PASSWORD=example-password `
    --env MARIADB_ROOT_PASSWORD=example-root-password `
    --env MARIADB_DATABASE=world-db `
    -dp 3306:3306 `
    mariadb:jammy
```

##### Named Volumes

```bash
docker volume create world-db
docker volume inspect world-db
```

```json
[
  {
    "CreatedAt": "2023-08-09T18:24:53Z",
    "Driver": "local",
    "Labels": null,
    "Mountpoint": "/var/lib/docker/volumes/world-db/_data",
    "Name": "world-db",
    "Options": null,
    "Scope": "local"
  }
]
```

##### volume volume-equipo:volume-image

##### mariadb

```bash
docker container run `
    -dp 3306:3306 `
    --name world-db `
    --env MARIADB_USER=example-user `
    --env MARIADB_PASSWORD=user-password `
    --env MARIADB_ROOT_PASSWORD=root-password `
    --env MARIADB_DATABASE=world-db `
    --volume world-db:/var/lib/mysql `
    mariadb:jammy
```

##### phpmyadmin

```bash
docker container run `
    --name phpmyadmin `
    -d `
    -e PMA_ARBITRARY=1 `
    -p 8080:80 `
    phpmyadmin:5.2.0-apache
```

### Container Networking

#### Manage networks

### docker network --help

| Commands     | Descriptions                                           |
|--------------|:-------------------------------------------------------|
| *connect*    | `Connect a container to a network`                     |
| *create*     | `Create a network`                                     |
| *disconnect* | `Disconnect a container from a network`                |
| *inspect*    | `Display detailed information on one or more networks` |
| *ls*         | `List networks`                                        |
| *prune*      | `Remove all unused networks`                           |
| *rm*         | `Remove one or more networks`                          |

#### connect:

```bash
docker network connect world-app eef566927921
docker network connect world-app 98949bd00775
docker network inspect world-app
```

```json
[
  {
    "Name": "world-app",
    "Id": "071f166f13043917a7c1ab5ee8baa6dc3854dc4bc06b328c70dcfcfec64c4205",
    "Created": "2023-08-09T18:50:51.370419413Z",
    "Scope": "local",
    "Driver": "bridge",
    "EnableIPv6": false,
    "IPAM": {
      "Driver": "default",
      "Options": {},
      "Config": [
        {
          "Subnet": "172.18.0.0/16",
          "Gateway": "172.18.0.1"
        }
      ]
    },
    "Internal": false,
    "Attachable": false,
    "Ingress": false,
    "ConfigFrom": {
      "Network": ""
    },
    "ConfigOnly": false,
    "Containers": {
      "2ddf8017637f11961bfa63e239f60f7543c858eb6d3938bf59707aa1d83bec99": {
        "Name": "phpmyadmin",
        "EndpointID": "c47cb3966c6c613cd1864b7446cb1e2ca52c84109eb0b79f4672ef54be01ff6f",
        "MacAddress": "02:42:ac:12:00:02",
        "IPv4Address": "172.18.0.2/16",
        "IPv6Address": ""
      },
      "8cb4363b6c57bafdbcaba2c47cb0d109abc52a5aaaa075bf4c520ac81be87ab0": {
        "Name": "mariadb-alpha",
        "EndpointID": "151154e79a42410642b363ecdc492b75c8126b43f26b0f5d6f9c691408f25ba3",
        "MacAddress": "02:42:ac:12:00:03",
        "IPv4Address": "172.18.0.3/16",
        "IPv6Address": ""
      }
    },
    "Options": {},
    "Labels": {}
  }
]
```

#### mariadb with network

```bash
docker container run `
    -dp 3306:3306 `
    --name world-db `
    --env MARIADB_USER=example-user `
    --env MARIADB_PASSWORD=user-password `
    --env MARIADB_ROOT_PASSWORD=root-password `
    --env MARIADB_DATABASE=world-db `
    --volume world-db:/var/lib/mysql `
    --network world-app `
    mariadb:jammy
```

#### phpmyadmin  with network

```bash
docker container run `
    --name phpmyadmin `
    -d `
    -e PMA_ARBITRARY=1 `
    -p 8080:80 `
    --network world-app `
    phpmyadmin:5.2.0-apache
```

#### Bind Volumes

```bash
docker container run `
    --name nest-app `
    -w /app `
    -p 80:3000 `
    -v "$(pwd)":/app `
    node:16-alpine3.16 `
    sh -c "yarn install && yarn start:dev"
```

```bash
docker container run `
    --name nest-app `
    -w /app `
    -p 80:3000 `
    -v D:/2023/bacsystem/software/documentation/cursos/docker/resources/nest-graphql:/app `
    node:16-alpine3.16 `
    sh -c "yarn install && yarn start:dev"
```

```bash
docker exec -it 
```

#### REFORZAMIENTO DE LO APRENDIDO

```bash
docker container run `
    -d `
    --name postgres-db `
    -e POSTGRES_PASSWORD=123456 `
    -v postgres-db:/var/lib/postgresql/data `
    -p 5432:5432 `
    postgres:15.1
```

```bash
docker container run `
    --name pgAdmin `
    -e PGADMIN_DEFAULT_PASSWORD=123456 `
    -e PGADMIN_DEFAULT_EMAIL=superman@google.com `
    -dp 8080:80 `
    dpage/pgadmin4:6.17
```

```bash
docker network create postgres-net
```

```bash
docker network connect postgres-net 62f20e36fb62
docker network connect postgres-net aeb3629793cf
docker network inspect postgres-net
```

```json
[
  {
    "Name": "postgres-net",
    "Id": "2cda6b63a8b5572f226015806d7d30d7572423630a92dfb58c2563eb3dd6dcea",
    "Created": "2023-08-10T00:47:09.316788597Z",
    "Scope": "local",
    "Driver": "bridge",
    "EnableIPv6": false,
    "IPAM": {
      "Driver": "default",
      "Options": {},
      "Config": [
        {
          "Subnet": "172.19.0.0/16",
          "Gateway": "172.19.0.1"
        }
      ]
    },
    "Internal": false,
    "Attachable": false,
    "Ingress": false,
    "ConfigFrom": {
      "Network": ""
    },
    "ConfigOnly": false,
    "Containers": {
      "10e2d412fc9467e7202201135ae7dcd029970eea1e692a9cb9eee9d0fbfc4397": {
        "Name": "postgres-db",
        "EndpointID": "24568d7127a2492a165c9d43c3beaf0fca7adf18ddba5b2d7cf0f9911c0fda3c",
        "MacAddress": "02:42:ac:13:00:03",
        "IPv4Address": "172.19.0.3/16",
        "IPv6Address": ""
      },
      "4ee40aa32016c2d3688a9b3d36beb40379fa90208976f41eef02822c95a3d452": {
        "Name": "pgAdmin",
        "EndpointID": "7b2aecf2cfa1efe77a594207801b50cbcfec940ce968c50d2a4106e4b42ecd3b",
        "MacAddress": "02:42:ac:13:00:02",
        "IPv4Address": "172.19.0.2/16",
        "IPv6Address": ""
      }
    },
    "Options": {},
    "Labels": {}
  }
]

```

### DOCKER COMPOSE
#### VOLUMEN EXTERNO

```yml
version: '3'

services:
  db:
    container_name: postgres_database
    image: postgres:15.1
    volumes:
      - postgres-db:/var/lib/postgresql/data
    environment:
      - POSTGRES_PASSWORD=123456
  pgAdmin:
    depends_on:
      - db
    image: dpage/pgadmin4:6.17
    ports:
      - "8080:80"
    environment:
      - PGADMIN_DEFAULT_PASSWORD=123456
      - PGADMIN_DEFAULT_EMAIL=superman@google.com

volumes:
  postgres-db:
    external: true
```

```bash
docker compose up
docker compose up .
docker compose down

```
#### Bind Volumes
```yml
version: '3'

services:
  db:
    container_name: postgres_database
    image: postgres:15.1
    volumes:
      - ./volume/postgres:/var/lib/postgresql/data
    environment:
      - POSTGRES_PASSWORD=123456
  pgAdmin:
    depends_on:
      - db
    image: dpage/pgadmin4:6.17
    volumes:
      - ./volume/pgadmin:/var/lib/pgadmin
    ports:
      - "8080:80"
    environment:
      - PGADMIN_DEFAULT_PASSWORD=123456
      - PGADMIN_DEFAULT_EMAIL=superman@google.com
```

### MULTI CONTAINERS
https://gist.github.com/Klerith/0df06c9aaafeff39e8a6129f6e7d35d9

### MULTI STAGE BUILD

