const { STATUS_CODES } = require('../utils/constants');

class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = STATUS_CODES.notFoundError;
  }
}

module.exports = NotFoundError;
