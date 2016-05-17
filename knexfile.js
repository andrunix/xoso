const dotenv = require('dotenv');
dotenv.load();

module.exports = {
  test: {
    client: 'pg',
    connection: 'postgres://localhost/xoso_test',
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds/test'
    }
  },
  development: {
   client: 'mysql',
   connection: {
     host: '127.0.0.1',
     user: process.env.DB_USER,
     password: process.env.DB_PASSWORD,
     database: process.env.DB
   },
   migrations: {
     directory: __dirname + '/db/migrations'
   },
   seeds: {
    directory: __dirname + '/db/seeds/development'
   }
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds/production'
    }
  }
};


