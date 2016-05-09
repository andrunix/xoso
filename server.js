'use strict';

const Hapi = require('hapi');
const server = new Hapi.Server();
const NunjucksHapi = require('nunjucks-hapi');
const Path = require('path');

server.connection({ port: 8000 });

const rootHandler = function(request, reply) {
  reply.view('index', { 
    title: 'xoso',
    message: 'good stuff is on the way...'
  } );
};

const aboutHandler = function (request, reply) {
	reply.view('about', { title: 'About' });
};

const contactHandler = function(request, reply) {
  reply.view('contact', {
    title: 'Contact',
    message: 'Welcome to the contact page'
  });
};

server.register([require('inert'), require('vision')], (err) => {
  if (err) throw err;

	server.views({
    engines: { njk: NunjucksHapi },
    path: Path.join(__dirname, '/templates') 
	});

	server.route({ method: 'GET', path: '/',      handler: rootHandler });
	server.route({ method: 'GET', path: '/about', handler: aboutHandler });
  server.route({ method: 'GET', path: '/contact', handler: contactHandler });
	server.route({ method: 'GET', path: '/{param*}', handler: { directory: { path: __dirname + '/public' } } });

});

server.start((err) => {
  if (err)
    throw(err);
  console.log('Server running at: ' + server.info.uri);
});


