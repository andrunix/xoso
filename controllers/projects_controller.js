
const Project = require('../models/project');

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

const projectNew = function(request, reply) {
  console.log('projectNew called');
  reply.view('projects/new');
};


const projectCreate = function(request, reply) {
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


module.exports = {
	projectsIndex: projectsIndex,
	projectShow: projectShow,
	projectNew: projectNew,
	projectCreate: projectCreate
};

