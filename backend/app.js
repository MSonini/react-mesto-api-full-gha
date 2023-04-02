const express = require('express');
const mongoose = require('mongoose');
const { errors } = require('celebrate');
const cookieParser = require('cookie-parser');
const errorHandler = require('./middlewares/errorHandler');
const { authRouter, cardsRouter, usersRouter } = require('./routes/index');
const auth = require('./middlewares/auth');
const NotFoundError = require('./errors/not-found-error');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const cors = require('./middlewares/cors');
require('dotenv').config();

mongoose.connect('mongodb://localhost:27017/mestodb');

const app = express();

app.use(cors);

app.use(cookieParser());
app.use(express.json());

app.use(requestLogger);

app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});

app.use('/', authRouter);

app.use(auth);

app.use('/users', usersRouter);
app.use('/cards', cardsRouter);

app.use((req, res, next) => {
  next(new NotFoundError('Page not found'));
});

app.use(errorLogger);

app.use(errors());

app.use(errorHandler);

app.listen(3000);
