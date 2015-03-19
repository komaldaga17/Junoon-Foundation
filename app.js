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
	var data = req.body;
	// console.log(data);
	// console.log(data[0].name);
	editJSON(data);
	res.end();	

});
function editJSON(data){
	var obj;
	var newData = data;
	fs.readFile('public/Resources/JSON/home.json', 'utf8', function(err,data){
		var existingObject = (JSON.parse(data));
		for(var key=0 in newData){
			existingObject.quotes[key].name = newData[key].name;
			existingObject.quotes[key].content = newData[key].content;			
		}
		// if(newData.length == 1){
		// 	existingObject.quotes[0].name = newData[0].name;
		// 	existingObject.quotes[0].content = newData[0].content;
		// }
		// console.log(existingObject);
		writeFile(existingObject);
		newData = '';
	});	
}
function writeFile(existingObject){
		fs.writeFileSync('public/Resources/JSON/home.json', JSON.stringify(existingObject));
}
app.listen(port);