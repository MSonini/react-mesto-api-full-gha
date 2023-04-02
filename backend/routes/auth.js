const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const {
  login,
  createUser,
} = require('../controllers/users');
const { validators } = require('../validators/validators');

router.post('/signin', celebrate({
  body: Joi.object().keys({
    email: validators.email.required(),
    password: validators.password.required(),
  }),
}), login);

router.post('/signup', celebrate({
  body: Joi.object().keys({
    email: validators.email.required(),
    password: validators.password.required(),
    name: validators.name,
    about: validators.about,
    avatar: validators.avatar,
  }),
}), createUser);

module.exports = router;
