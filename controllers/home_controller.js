module.exports = {
	rootHandler: function(request, reply) {
		reply.view('index', { 
			title: 'xoso',
			message: 'good stuff is on the way...'
		} );
	},

	aboutHandler: function (request, reply) {
		reply.view('about', { title: 'About' });
	}
};


