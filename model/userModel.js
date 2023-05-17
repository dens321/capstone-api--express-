const db = require('./db');

const User = function (user) {
    this.username = user.username;
    this.password = user.password;
};

User.getAll = function (result) {
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


module.exports = {User}