const mysql = require('mysql');
const dbConfig = require('../config/dbConfig');

// create a connection to db
const db = mysql.createConnection(dbConfig)

// open the connection
db.connect(error => {
    if (error) throw error;
    console.log('Successfully Connected to db')
})

module.exports = db;