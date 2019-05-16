
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "badge"; ALTER SEQUENCE badge_id_seq RESTART WITH 2;')
    .then(function () {
      var badges = [{
        id: 1,
        member_id: 1,
        temper: 'https://cdn-s3.si.com/images/rocky-iv-portrait-color.jpg',
        funny: 'http://lh6.ggpht.com/-5lHmdo9W08U/UdP9LFbqEzI/AAAAAAAAAa4/WDF7y_k_FK8/s640/IMG-20130525-WA0002.jpg',
        emotional: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKH1fHLUb60AU389reDpt_jCmRpX6pklS6jpz3xe72q9toQfkO',
        flirty: 'https://media.makeameme.org/created/IS-SOMEONE-THIRSTY.jpg',
        dd: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyA9TmxrLoSXuCWGlU8Ecm3cVMBnFQpObOJeg7ywlUCqeeQ5CzjQ'
      }];
      return knex('badge').insert(badges);
    });
};
