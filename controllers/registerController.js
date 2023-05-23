const User = require('../model/userModel.js');

const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');
require('dotenv').config();

const handleNewUser = async(req, res) => {
    const { username, password } = req.body;
    if (!username || !password) return res.status(400).json({ 'message': 'Username and password are required.'});

    const duplicate = await User.findByUsername(username);
    if(duplicate.kind === 'found'){
        return res.status(409).send({
            message: "User already exist"
        })
    }
    try{
        //hashing password
        const hashedPwd = await bcrypt.hash(password, 10)
        const newUser = { "username": username, "password": hashedPwd };
        User.createUser(newUser, (err, data) => {
            if (err) {
                    res.status(500).send({
                    message: err.message
                });
            } else {
                const token = jwt.sign(
                    {username: username},
                    process.env.ACCESS_TOKEN_SECRET,
                    { expiresIn: "30s" }
                );
                res.status(201).send({
                    message: "user created successfully",
                    token: token
                });
            };
        });
    } catch (err) {
        res.status(500).json({ 'message': err.message });
    }
}

module.exports = {handleNewUser};