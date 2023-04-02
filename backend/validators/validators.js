const { Joi } = require('celebrate');
const { URL_REGEX } = require('../utils/constants');

module.exports.validators = {
  email: Joi.string().email(),
  password: Joi.string(),
  name: Joi.string().min(2).max(30),
  about: Joi.string().min(2).max(30),
  avatar: Joi.string().regex(URL_REGEX),
  link: Joi.string().regex(URL_REGEX),
  objectId: Joi.string().length(24).hex(),
};
