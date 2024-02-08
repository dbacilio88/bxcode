<p align="center">
    <a >
        <img src="public/a10a2e18-cb89-4840-a991-244a6fcb5911.png" width="200" alt="Bacsystem Logo" />
    </a>
    <a href="http://nestjs.com/" target="blank">
        <img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" />
    </a>
</p>

<div align="center">

<a href="">![GitHub repo size](https://img.shields.io/github/repo-size/dbacilio88/node-mongo-redis-bq?style=flat)</a>
<a href="">![GitHub](https://img.shields.io/github/license/dbacilio88/node-mongo-redis-bq)</a>
<a href="">![GitHub language count](https://img.shields.io/github/languages/count/dbacilio88/node-mongo-redis-bq)</a>
<a href="">![GitHub top language](https://img.shields.io/github/languages/top/dbacilio88/node-mongo-redis-bq)</a>
<a href="">![Codecov](https://img.shields.io/codecov/c/github/dbacilio88/node-mongo-redis-bq)</a>
<a href="">![Coveralls branch](https://img.shields.io/coverallsCoverage/github/dbacilio88/node-mongo-redis-bq)</a>
<a href="">![GitHub all releases](https://img.shields.io/github/downloads/dbacilio88/node-mongo-redis-bq/total)</a>
<a href="">![Discord](https://img.shields.io/discord/738601834096099409)</a>
<a href="">![GitHub followers](https://img.shields.io/github/followers/dbacilio88)
</a>
</div>

<div align="center">

<a href="">![GitHub pull requests](https://img.shields.io/github/issues-pr/dbacilio88/node-mongo-redis-bq)</a>
<a href="">![GitHub closed pull requests](https://img.shields.io/github/issues-pr-closed/dbacilio88/node-mongo-redis-bq)</a>
<a href="">![GitHub issues](https://img.shields.io/github/issues/dbacilio88/node-mongo-redis-bq)</a>
<a href="">![GitHub contributors](https://img.shields.io/github/contributors/dbacilio88/node-mongo-redis-bq)</a>
<a href="">![GitHub last commit (by committer)](https://img.shields.io/github/last-commit/dbacilio88/node-mongo-redis-bq)</a>
</div>

## Description

[node-mongo-redis-bq](https://github.com/dbacilio88/node-mongo-redis-bq) Application TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Dev docker

```bash
# image docker build
$ docker compose -f docker-compose.dev.yml build 

# docker run container
$  docker compose -f docker-compose.dev.yml up 
$  docker compose -f docker-compose.dev.yml up -d

# docker stop and remove container, volumes
docker compose -f docker-compose.dev.yml down --volumes


```

## Prod docker

```bash
# image docker build
$ docker compose -f docker-compose.dev.yml build 

# docker run container
$  docker compose -f docker-compose.dev.yml up 
$  docker compose -f docker-compose.dev.yml up -d

# docker stop and remove container, volumes
docker compose -f docker-compose.dev.yml down --volumes
```

## Run docker container after Prod docker

```bash
# docker run container
$  docker compose up 
$  docker compose up -d

# docker stop and remove container, volumes
docker compose down --volumes
```


### MarkDown

https://www.markdownguide.org/basic-syntax/

## Stay in touch

- Author - [Christian bacilio](https://github.com/dbacilio88)

## License

Nest is [MIT licensed](LICENSE).
