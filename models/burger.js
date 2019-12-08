// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },
    insertOne: function(burgerName, cb) {
        orm.insertOne("burgers", "burger_name", burgerName, function(res){
            cb(res);
        });
    },
    updateOne: function(burgerId, cb) {
        orm.updateOne("burgers", "devoured", 1, "id", burgerId, function(res){
            cb(res);
        });
    }
};

// Export the database function for the controller (burger_controller.js)
module.exports = burger;