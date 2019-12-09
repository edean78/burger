// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
        orm.all("burgers", function(res){
            cb(res);
        });
    },
    create: function(cols, vals, cb) {
        orm.create("burgers", cols, vals, function(res){
            cb(res);
        });
    },
    update: function(id, cb) {
        orm.update("burgers", id, function(res){
            cb(res);
        });
    }
};

// Export the database function for the controller (burger_controller.js)
module.exports = burger;