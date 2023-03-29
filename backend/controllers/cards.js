const { default: mongoose } = require('mongoose');
const NotFoundError = require('../errors/not-found-error');
const ForbiddenError = require('../errors/forbidden-error');
const Card = require('../models/card');
const BadRequestError = require('../errors/bad-request-error');

module.exports.getCards = (req, res, next) => {
  Card.find({}).populate(['likes', 'owner'])
    .then((cards) => res.send({ data: cards }))
    .catch(next);
};

module.exports.createCard = (req, res, next) => {
  const { name, link } = req.body;

  Card.create({ name, link, owner: req.user._id })
    .then((card) => {
      Card.populate(card, { path: 'owner' }).then((populatedCard) => {
        res.send({ data: populatedCard });
      });
    })
    .catch((err) => {
      if (err instanceof mongoose.Error.ValidationError) {
        next(new BadRequestError('Parameters error'));
      } else {
        next(err);
      }
    });
};

module.exports.deleteCard = (req, res, next) => {
  Card.findById(req.params.cardId).populate(['owner', 'likes'])
    .then((card) => {
      if (!card) {
        throw new NotFoundError('Object Not Found');
      }
      const userId = req.user._id;
      const ownerId = card.owner._id;
      if (userId !== ownerId.toString()) {
        throw new ForbiddenError('Not allowed');
      }
      Card.deleteOne({ _id: card._id }).then(({ deletedCount }) => {
        if (deletedCount === 0) {
          throw new BadRequestError('Ошибка удаления');
        } else {
          res.send({ data: card });
        }
      });
    })
    .catch((error) => {
      if (error instanceof mongoose.Error.CastError) {
        next(new BadRequestError('Invalid card id'));
      } else {
        next(error);
      }
    });
};

module.exports.addCardLike = (req, res, next) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $addToSet: { likes: req.user._id } },
    { new: true },
  ).populate(['likes', 'owner'])
    .then((card) => {
      if (!card) {
        throw new NotFoundError('Object Not Found');
      }
      res.send({ data: card });
    })
    .catch((error) => {
      if (error instanceof mongoose.Error.CastError) {
        next(new BadRequestError('Invalid card id'));
      } else {
        next(error);
      }
    });
};

module.exports.deleteCardLike = (req, res, next) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $pull: { likes: req.user._id } },
    { new: true },
  ).populate(['likes', 'owner'])
    .then((card) => {
      if (!card) {
        throw new NotFoundError('Object Not Found');
      }
      res.send({ data: card });
    })
    .catch((error) => {
      if (error instanceof mongoose.Error.CastError) {
        next(new BadRequestError('Invalid card id'));
      } else {
        next(error);
      }
    });
};
