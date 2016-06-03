
const Project = require('../models/project');

const index = function(request, reply) {
  Project.fetchAll().then(function(projects) {
    reply.view('projects/index', { projects: projects.toJSON() });
  })
  .catch(function(error) {
    console.log(error);
    reply(error);
  });
};

const indexJson = function(request, reply) {
  Project.fetchAll().then(function(projects) {
    // reply.view('projects/index', { projects: projects.toJSON() });
    reply( projects.toJSON() );
  })
  .catch(function(error) {
    console.log(error);
    reply(error);
  });
};

const edit = function(request, reply) {
	new Project({'id' : request.params.id})
		.fetch()
			.then(function(project) {
				reply.view('projects/edit', { project : project.toJSON() });
			})
			.catch(function(error) {
				console.log('Error ' + error);
			});

};

const show = function(request, reply) {
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

const newobject = function(request, reply) {
  console.log('projectNew called');
  reply.view('projects/new');
};


const create = function(request, reply) {
  Project.forge({
    name: request.payload.name,
    description: request.payload.description
  })
  .save()
  .then(function(model) {
    reply.redirect('/projects');
  })
  .catch(function(err) {
    if (err) throw err;
  });
};

const destroy = function destroy(request, reply) {
	new Project({ id: request.params.id })
		.destroy()
		.then(function(model) {
			console.log('Project deleted');
			reply.redirect('/projects');
		});
};


module.exports = {
	index: index,
	show: show,
	newobject: newobject,
	create: create,
	destroy : destroy,
	edit : edit,
	indexJson: indexJson
};

