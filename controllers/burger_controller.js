var express = require("express");
var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required
// router.get("/", function(req, res){
//     burger.all(function(data) {
//         var hbsObject = {
//             burgers: data
//         };
//         console.log(hbsObject);
//         res.render("index", hbsObject);
//     });
// });
router.get('/', function(req, res){
    burger.all(function(burger_data){
        console.log(burger_data);
        res.render('index',{burger_data});
    });
});

router.post("/api/burgers", function(req, res) {
    burger.create([
        "burger_name", "isDevoured"
    ], [
        req.body.burger_name, 0
    ], function(result){
        // Send back the ID of the new burger
        res.json({ id: result.insertId});
    });
});

router.put("/burgers/update", function(req, res){
    burger.update(req.body.id, function(result){
        console.log(result);
        res.redirect('/');
    });
});

// Export routes for server.js to use
module.exports = router;