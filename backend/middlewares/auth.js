const jwt = require('jsonwebtoken');
const AuthError = require('../errors/auth-error');
const { DEV_JWT_SECRET } = require('../utils/constants');

const { NODE_ENV, JWT_SECRET } = process.env;

module.exports = (req, res, next) => {
  try {
    const authorization = req.cookies.jwt || req.headers.authorization;
    if (!authorization) {
      // next(new AuthError('Authorization error (no auth token/header)'));
      next(new AuthError('Authorization error'));
      return;
    }

    const token = authorization.replace('Bearer ', '');
    let _id;

    jwt.verify(token, NODE_ENV === 'production' ? JWT_SECRET : DEV_JWT_SECRET, (err, decoded) => {
      if (err) {
        // next(new AuthError('Authorization error (jwt verification error)'));
        next(new AuthError('Authorization error'));
        return;
      }
      _id = decoded._id;
    });
    req.user = { _id };
    next();
  } catch (error) {
    next(error);
  }
};
