const User = require('../model/userModel.js');

const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');
require('dotenv').config();

const handleLogin = async(req, res) => {
    try{
        const { username, password } = req.body;
        if(!username || !password) return res.status(400).json({
            'message': 'Username and password are required.'
        });
        const foundUser = await User.findByUsername(username);
        if(foundUser.kind === 'found' && (await bcrypt.compare(password, foundUser.password))){
            const token = jwt.sign(
                { username: foundUser.username},
                process.env.ACCESS_TOKEN_SECRET,
                {expiresIn: "2h"}
            );

            res.status(200).json({
                message: "login successfull", 
                token: token
            });
        } else{
            res.status(400).json({
                message: "Invalid Credentials"
            });
        }
    } catch (err) {
        console.log(err);
    }
}

module.exports = { handleLogin };