
exports.up = function(knex) {
    return knex.schema.createTable('users', users => {

        users.increments();
    
        users
          .string('username', 128)
          .notNullable()
          .unique();
          
        users.string('password', 500).notNullable();

        users.string('email', 128).notNullable();

        users.string('phone_number', 128);

        users.string('location', 128);

      });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users');
};
