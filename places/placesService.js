/* eslint-disable strict */
const listAllPlaces = (knex) => {
  return knex("places").select("*");
};

const createPlace = (knex, newPlace) => {
  return knex("places").insert(newPlace, "*");
};

module.exports = {
  listAllPlaces,
  createPlace
};
