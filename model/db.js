const mysql = require('mysql');

// create a connection to db
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'capstone'
})

// open the connection
db.connect(error => {
    if (error) throw error;
    console.log('Successfully Connected to db')
})

module.exports = db;