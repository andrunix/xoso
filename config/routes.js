const homeController = require('../controllers/home_controller');
const contactController = require('../controllers/contact_controller');
const projectsController = require('../controllers/projects_controller');

module.exports = [

	{ method: 'GET', path: '/',      handler: homeController.root },
	{ method: 'GET', path: '/about', handler: homeController.about },
  { method: 'GET', path: '/contact', handler: contactController.index },
  { method: 'POST', path: '/contact', handler: contactController.post },
  { method: 'GET', path: '/projects', handler: projectsController.index },
	{ method: 'GET', path: '/project/{id}', handler: projectsController.show },
  { method: 'GET', path: '/project/new', handler: projectsController.newobject },
  { method: 'POST', path: '/project', handler: projectsController.create },
	{ method: 'DELETE', path: '/project/{id}', handler: projectsController.destroy },
	{ method: 'GET', path: '/{param*}', handler: { directory: { path: __dirname + '/../public' } } },
	{ method: 'GET', path: '/api/projects', handler: projectsController.indexJson },
];


