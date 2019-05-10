
exports.up = function(knex, Promise) {
    return knex.schema.createTable('comment', (table) =>{
    table.increments();
    table.integer('status_id').references('id').inTable('status').onDelete('cascade')
    table.string('body').notNullable();
    })
  };
  
  // express knex 4 lyfe
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('comment');
  };
