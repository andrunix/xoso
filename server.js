'use strict';

const Hapi = require('hapi');
const server = new Hapi.Server();

server.connection({
  host: '127.0.0.1',
  port: 8000
});


server.register(require('inert'), (err) => {
  if (err) throw err;

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

});



server.start((err) => {
  if (err)
    throw(err);

  console.log('Server running at: ' + server.info.uri);
});
