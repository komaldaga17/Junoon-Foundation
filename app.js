'use strict';

var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');

console.log(__dirname);
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

var port = process.env.PORT || 8000;

var home = require('./routes/home/home.js');
app.use(home);



app.listen(port);