
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "status"; ALTER SEQUENCE status_id_seq RESTART WITH 2;')
    .then(function () {
      var statuses = [{
        id: 1,
        member_id: 1,
        date: '02/13/2019',
        body: "Let's Go!!!!!",
        timer: 24
      }];
      return knex('status').insert(statuses);
    });
};
