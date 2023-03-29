const jwt = require('jsonwebtoken');
const AuthError = require('../errors/auth-error');

module.exports = (req, res, next) => {
  try {
    const authorization = req.cookies.jwt || req.headers.authorization;
    if (!authorization) {
      next(new AuthError('Authorization error'));
      return;
    }

    const token = authorization.replace('Bearer ', '');
    let _id;

    jwt.verify(token, 'some-secret-key', (err, decoded) => {
      if (err) {
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
