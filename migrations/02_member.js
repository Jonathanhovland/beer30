
exports.up = function(knex, Promise) {
    return knex.schema.createTable('member', (table) =>{
    table.increments();
    table.string('name').notNullable();
    table.string('email').notNullable().unique();
    table.string('password').notNullable();
    table.string('avatar').notNullable();
    table.string('fav_drink').notNullable();
    table.integer('friend_id').references('friendship.id').unsigned().onDelete('cascade')
    })
  };
  
  // express knex 4 lyfe
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('member');
  };
