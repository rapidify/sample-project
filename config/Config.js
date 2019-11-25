const { BaseConfig } = require('rapidify-core/config');

class Config extends BaseConfig {
  constructor() {
    super();

    this.BASE_API_ROUTE = process.BASE_API_ROUTE || '/api';
  }
}

module.exports = new Config();
