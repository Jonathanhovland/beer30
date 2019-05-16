
exports.up = function(knex, Promise) {
    return knex.schema.createTable('friendship', (table) =>{
    table.increments();
    table.integer('friend_1_id').references('id').inTable('member').onDelete('cascade')
    table.integer('friend_2_id').references('id').inTable('member').onDelete('cascade')
    table.boolean('pending_friendship').notNullable();
    })
  };
  
  // express knex 4 lyfe
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('friendship');
  };
