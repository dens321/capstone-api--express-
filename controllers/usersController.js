const User = require('../model/userModel.js')


const getAllUsers = (req, res) => {
    User.User.getAll((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred"
            });
        } else res.send(data);
    })
}

const createNewUser = (req, res) => {
    const newUser = req.body;
    // const newUser = {username, password};
    data.users.push(newUser);
    res.json({
        "username": newUser.username,
        "password": newUser.password
    });
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

module.exports = {getAllUsers, createNewUser, updateUser, deleteUser}