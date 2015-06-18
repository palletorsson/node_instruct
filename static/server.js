var express = require('express'); 
var app = express(); 
app.use(express.static(__dirname + '/public'));  
app.get('*', function(req, res) {
        res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });
var port= process.env.PORT || 8080;
app.listen(port); 
console.log("go to http://localhost:8080"); 
