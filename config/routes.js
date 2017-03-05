const homeController = require('../controllers/home_controller');
const contactController = require('../controllers/contact_controller');
const projectsController = require('../controllers/projects_controller');

module.exports = [

	{ method: 'GET', path: '/',      handler: homeController.root },
	{ method: 'GET', path: '/about', config: { auth: false, handler: homeController.about } },
  { method: 'GET', path: '/contact', config: { auth: false, handler: contactController.index } },
  { method: 'POST', path: '/contact', handler: contactController.post },
  { method: 'GET', path: '/projects', handler: projectsController.index },
	{ method: 'GET', path: '/projects/{id}', handler: projectsController.show },
  { method: 'GET', path: '/projects/new', handler: projectsController.newobject },
	{ method: 'GET', path: '/projects/edit/{id}', handler: projectsController.edit },
  { method: 'POST', path: '/project', handler: projectsController.create },
	{ method: 'DELETE', path: '/project/{id}', handler: projectsController.destroy },
	{ method: 'GET', path: '/{param*}', config: { auth: false, handler: {
    directory: { path: __dirname + '/../public' } } } },
	{ method: 'GET', path: '/api/projects', handler: projectsController.indexJson },
  { method: ['GET', 'POST'], path: '/login', config: {
    handler: homeController.login,
    auth: { mode: 'try' },
    plugins: { 'hapi-auth-cookie': { redirectTo: false } } } },
  { method: 'GET', path: '/logout', config: { handler: homeController.logout } }  
];



