'use strict';

// You can also export this module using var module.exports = function(app){}
//And on the main app.js fiel you can use require(pathofthejsfile)(app);

var express = require('express');
var app = module.exports = express();
var fs = require('fs');
var request = require('request');

console.log("I am into the route");

app.post('/getQuotes', function(req,res){
	console.log("I am in server");
	console.log(req.url);
	console.log(res.statusCode);
	var data = req.body;
	console.log(typeof(data));
	editJSON(data);
	res.send(data);
	res.end();	
});
//To Edit The JSON
function editJSON(data){
	var newData = data;
	fs.readFile('public/Resources/JSON/home.json', 'utf8', function(err,data){
		var existingObject = (JSON.parse(data));
		for(var key=0 in newData){
			if(newData[key] == null){
				existingObject.quotes[key].name = existingObject.quotes[key].name;
				existingObject.quotes[key].content = existingObject.quotes[key].content;

			}else{
				existingObject.quotes[key].name = newData[key].name;
				existingObject.quotes[key].content = newData[key].content;//This is the content coming from front end
			}						
		}		
		writeFile(existingObject);
	});	
};
function writeFile(existingObject){
		fs.writeFileSync('public/Resources/JSON/home.json', JSON.stringify(existingObject));
};



