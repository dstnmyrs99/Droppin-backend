/* eslint-disable strict */
const router = require("express").Router({ mergeParams: true });
const controller = require("./usersController");
const methodNotAllowed = require("../errors/methodNotAllowed");

router
  .route("/")
  .get(controller.listAllUsers)
  .post(controller.createUser)
  .all(methodNotAllowed);

router.route("/:user_name").get(controller.getUser).all(methodNotAllowed);

module.exports = router;
