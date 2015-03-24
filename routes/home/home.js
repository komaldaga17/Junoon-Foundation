'use strict';


var express = require('express');
var app = module.exports = express();
var fs = require('fs');

console.log("I am into the route");

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
				existingObject.quotes[key].content = newData[key].content;
			}
						
		}		
		writeFile(existingObject);
	});	
};
function writeFile(existingObject){
		fs.writeFileSync('public/Resources/JSON/home.json', JSON.stringify(existingObject));
};

app.post('/getUrl', function(req,res){
	console.log("I am in server");
	console.log(req.url);
	console.log(res.statusCode);
	var data = req.body;	
	editJSON(data);
	res.send("I got into the success of the api");
	res.end();	
});

