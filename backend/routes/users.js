const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const {
  getUser,
  getUsers,
  getCurrentUser,
  profileAvatarUpdate,
  profileUpdate,
} = require('../controllers/users');
const { validators } = require('../validators/validators');

router.get('/', getUsers);
router.get('/me', getCurrentUser);
router.get('/:userId', celebrate({
  params: Joi.object().keys({
    userId: validators.objectId.required(),
  }),
}), getUser);
router.patch('/me', celebrate({
  body: Joi.object().keys({
    name: validators.name.required(),
    about: validators.about.required(),
  }),
}), profileUpdate);
router.patch('/me/avatar', celebrate({
  body: Joi.object().keys({
    avatar: validators.avatar.required(),
  }),
}), profileAvatarUpdate);

module.exports = router;
