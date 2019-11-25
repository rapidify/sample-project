const { clients } = require('../../contollers');

module.exports = (fastify, opts, done) => {
  fastify.get(`/v1/clients`, (req, res) => clients.get(req, res));

  done();
};
