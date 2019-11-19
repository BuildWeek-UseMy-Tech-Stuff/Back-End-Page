const router = require('express').Router();
const dbHelper = require('../data/model/model');
const authorized = require('../auth/auth-middleware');

router.get('/', authorized, (req, res) => {

    dbHelper.getUsersAndRentals()
        .then(usersWithRentals => {
            let result = [];
            usersWithRentals.forEach((item) => {
                delete item.password;
                delete item.email;
                delete item.phone_number;
                delete item.location;
                delete item.id;
                result.push(item);//exclude sensitive info
            });
            res.json(result);
        })
        .catch(err => res.status(500).json({ error: err, message: "Error getting users and rentals, if you see the it's my fault" }));

});

router.post('/create', authorized, (req, res) => {

    let rental = { ...req.body };

    console.log("body data rental", rental);

    dbHelper.addRental(rental)
        .then(newRental => {
            res.json({ newRental: newRental, message: "Successfully created rental item" });
        })
        .catch(err => res.status(500).json({ error: err, message: "Error saving new rental to DB. Make sure you sent the correct data." }));

});

router.put('/:id', authorized, (req, res) => {

    let rental = { ...req.body, id: req.params.id };

    console.log("body data rental", rental);

    dbHelper.updateRental(rental)
        .then(updatedRental => {
            res.json({ updatedRental: updatedRental, message: "Successfully updated rental item" });
        })
        .catch(err => res.status(500).json({ error: err, message: "Error updating rental in DB. Make sure you sent the correct data and included a valid ID in the request URL." }));

});

router.get('/:id', authorized, (req, res) => {

    dbHelper.getRental(req.params.id)
        .then(rental => {
            res.json({ rental: rental});
        })
        .catch(err => res.status(500).json({ error: err, message: "Error getting rental from DB. Make sure you included a valid ID in the request URL." }));

});

router.delete('/:id', authorized, (req, res) => {

    dbHelper.deleteRental(req.params.id)
        .then(newRentalList => {
            res.json({ newRentalList: newRentalList, message: "Successfully deleted rental item" });
        })
        .catch(err => res.status(500).json({ error: err, message: "Error deleting rental tfrom DB. Make sure you included a valid ID in the request URL." }));

});

router.post('/:id/rent', authorized, (req, res) => {

    let itemToRent = { ...req.body, id: req.params.id };

    dbHelper.rentItem(itemToRent)
        .then(item => {
            res.json({ result: item, message: "Successfully rented item." });
        })
        .catch(err => res.status(500).json({ error: err, message: "Error setting item to rented. Make sure you sent the correct data and included a valid ID in the request URL." }));

});

router.post('/:id/return', authorized, (req, res) => {

    dbHelper.unrentItem(req.params.id)
        .then(item => {
            res.json({ result: item, message: "Successfully un-rented item." });
        })
        .catch(err => res.status(500).json({ error: err, message: "Error setting item to not rented. Make sure you included a valid ID in the request URL." }));

});

module.exports = router;