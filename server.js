var express = require('express');
var dotenv = process.env.NODE_ENV == "production"
        ? null // Heroku already has its own way of reading config vars
        : require('dotenv').config(); // read .env file (.gitignore-d)
var path = require('path');
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

var app = express();

// Connect to database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/meomeo-shop", {
    useMongoClient: true
});

// Settings
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

// Import API routers
var imagesApi = require('./api/images.api');

// API routing
// TODO: authenticate middleware
app.use('/api/images', imagesApi);

// Resource loading
app.use("/node_modules", express.static(__dirname + "../node_modules"));
app.use("/", express.static(__dirname + "/dist"));


// Run app
var port = process.env.PORT || 5000;
app.listen(port);
console.log('server started on port: ' + port);
