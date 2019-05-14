
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "friendship"; ALTER SEQUENCE friendship_id_seq RESTART WITH 2;')
    .then(function () {
      var friends = [{
        id: 1,
        current_member_id: 1,
        friend_member_id: 2,
        pending_friendship: false,
      }];
      return knex('friendship').insert(friends);
    });
};
