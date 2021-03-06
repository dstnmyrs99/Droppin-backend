/* eslint-disable strict */
require("dotenv").config();
const express = require("express");
const knex = require('./db/connection');
const app = express();
const cors= require('cors');
const placesRouter = require('./places/placesRouter');
const usersRouter = require('./users/usersRouter');
const reviewsRouter = require('./reviews/reviewsRouter');

app.use(cors());
app.use(express.json());
app.set("knex", knex);
app.use('/places', placesRouter);
app.use('/users', usersRouter);
app.use('/reviews', reviewsRouter);


// Not found handler
app.use((request, response, next) => {
  next({ status: 404, message: `Not found: ${request.originalUrl}` });
});

// Error handler
app.use((err, req, res, next) => {
  const { status = 500, message = "Something went wrong!" } = err;
  res.status(status).json({ error: message });
});

module.exports = app;
