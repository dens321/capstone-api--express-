const User = require('../model/userModel.js')


const getAllUsers = (req, res) => {
    User.getAll((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred"
            });
        } else res.status(200).send(data);
    })
}

const getUserByUsername = (req, res) => {
    User.findByUsername(req.params.username, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found user with username: ${req.params.username}.`
                })
            } else{
                res.status(500).send({
                    message: "Error retrieving user with username: " + req.params.username
                });
            }
        } else res.status(200).send(data);
    })
}

const createNewUser = (req, res) => {
    // const newUser = req.body;
    // const newUser = {username, password};
    const newUser = new User({
        username: req.body.username,
        password: req.body.password
    })
    User.createUser(newUser, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "some error occurred"
            });
        } else{
            res.status(201).send(data);
        };
    })
}

const updateUser = (req, res) => {
    res.json({
        "username": req.body.username,
        "password": req.body.password
    });
}

const deleteUser = (req, res) => {
    res.json({"id": req.body.id});
}

module.exports = {getAllUsers, createNewUser, updateUser, deleteUser, getUserByUsername}