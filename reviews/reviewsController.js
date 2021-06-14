/* eslint-disable strict */

const service = require("./reviewsService");

const listAllReviews = async (req, res, next) => {
  const data = await service.listAllReviews(req.app.get("knex"));
  res.json(data);
};

const createReview = async (req, res, next)=>{
    const newReview = req.body;
    const added = await service.createReview(req.app.get("knex"), newReview);
    res.json(added);

}

module.exports = {
  listAllReviews,
  createReview
};
