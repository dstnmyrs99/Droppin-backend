/* eslint-disable strict */
const listAllUsers = (knex) => {
  return knex("users").select("user_name");
};

const createUser = (knex, newUser) => {
  return knex("users").insert(newUser, "*");
};

const getUser = (knex, user) => {
  return knex("users").select("*").where({ user_name: user });
};

module.exports = {
  listAllUsers,
  createUser,
  getUser
};
