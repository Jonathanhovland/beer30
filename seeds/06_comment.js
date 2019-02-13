
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "comment"; ALTER SEQUENCE comment_id_seq RESTART WITH 2;')
    .then(function () {
      var comments = [{
        id: 1,
        status_id: 1,
        body: 'Where we going?'
      }];
      return knex('comment').insert(comments);
    });
};
