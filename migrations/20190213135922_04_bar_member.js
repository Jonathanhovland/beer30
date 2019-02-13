
exports.up = function(knex, Promise) {
    return knex.schema.createTable('bar_member', (table) =>{
    table.increments();
    table.integer('member_id').references('id').inTable('member').onDelete('cascade')
    table.integer('bar_id').references('id').inTable('bar').onDelete('cascade')
    table.string('date').notNullable();
    table.string('check_in').notNullable();
    table.string('check_out').notNullable();
    table.boolean('favorite').notNullable();
    table.integer('rating').notNullable();
    table.integer('games').notNullable();
    table.integer('food').notNullable();
    table.integer('price').notNullable();
    table.integer('crowd').notNullable();
    table.integer('music').notNullable();
    table.integer('service').notNullable();
    table.integer('romantic').notNullable();
    })
  };
  
  // express knex 4 lyfe
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('bar_member');
  };
