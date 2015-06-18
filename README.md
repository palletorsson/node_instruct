# node_instruct
a read me to setup node application 


* install mongodb from https://www.mongodb.org/downloads
* Install Postman - REST Client

* at the termial:
* $ mkdir nameofproject
* $ cd nameofproject
* $ touch package.json
* $ nano package.json

- add 

<pre>
{
  "name": "node-angular-api",
  "version": "1.0.0",
  "main": "server.js",
  "dependencies": {
        "express": "~4.0.0",
        "mongoose": "~3.6.13"
    }
}
</pre>

- save 

* $ npm install

Node: server.js (S)
--------------
* <pre> 

// PACKAGE . express (init the app)
var express 	= require('express'); 
var app 		  = express(); 

// set the static files location (S)
app.use(express.static(__dirname + '/public'));  


// for everything else use angular view (S)
app.get('*', function(req, res) {
        res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });

// set the port (S)
var port = process.env.PORT || 8080;

// make the app listen for requests (S)
app.listen(port); 
console.log("go to http://localhost:8080"); 
</pre>

* // PACKAGE . mongoose (set )
* 
Angular : create a module, create a controller, and define functions 

* Start db cd in to mongo dir bin  * $ ./mongod
