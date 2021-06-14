// eslint-disable-next-line strict
exports.up = function (knex) {
  return knex.schema.createTable("reviews", (table) => {
    table.increments("id");
    table.string("review");
    table.integer("rating");
    table.integer("places_id");
    table.foreign("places_id").references("id").inTable("places");
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("reviews");
};
