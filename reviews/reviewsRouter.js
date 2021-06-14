/* eslint-disable strict */
const router = require("express").Router({ mergeParams: true });
const controller = require("./reviewsController");
const methodNotAllowed = require("../errors/methodNotAllowed");

router
  .route("/")
  .get(controller.listAllReviews)
  .post(controller.createReview)
  .all(methodNotAllowed);

module.exports = router;
