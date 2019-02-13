
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "bar_member"; ALTER SEQUENCE bar_member_id_seq RESTART WITH 2;')
    .then(function () {
      var bar_members = [{
        id: 1,
        member_id: 1,
        bar_id: 1,
        date: '02/13/2019',
        check_in: '2019-02-13 20:23:30',
        check_out: '2019-02-13 21:11:00',
        favorite: true,
        rating: 5,
        games: 1,
        food: 1,
        price: 1,
        crowd: 1,
        music: 1,
        service: 1,
        romantic: 0,
      }];
      return knex('bar_member').insert(bar_members);
    });
};