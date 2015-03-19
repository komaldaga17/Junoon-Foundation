'use strict';

var express = require('express');
var app = express();
var fs = require('fs');

app.use(express.static(__dirname + '/public'));

var port = process.env.PORT || 8000;

app.post('/getUrl', function(req,res){
	console.log("I am in server");
	var data = req.body;
	console.log(data);
	console.log(data[0].name);
	editJSON(data);	
});
function editJSON(data){
	var obj;
	var newData = data;
	fs.readFile('public/Resources/JSON/home.json', 'utf8', function(err,data){
		var existingObject = (JSON.parse(data));
		if(newData.length == 1){
			existingObject.quotes[0].name = newData[0].name;
			existingObject.quotes[0].content = newData[0].content;
		}
		console.log(existingObject);
		writeFile(existingObject);
	});	
}

function writeFile(existingObject){
		fs.writeFileSync('public/Resources/JSON/home.json', JSON.stringify(existingObject));
}
app.listen(port);