const db = require('../dbConfig')

module.exports = {
  find,
  findBy,
  findById,
  add,
  getUsersAndRentals,
  addRental,
  rentItem,
  deleteRental,
  unrentItem,
  getRental,
  getRentals,
  getUserRentals,
  updateRental
};

function find() {
  return db("users");
}

function getUsersAndRentals() {
  return db("users").join('rentals', 'rentals.user_id', 'users.id');
}

function getRentals() {
  return db("rentals");
}

function getUserRentals(id) {
  return db("rentals").where({user_id: id});
}

function getRental(id) {
  return db("rentals").where({ id: id }).first();
}

function findBy(user) {
  return db("users").where({ username: user }).first();
}

function findById(id) {
  return db("users")
    .where({ id })
    .first();
}

function add(user) {
  return db("users").insert(user);
}

function addRental(rental) {
  console.log("addRental");
  return db("rentals").insert(rental).then((id) => {
    return getRental(id[0]);
  });
}

function deleteRental(id) {
  return db("rentals").where({id: id}).delete().then(() => {
    return getRentals();
  });
}

function rentItem(rent) {
return getRental(rent.id).then((rental) => {
  rental.rented_at = rent.rented_at;
  rental.due_back = rent.due_back;
  rental.renter_id = rent.renter_id;
  return db("rentals").where({ id: rent.id }).update(rental);
});
}

function unrentItem(id) {
  return getRental(id).then((rental) => {
    rental.rented_at = null;
    rental.due_back = null;
    rental.renter_id = null;
    return db("rentals").where({ id: id }).update(rental);
  });
  }

  function updateRental (rental) {

      return db("rentals").where({ id: rental.id }).update(rental).then(() => {
        return getRental(rental.id);
      });

  }