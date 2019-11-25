const Config = require('../../config/Config');

const registerOpts = { prefix: Config.BASE_API_ROUTE };

module.exports = (fastify, opts, done) => {
  fastify.register(require('./api'), registerOpts);

  done();
};
