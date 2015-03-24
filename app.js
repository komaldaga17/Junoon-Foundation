'use strict';

var express = require('express');
var app = express();

console.log(__dirname);
app.use(express.static(__dirname + '/public'));

var port = process.env.PORT || 8000;

var home = require('./routes/home/home.js');


app.use(home);


app.listen(port);