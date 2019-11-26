const { clients } = require('../../contollers');

module.exports = (fastify, opts, done) => {
  fastify.get(`/v1/clients`, (req, res) => clients.get(req, res));
  fastify.post(`/v1/clients`, (req, res) => clients.create(req, res));
  fastify.patch(`/v1/clients`, (req, res) => clients.update(req, res));
  fastify.delete(`/v1/clients`, (req, res) => clients.delete(req, res));

  done();
};
