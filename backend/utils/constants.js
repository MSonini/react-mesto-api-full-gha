const { CORS } = process.env;

module.exports.STATUS_CODES = {
  badRequestError: 400,
  authError: 401,
  forbiddenError: 403,
  notFoundError: 404,
  conflictError: 409,
  serverError: 500,
};

module.exports.URL_REGEX = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_.~#?&/=]*)$/;

module.exports.DEFAULT_ALLOWED_METHODS = 'GET,HEAD,PUT,PATCH,POST,DELETE';
module.exports.ALLOWED_CORS = [
  'localhost:3000',
  'localhost:3001',
  CORS,
  'ms-frontend-study.nomoredomains.work',
];

module.exports.DEV_JWT_SECRET = require('crypto').randomBytes(32).toString('hex');
