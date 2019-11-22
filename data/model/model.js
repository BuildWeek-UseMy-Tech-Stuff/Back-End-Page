const db = require('../dbConfig')

module.exports = {
  getUsers,
  getUserByID,
  getUserByUsername,
  addUser,
  updateUser,
  getUsersAndRentals,
  addRental,
  rentItem,
  deleteRental,
  unrentItem,
  getRental,
  getRentals,
  getUserRentals,
  updateRental,
  getUserRented
};

function getUsers() {
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

function getUserRented(id) {
  return db("rentals").where({renter_id: id});
}

function getRental(id) {
  return db("rentals").where({ id: id }).first();
}

function getUserByID(id) {
  return db("users")
    .where({ id })
    .first();
}

function getUserByUsername(username) {
  return db("users")
    .where({ username })
    .first();
}

function updateUser (user) {

  return db("users").where({ id: user.id }).update(user).then(() => {
    return getUserByID(user.id);
  });

}

function addUser(user) {
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