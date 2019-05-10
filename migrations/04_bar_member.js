
exports.up = function(knex, Promise) {
    return knex.schema.createTable('bar_member', (table) =>{
    table.increments();
    table.integer('member_id').references('id').inTable('member').onDelete('cascade')
    table.integer('bar_id').references('id').inTable('bar').onDelete('cascade')
    table.date('date').notNullable();
    table.datetime('check_in').notNullable();
    table.datetime('check_out').notNullable();
    table.boolean('favorite').notNullable();
    table.integer('rating').notNullable();
    table.integer('affordable').notNullable();
    table.integer('service').notNullable();
    table.integer('crowd').notNullable();
    table.integer('music').notNullable();
    table.integer('food').notNullable();
    table.integer('games').notNullable();
    })
  };
  
  // express knex 4 lyfe
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('bar_member');
  };