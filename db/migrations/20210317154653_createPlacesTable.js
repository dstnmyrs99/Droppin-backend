// eslint-disable-next-line strict
exports.up = function (knex) {
  return knex.schema.createTable("places", (table) => {
    table.increments("id");
    table.string("name");
    table.float("lat", 14, 10).notNullable();
    table.float("lng", 14, 10).notNullable();
    table.text("description");
    table.string("image_url");
    table.string("marker");
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("places");
};
