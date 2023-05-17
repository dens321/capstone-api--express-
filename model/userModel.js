const db = require('./db');

const User = function (user) {
    this.username = user.username;
    this.password = user.password;
};

User.getAll = (result) => {
    let query = "SELECT * FROM users";

    db.query(query, (err, res) => {
        if(err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("Users: ", res);
        result(null, res);
    });
};

User.createUser = (newUser, result) => {
    db.query("INSERT INTO users SET ?", newUser, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log("created user: ", {id: res.insertId, ...newUser});
        result(null, { id: res.insertId, ...newUser});
    });
};

User.updateUser


module.exports = User;