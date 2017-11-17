
exports.up = function(knex, Promise) {
  return knex
    .schema
    .createTable('favorites', table => {
      table.increments();

      table.integer('userId');
      table.integer('numOfFavorites');
    });
};

exports.down = function(knex, Promise) {

};
