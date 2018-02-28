'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({ port: 8080 });

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply('Poweroverwhelming');
    }
});

server.route({
    method: 'GET',
    path: '/hello/{name?}',
    handler: function (request, reply) {
	const name =  request.params.name ? encodeURIComponent(request.params.name) : 'anonymous visitor';
	const hostname = server.info.host;
	var data = {
            message: 'Hello ' + name + ' from ' + hostname + '.',
	}
        reply(data);
    }
});

server.start((err) => {

    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});
