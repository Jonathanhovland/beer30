exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "bar"; ALTER SEQUENCE bar_id_seq RESTART WITH 2;')
    .then(function () {
      var bars = [{
        id: 1,
        name: 'Denver Beer Co',
        address: '1695 Platte St, Denver, CO 80202',

      }];
      return knex('bar').insert(bars);
    });
};