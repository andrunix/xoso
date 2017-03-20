[![Build Status](https://semaphoreci.com/api/v1/andrunix/xoso/branches/master/badge.svg)](https://semaphoreci.com/andrunix/xoso)

# xoso

* hapijs: http://hapijs.com/
* nunjucks: https://mozilla.github.io/nunjucks/
* sempaphoreci: https://semaphoreci.com
* knex: http://knexjs.org/
* bookshelf: http://bookshelfjs.org/
* ~~postgresql: http://www.postgresql.org/~~
* mysql
* toastr: https://github.com/CodeSeven/toastr
* redis: 

# Deployment

Setup according to this fantastic blog article:

http://niftylettuce.com/posts/automated-node-app-ci-graceful-zerodowntime-github-pm2/

# TDD with Node, Postgres and Knex
* http://mherman.org/blog/2016/04/28/test-driven-development-with-node

# Setup
* Postgres on Digital Ocean - https://www.digitalocean.com/community/tutorials/how-to-install-and-use-postgresql-on-ubuntu-14-04

## Installation

```
npm install
```

### Install knex globally to be able to run database migrations:

```
npm i knex -g
```

# Environment

Copy the file sample.env to .env and edit accordingly.


# Database

Start mysql and issue

```
CREATE DATABASE xoso_dev;
```


## Migrations

Migrations are stored in db/migrations. In order to run 

```
knex migrate:latest
```



