const mysql = require('mysql');
const dbConfig = require('../config/dbConfig');

// create a connection to db
const db = mysql.createPool(dbConfig)

// open the connection
// db.connect(error => {
//     if (error) throw error;
//     console.log('Successfully Connected to db')
// })
db.getConnection((err, connection) => {
    if (err) throw err;
    console.log('Database connected successfully');
    connection.release();
})

module.exports = db;