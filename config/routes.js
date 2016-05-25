const homeController = require('../controllers/home_controller');

module.exports = [

	{ method: 'GET', path: '/',      handler: homeController.rootHandler },
	{ method: 'GET', path: '/about', handler: homeController.aboutHandler },
	/*
  { method: 'GET', path: '/contact', handler: contactIndex },
  { method: 'POST', path: '/contact', handler: contactPost },
	{ method: 'GET', path: '/{param*}', handler: { directory: { path: __dirname + '/public' } } },
  { method: 'GET', path: '/projects', handler: projectsIndex },
	{ method: 'GET', path: '/project/{id}', handler: projectShow },
  { method: 'GET', path: '/project/new', handler: projectNew },
  { method: 'POST', path: '/project', handler: projectCreate }
	*/
];



