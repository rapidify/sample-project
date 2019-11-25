const {server} = require('rapidify-core');

// routes
server.register(require('./src/routes/routeRegister'));

module.exports = server;
