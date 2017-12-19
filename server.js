'use strict';
const dotenv = require('dotenv');
dotenv.load();

const Hapi = require('hapi');
const server = new Hapi.Server();
const NunjucksHapi = require('nunjucks-hapi');
const routes = require('./config/routes');

server.connection({ 
  port: 8000,
  routes: { cors: true }
});

server.register([require('hapi-auth-cookie'),
                 require('inert'),
                 require('vision') ], (err) => {
  if (err) throw err;

  const cache = server.cache({
    segment: 'sessions',
    expiresIn: 3 * 24 * 60 * 60 * 1000
  });
  
  server.app.cache = cache;

  server.auth.strategy('session', 'cookie', true, {
    password: 'password-should-be-32-characters',
    cookie: 'sid-example',
    redirectTo: '/login',
    isSecure: false,
    validateFunc: function (request, session, callback) {
      cache.get(session.sid, (err, cached) => {
        if (err) {
          return callback(err, false);
        }
        if (!cached) {
          return callback(null, false);
        }
        return callback(null, true, cached.account);
      });
    }
  });  

  
	server.views({
    engines: { 
      njk: NunjucksHapi 
    },
    relativeTo: __dirname,
    path: './templates',
    layoutPath: './templates'
	});

	server.route(routes);
});


server.start((err) => {
  if (err)
    throw(err);
  console.log('Server running at: ' + server.info.uri);
});


