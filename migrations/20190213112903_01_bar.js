exports.up = function(knex, Promise) {
    return knex.schema.createTable('bar', (table) =>{
    table.increments();
    table.string('name').notNullable();
    table.string('address').notNullable().unique();
    })
  };
  
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('bar');
  };
