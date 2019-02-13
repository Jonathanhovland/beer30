
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "member"; ALTER SEQUENCE member_id_seq RESTART WITH 3;')
    .then(function () {
      var members = [{
        id: 1,
        name: 'Jonathan Hovland',
        email: 'jonathan.hovland@yahoo.com',
        password: "Iliketoparty69",
        avatar: "https://resizing.flixster.com/BqGucmfSISrENYSstYSbAIVfYOk=/300x300/v1.aDszMDYzO2o7MTc5NTU7MTIwMDs0Njc7NzAw",
        fav_drink: "Coors"
      }, {
        id: 2,
        name: 'Jody Isaguirre',
        email: 'jodyisaguirre@gmail.com',
        password: "Hardpass",
        avatar: "https://pbs.twimg.com/media/DVo81-dUQAA349x.jpg",
        fav_drink: "Corona"
      }];
      return knex('member').insert(members);
    });
};
