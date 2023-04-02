const usersRouter = require('./users');
const cardsRouter = require('./cards');
const authRouter = require('./auth');

module.exports.router = {
  usersRouter,
  cardsRouter,
  authRouter,
};
