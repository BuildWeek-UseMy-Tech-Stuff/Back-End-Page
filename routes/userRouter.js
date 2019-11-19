const router = require('express').Router();
const dbHelper = require('../data/model/model');
const authorized = require('../auth/auth-middleware');


router.get('/:id/rentals', authorized, (req, res) => {

    dbHelper.getUserRentals(req.params.id)
        .then(rentals => {
            res.json({ rentals: rentals });
        })
        .catch(err => res.status(500).json({ error: err, message: "Error getting user rentals from DB. Make sure you included a valid ID in the request URL." }));

});

router.get('/', authorized, (req, res) => {

    dbHelper.getUsers()
        .then(users => {
            let result = [];
            users.forEach((user) => {
                delete user.password;
                result.push(user);//exclude sensitive info
            });
            res.json({ users: result });
        })
        .catch(err => res.status(500).json({ error: err, message: "Error getting users from DB. If you see this it's my fault, not yours." }));

});

router.get('/:id', authorized, (req, res) => {

    dbHelper.getUserByID(req.params.id)
        .then(user => {
            delete user.password;
            res.json(user);
        })
        .catch(err => res.status(500).json({ error: err, message: "Error getting user from DB. Make sure you included a valid ID in the request URL." }));

});

router.put('/:id', authorized, (req, res) => {

    let user = { ...req.body, id: req.params.id }

    if (user.hasOwnProperty("password")) {
        res.status(500).json({ message: "Error updating user account.", error: "You're not allowed to edit your password!" })
    } else {

        dbHelper.updateUser(user)
            .then(updatedUser => {
                delete updatedUser.password;
                res.json(updatedUser);
            })
            .catch(err => res.status(500).json({ error: err, message: "Error updating user in DB. Make sure you sent the correct data and included a valid ID in the request URL." }));
    }
});

module.exports = router;