
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('rentals').del()
    .then(function () {
      // Inserts seed entries
      return knex('rentals').insert([
        {id: 1, user_id: 1, item_name: "Expensive Camara", item_description: "An expensive camara that produces high quality photos.", category: "Electronical", rate: 20.50, rented_at: "12-12-1526-23:20", due_back: "13-12-1526-23:20", renter_id: 2},
        {id: 2, user_id: 2, item_name: "Average Quality Laptop", item_description: "An average laptop.", category: "Computronical", rate: 200.50, renter_id: -1},///renter_id -1 not rented
        {id: 3, user_id: 3, item_name: "Smartphone", item_description: "Hey, wanna rent my smartphone?", renter_id: -1}
      ]);
    });
};
// rentals.increments();

// rentals
// .integer('user_id')
// .unsigned()
// .references('id')
// .inTable('users')
// .onDelete('CASCADE')
// .onUpdate('CASCADE')

// rentals
//     .string('item_name', 128)
//     .notNullable();

// rentals.string('item_description', 400);

// rentals.string('category', 128);

// rentals.integer('rate');

// rentals.string('rented_at', 128);

// rentals.string('due_back', 128);

// rentals.integer('renter_id', 128);