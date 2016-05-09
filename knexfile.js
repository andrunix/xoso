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
   client: 'pg',
   connection: 'posgres://localhost/xoso_development',
   migrations: {
     directory: __diranme + '/db/migrations'
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

