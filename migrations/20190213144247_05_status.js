
exports.up = function(knex, Promise) {
    return knex.schema.createTable('status', (table) =>{
    table.increments();
    table.integer('member_id').references('id').inTable('member').onDelete('cascade')
    table.string('date').notNullable();
    table.string('body').notNullable();
    table.integer('timer').notNullable();
    })
  };
  
  // express knex 4 lyfe
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('status');
  };