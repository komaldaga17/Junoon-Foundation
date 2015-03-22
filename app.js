'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var request = require('request');

var app = express();
app.use(bodyParser.json());
console.log(__dirname);
app.use(express.static(__dirname + '/public'));

var port = process.env.PORT || 8000;

app.post('/getUrl', function(req,res){
	console.log("I am in server");
	console.log(req.url);
	console.log(res.statusCode);
	var data = req.body;	
	editJSON(data);
	res.end();	
});
function editJSON(data){
	var obj;
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
}
function writeFile(existingObject){
		fs.writeFileSync('public/Resources/JSON/home.json', JSON.stringify(existingObject));
}
app.listen(port);