const { BaseModel } = require('rapidify-core');
const { model, Schema } = require('mongoose');

class ClientModel extends BaseModel {
  constructor() {
    super({ Model: model('Client', new Schema({})) });
  }
}

module.exports = new ClientModel();
