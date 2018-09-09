const models = require('../models');
const UserModel = models['UserModel'];

module.exports = class DemoController {
  constructor(logger) {
    this.logger = logger;

    this.index = this.index.bind(this);
  }

  index(req, res, next) {
    this.logger.info('ABC');
    UserModel.demo();
    return res.json({

    });
  }
}