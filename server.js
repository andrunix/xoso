'use strict';

const Hapi = require('hapi');
const server = new Hapi.Server();

server.connection({ port: 8000 });

const rootHandler = function(request, reply) {
	reply.file(__dirname + '/dist/index.html');
};

const aboutHandler = function (request, reply) {
	reply.view('about', {});
};

server.register([require('inert'), require('vision')], (err) => {
  if (err) throw err;

	server.views({
		engines: { pug: require('pug') },
		path: __dirname + '/templates',
		compileOptions: {
			pretty: true
		}
	});

	/*
  server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: { path: __dirname + '/public' }
    }
  });
	*/

	server.route({ method: 'GET', path: '/',      handler: rootHandler });
	server.route({ method: 'GET', path: '/about', handler: aboutHandler });
	server.route({ method: 'GET', path: '/{param*}', handler: directory: { path: __/dirname + '/public' } });
});


server.start((err) => {
  if (err)
    throw(err);

  console.log('Server running at: ' + server.info.uri);
});
