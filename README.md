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

Node: server.js (Static)
--------------
<pre> 
var express = require('express'); 
var app = express(); 
app.use(express.static(__dirname + '/public'));  
app.get('*', function(req, res) {
        res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });
var port= process.env.PORT || 8080;
app.listen(port); 
console.log("go to http://localhost:8080"); 
</pre>

HTML: public/index.html
--------------------
<pre> 

<!DOCTYPE html>
<html>
<head>
  <title>Hello World</title>
</head>
<body>
  <div class="container">
    <div>
      <h1>Hello World</h1>
    </div>
</body>
</html>

</pre>

* // PACKAGE . mongoose (set )
* 
Angular : create a module, create a controller, and define functions 

* Start db cd in to mongo dir bin  * $ ./mongod
