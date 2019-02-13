
exports.up = function(knex, Promise) {
    return knex.schema.createTable('badge', (table) =>{
    table.increments();
    table.integer('member_id').references('id').inTable('member').onDelete('cascade')
    table.string('rocky').notNullable();
    table.string('funny').notNullable();
    table.string('emotional').notNullable();
    table.string('thirsty').notNullable();
    table.string('dd').notNullable();
    })
  };
  
  // express knex 4 lyfe
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('badge');
  };
