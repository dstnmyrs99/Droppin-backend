/* eslint-disable strict */
const listAllReviews = (knex) => {
  return knex("reviews").join("places", "places.id", "reviews.places_id").select("*");
};

const createReview = (knex, newReview) => {
  return knex("reviews").insert(newReview, "*");
};

module.exports = {
  listAllReviews,
  createReview
};
