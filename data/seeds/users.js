
        // users.increments();
    
        // users
        //   .string('username', 128)
        //   .notNullable()
        //   .unique();
          
        // users.string('password', 500).notNullable();

        // users.string('email', 128).notNullable();

        // users.string('phone_number', 128);

        // users.string('location', 128);

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'CoolUser1', password: "83724827408294702087v0347082374082374902374823748023740v", email: "cooluser1@gmail.com"},
        {id: 2, username: 'CoolUser2', password: "83724827408294702087v0347082374082374902374823748023740v", email: "cooluser2@gmail.com", phone_number: "430-384-54382967", location: "somewhere down under"},
        {id: 3, username: 'CoolUser3', password: "83724827408294702087v0347082374082374902374823748023740v", email: "cooluser3@gmail.com", phone_number: "53-3231234-123", location: "happiest place on earth"}
      ]);
    });
};
