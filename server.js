// Create delendencies
var express = require('express');
var exphbs = require('express-handlebars');
var mysql = require('mysql');

var app = express();

// Set the the port to be used by your app
// process.env.PORT lets the port be set by heroku
var PORT = process.env.PORT || 8080;

// Set up the express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set up the application to use handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set("view engine", "handlebars");

// Import routes and give ther server access to them
var routes = require("./controllers/burger_controller.js");

app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});
