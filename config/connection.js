// Set up MySQL connection
var mysql = require('mysql');

// var connection = mysql.createConnection({
//     host: "localhost",
//     port: 3306,
//     user: "root",
//     password: "docker",
//     database: "burger_db"
// });

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "docker",
        database: "burger_db",
        port: 3306
    });
};

// Make connection
connection.connect(function(err){
    if (err) {
        console.error("Error Connecting: " + err.stack);
        return;
    }
    console.log("Connected as id " + connection.threadId);
});

// Export connection for our ORM to use
module.exports = connection;


