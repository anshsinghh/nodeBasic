const mysql = require('mysql');
const creds = require('../dev_local')
const db = mysql.createConnection({
    host: creds.HOST,
    user: creds.USER,
    password: creds.PASSWORD,
    database: creds.DATABASE
})

db.connect(err => {
    if(err) {
        throw err;
    }
    console.log('MySQL Connected');
})

module.exports = db;
