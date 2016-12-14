
exports.up = function(knex, Promise) {
  return knex.schema.createTable('beer', table => {
    table.increments().primary();
    // id, beer, type, abv, consumed
    table.string('name', 50).notNullable();
    table.string('type', 25);
    table.float('abv', 3);
    table.integer('consumed', 1).defaultTo(0);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('beer');
};
