const { BaseModel } = require('rapidify-core');
const { model } = require('mongoose');

const { ClientSchema } = require('../schemas');

class ClientModel extends BaseModel {
  constructor() {
    super({ Model: model('Client', ClientSchema) });
  }
}

module.exports = new ClientModel();
