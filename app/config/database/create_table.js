var con = require('../connection.js')

con.query('CREATE DATABASE node_tutorial', function (err, result) {
    if (err) throw err;
    console.log('Database created');
});