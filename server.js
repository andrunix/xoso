'use strict';
const dotenv = require('dotenv');
dotenv.load();

const Hapi = require('hapi');
const server = new Hapi.Server();
const NunjucksHapi = require('nunjucks-hapi');
const Path = require('path');
const routes = require('./config/routes');

server.connection({ 
  port: 8000,
  routes: { cors: true }
});

server.register([require('inert'), require('vision')], (err) => {
  if (err) throw err;

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


