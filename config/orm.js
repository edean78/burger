// Import MySQL connection
var connection = require("../config/connection.js");

// Helper function for SQL syntax
function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++){
        arr.push("?");
    }

    return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function odjToSql(ob) {
    var arr = [];

    // loop trhough the keys and push the key/value as a string int arr
    for(var key in ob) {
        var value = ob[key];
        // check to skip hidden prperties
        if (Object.hasOwnProperty.call(ob, key)) {
            // if string with spaces, add quotations (Ed Dean => 'Ed Dean')
            if (typeof value === "string" && value.indexOf(" ") >= 0){
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }

    // translate array of strings to a single conna-seperated string
    return arr.toString();
}

// Object for all our SQL statment functions.
var orm = {
    selectAll: function(tableInput, cb){
        var queryString = "SELECT * FROM ??";
        connection.query(queryString,[tableInput], function(err, result){
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    insertOne: function(tableInput, colName, burName, cb){
        var queryString = "INSERT INTO ?? (??) VALUES (?)";

        console.log(queryString);

        connection.query(queryString, [tableInput, colName, burName], function(err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },
    
    updateOne: function(tableInput, updateColName, updateRow, searchCol, searchRow, cb) {
        var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";


        console.log(queryString);

        connection.query(queryString, [tableInput, updateColName, updateRow, searchCol, searchRow], function(err, result){
            if (err) {
                throw err;
            }

            cb(result);
        });
    },
};

// Export the orm object for the model (burger.js)
module.exports = orm;