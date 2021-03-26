/* eslint-disable strict */
const router = require("express").Router({ mergeParams: true });
const controller = require("./placesController");
const methodNotAllowed = require("../errors/methodNotAllowed");

router.route("/").get(controller.listAllPlaces).post(controller.createPlace).all(methodNotAllowed);


module.exports = router;
