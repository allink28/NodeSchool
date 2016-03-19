//nodeschool.io/#workshoppers
//https://github.com/maxogden/art-of-node#callbacks
//file://C:\Users\preville\AppData\Roaming\npm\node_modules\learnyounode\node_apidoc\http.html
var http = require('http');

var url = process.argv[2];
http.get(url, function (response) {
	response.setEncoding('utf8');
	response.on('data', function (data) {
		console.log(data);
	});
	response.on('error', console.error);
});