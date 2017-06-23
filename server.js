var express = require('express');
var path = require('path');

app = express();

// Resource loading
app.use("/node_modules", express.static(__dirname + "../node_modules"));
app.use("/", express.static(__dirname));


// Run app
var port = process.env.PORT || 5000;
app.listen(port);
console.log('server started ' + port);
