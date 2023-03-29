const { STATUS_CODES } = require('../utils/constants');

class ConflictError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = STATUS_CODES.conflictError;
  }
}

module.exports = ConflictError;
