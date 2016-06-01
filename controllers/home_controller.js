module.exports = {
	root: function(request, reply) {
		reply.view('index', { 
			title: 'xoso',
			message: 'good stuff is on the way...'
		} );
	},

	about: function (request, reply) {
		reply.view('about', { title: 'About' });
	}
};


