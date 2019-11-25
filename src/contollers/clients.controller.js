const { BaseController } = require('rapidify-core');

const { client } = require('../models');

class ClientController extends BaseController {
  constructor() {
    super({ Model: client });
  }
}

module.exports = new ClientController();
