var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var request = require('request');

// request('/Resources/JSON/home.json', function(err, resp){
// 	if(resp.statusCode === 200){
// 		console.log("I am there at the location");
// 	}
// })

var app = express();
app.use(bodyParser.json());
console.log(__dirname);
app.use(express.static(__dirname + '/public'));


var port = process.env.PORT || 8000;
console.log(app.post);3
var payload = [];
app.post('/getUrl', function(req,res){
	console.log("I am in server");
	// console.log(JSON.parse(req));
	// console.log(JSON.parse(req).name);
	var data = req.body;
	console.log(data);
	console.log(data[0].name);
	editJSON(data);	
});


function editJSON(data){
	var obj;
	fs.readFile('public/Resources/JSON/home.json', 'utf8', function(err,data){
		console.log("I am reading file");
		// console.log(data);
		// console.log(obj);
		// console.log(home.quotes);
		console.log("Content : "  + data);
		console.log(typeof(data));
		console.log((JSON.parse(data)).quotes);

	});
	fs.lstatSync('public/Resources/JSON/home.json').isFile();
	
}
app.listen(port);