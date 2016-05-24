'use strict';
const dotenv = require('dotenv');
dotenv.load();

const Hapi = require('hapi');
const server = new Hapi.Server();
const NunjucksHapi = require('nunjucks-hapi');
const Path = require('path');
const nodemailer = require('nodemailer');
const smtpConfig = require('./smtpconfig');
const Project = require('./models/project');

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

const contactIndex = function(request, reply) {
  reply.view('contact/contact', {
    title: 'Contact',
    message: 'Welcome to the contact page'
  });
};

const contactPost = function(request, reply) {
  var transporter = nodemailer.createTransport(smtpConfig);
   
  var mailOptions = {
    from: process.env.EMAIL_FROM,
    to: process.env.EMAIL_RECIPIENT,
    subject: process.env.EMAIL_SUBJECT,
    text: request.payload.message,
    html: '<b>' + request.payload.message + ' </b>'
  };
   
  transporter.sendMail(mailOptions, function(error, info){
    if(error) return console.log(error);
  });

  reply.view('contact/contact-post', {
    params: request.payload
  })
};

const projectsIndex = function(request, reply) {
  Project.fetchAll().then(function(projects) {
    reply.view('projects/index', { projects: projects.toJSON() });
  })
  .catch(function(error) {
    console.log(error);
    reply(error);
  });
};

const projectShow = function(request, reply) {
	new Project({'id' : request.params.id})
		.fetch()
			.then(function(project) {
				reply.view('projects/show', { project: project.toJSON() });
			})
			.catch(function(error) {
				console.log('Uh oh. Error' + error);
			});

	// TODO: add a bit of error  handling here. Boom perhaps?? :)
};


server.register([require('inert'), require('vision')], (err) => {
  if (err) throw err;

	server.views({
    engines: { njk: NunjucksHapi },
    path: Path.join(__dirname, '/templates') 
	});

	server.route({ method: 'GET', path: '/',      handler: rootHandler });
	server.route({ method: 'GET', path: '/about', handler: aboutHandler });
  server.route({ method: 'GET', path: '/contact', handler: contactIndex });
  server.route({ method: 'POST', path: '/contact', handler: contactPost });
	server.route({ method: 'GET', path: '/{param*}', handler: { directory: { path: __dirname + '/public' } } });
  server.route({ method: 'GET', path: '/projects', handler: projectsIndex });
	server.route({ method: 'GET', path: '/project/{id}', handler: projectShow });
});

server.start((err) => {
  if (err)
    throw(err);
  console.log('Server running at: ' + server.info.uri);
});


