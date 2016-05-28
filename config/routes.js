const homeController = require('../controllers/home_controller');
const contactController = require('../controllers/contact_controller');
const projectsController = require('../controllers/projects_controller');

module.exports = [

	{ method: 'GET', path: '/',      handler: homeController.rootHandler },
	{ method: 'GET', path: '/about', handler: homeController.aboutHandler },
  { method: 'GET', path: '/contact', handler: contactController.contactIndex },
  { method: 'POST', path: '/contact', handler: contactController.contactPost },
  { method: 'GET', path: '/projects', handler: projectsController.projectsIndex },
	{ method: 'GET', path: '/project/{id}', handler: projectsController.projectShow },
  { method: 'GET', path: '/project/new', handler: projectsController.projectNew },
  { method: 'POST', path: '/project', handler: projectsController.projectCreate },
	{ method: 'DELETE', path: '/project/{id}', handler: projectsController.destroy },
	{ method: 'GET', path: '/{param*}', handler: { directory: { path: __dirname + '/../public' } } },
	{ method: 'GET', path: '/api/projects', handler: projectsController.indexJson },
];


