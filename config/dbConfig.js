require('dotenv').config();
const config = process.env;

const dbConfig = {
    connectionLimit: 5,
    host: '34.101.85.1',
    user: 'root',
    password: config.DB_PASSWORD,
    database: 'capstone'
}

module.exports = dbConfig;