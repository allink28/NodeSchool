//nodeschool.io/#workshoppers
/*## HTTP COLLECT (Exercise 8 of 13)
 Write a program that performs an HTTP GET request to a URL provided to you
 as the first command-line argument. Collect all data from the server (not
 just the first "data" event) and then write two lines to the console
 (stdout).

 The first line you write should just be an integer representing the number
 of characters received from the server. The second line should contain the
 complete String of characters sent by the server.
*/
/* Buffer list
 * http://npm.im/bl  
 * To install: npm install bl
 * Location: file://C:\Users\preville\AppData\Roaming\npm\node_modules\learnyounode\node_modules\bl
 * Documentation: file://C:\Users\preville\AppData\Roaming\npm\node_modules\learnyounode\docs\bl.html
 */
var bufferlist = require('bl');
var http = require('http');

var url = process.argv[2];
http.get(url, function (response) {
	response.pipe(bufferlist(function (err, data) {
		if (err)
			return console.error(err);
		data = data.toString();
		console.log(data.length);
		console.log(data);
	}))
	response.on('error', console.error);
});