//nodeschool.io/#workshoppers
//https://github.com/maxogden/art-of-node#callbacks
//file://C:\Users\preville\AppData\Roaming\npm\node_modules\learnyounode\node_apidoc\fs.html
var fs = require('fs');
var path = require('path');
var mymodule = require('./mymodule'); //or ./mymodule.js
var dir = process.argv[2];
var fileExt = process.argv[3];

var data = mymodule(dir, fileExt, function(err, files) {
	if (err) {
		console.log("Error: " + err);
	} else {
		files.forEach(function(file) {
			console.log(file);
		});
	}
}); 