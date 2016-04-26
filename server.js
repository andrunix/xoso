'use strict';

const Hapi = require('hapi');
const server = new Hapi.Server();

server.connection({ port: 8000 });

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

  server.route({
    method: 'GET',
    path: '/',
    handler: function(request, reply) {
      reply.file(__dirname + '/public/index.html');
    }
  });

  server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: { path: __dirname + '/public' }
    }
  });

	server.route({ method: 'GET', path: '/about', handler: aboutHandler });
});


server.start((err) => {
  if (err)
    throw(err);

  console.log('Server running at: ' + server.info.uri);
});
