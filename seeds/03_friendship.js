
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "friendship"; ALTER SEQUENCE friendship_id_seq RESTART WITH 2;')
    .then(function () {
      var friends = [{
        id: 1,
        friend_1_id: 1,
        friend_2_id: 2,
        pending_friendship: false,
      }];
      return knex('friendship').insert(friends);
    });
};
