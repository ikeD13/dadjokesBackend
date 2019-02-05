exports.up = function(knex, Promise) {
  return knex.schema.createTable('jokes', (table) => {
    table.increments('id');
    table.string('text').notNullable().defaultsTo('');
    table.string('url').notNullable().defaultsTo('');
  })
  
};

exports.down = function(knex, Promise) {
  
};
