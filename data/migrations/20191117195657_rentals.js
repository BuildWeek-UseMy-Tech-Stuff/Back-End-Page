
exports.up = function (knex) {
    return knex.schema.createTable('rentals', rentals => {

        rentals.increments();

        rentals
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

        rentals
            .string('item_name', 128)
            .notNullable();

        rentals.string('item_description', 400);

        rentals.string('category', 128);

        rentals.integer('rate');

        rentals.string('rented_at', 128);

        rentals.string('due_back', 128);

        rentals.integer('renter_id', 128);

    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('rentals');
};
