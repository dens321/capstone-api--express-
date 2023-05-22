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
                    message: `Not found user with username: ${req.body.username}.`
                })
            } else{
                res.status(500).send({
                    message: "Error retrieving user with username: " + req.body.username
                });
            }
        } else res.status(200).send({
            message: "user found!",
            data
        });
    })
}

const createNewUser = (req, res) => {
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
            res.status(201).send({
                message: "user created successfully"
            });
        };
    })
}

const updateUser = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    const newUser = new User({
        username: req.body.username,
        password: req.body.password
    })

    User.updateUser(req.params.username, newUser, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "some error occured" 
            });
        } else{
            res.status(200).send({
                message: "data updated successfully"
            });
        }
    });
}

const deleteUser = (req, res) => {
    res.json({"id": req.body.id});
}

module.exports = {getAllUsers, createNewUser, updateUser, deleteUser, getUserByUsername}