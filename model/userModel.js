const db = require('./db');

const User = function (user) {
    this.username = user.username;
    this.password = user.password;
};

User.getAll = (result) => {
    let query = "SELECT username FROM users";

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
        console.log("created user: ", {...newUser});
        result(null, {...newUser});
    });
};

User.findByUsername = (username) => {
    return new Promise((resolve, reject)=>{
        db.query(`SELECT username FROM users WHERE username='${username}'`, (err, res) => {
            if (err) {
                return reject(err);
            }
            if (res.length) {
                console.log("found user: ", res[0]);
                return resolve({kind: 'found'});
            }

            return resolve({ kind: 'not_found'});
        })
    })
    
}

User.updateUser = (username, newUser, result) => {
    db.query("UPDATE users SET username = ?, password = ? WHERE username = ?", [newUser.username, newUser.password, username], (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            result({ kind: "not_found" }, null);
            return;
        }

        console.log("updated tutorial: ", { username: username, ...newUser});
        result(null, { username: username, ...newUser});
    });
};


module.exports = User;