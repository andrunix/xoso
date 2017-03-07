

var uuid = 1;       // Use seq instead of proper unique identifiers for demo only

const users = {
    john: {
        id: 'john',
        password: 'password',
        name: 'John Doe'
    },
  andrew: {
    id: 'andrew',
    password: 'password',
    name: 'Andrew Pierce'
  }
};



module.exports = {
	root: function(request, reply) {
		reply.view('index', { 
			title: 'xoso',
			message: 'good stuff is on the way...',
      userName: request.auth.credentials.name
		} );
	},

	about: function (request, reply) {
		reply.view('about', { title: 'About' });
	},


  login: function (request, reply) {

    if (request.auth.isAuthenticated) {
        return reply.redirect('/');
    }

    var message = '';
    var account = null;

    if (request.method === 'post') {

      console.log('Here we are in post');
      console.log('user', request.payload);

        if (!request.payload.username ||
            !request.payload.password) {

            message = 'Missing username or password';
        }
        else {
          account = users[request.payload.username];
          
          if (!account ||
              account.password !== request.payload.password) {
            console.log('couldn\'t find that account dude');
            message = 'Invalid username or password';
          }
        }
    }

    if (request.method === 'get' || message) {
      return reply.view('login', {} );
    }


    const sid = String(++uuid);
    request.server.app.cache.set(sid, { account: account }, 0, (err) => {

        if (err) {
            reply(err);
        }

        request.cookieAuth.set({ sid: sid });
        return reply.redirect('/');
    });
  },

  // auth - logout
  logout: function (request, reply) {
    request.cookieAuth.clear();
    return reply.redirect('/');
  }
};


