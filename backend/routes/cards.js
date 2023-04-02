const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const {
  addCardLike,
  createCard,
  getCards,
  deleteCard,
  deleteCardLike,
} = require('../controllers/cards');
const { validators } = require('../validators/validators');

router.get('/', getCards);
router.post('/', celebrate({
  body: Joi.object().keys({
    name: validators.name.required(),
    link: validators.link.required(),
  }),
}), createCard);
router.delete('/:cardId', celebrate({
  params: Joi.object().keys({
    cardId: validators.objectId.required(),
  }),
}), deleteCard);
router.delete('/:cardId/likes', celebrate({
  params: Joi.object().keys({
    cardId: validators.objectId.required(),
  }),
}), deleteCardLike);
router.put('/:cardId/likes', celebrate({
  params: Joi.object().keys({
    cardId: validators.objectId.required(),
  }),
}), addCardLike);

module.exports = router;
