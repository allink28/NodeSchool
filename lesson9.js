//nodeschool.io/#workshoppers
/*## JUGGLING ASYNC (Exercise 9 of 13)
 This problem is the same as the previous problem (HTTP COLLECT) in that
 you need to use http.get(). However, this time you will be provided with
 three URLs as the first three command-line arguments.

 You must collect the complete content provided to you by each of the URLs
 and print it to the console (stdout). You don't need to print out the
 length, just the data as a String; one line per URL. The catch is that you
 must print them out in the same order as the URLs are provided to you as
 command-line arguments.
*/
/* Buffer list
 * http://npm.im/bl
 * To install: npm install bl
 * Location: file://C:\Users\preville\AppData\Roaming\npm\node_modules\learnyounode\node_modules\bl
 * Documentation: file://C:\Users\preville\AppData\Roaming\npm\node_modules\learnyounode\docs\bl.html
 */
var bufferlist = require('bl');
var http = require('http');

var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];
var requests = 0;

var callback = function(err, requests, data) {
	var id = ++requests;
	if (err) {
		console.error(err);
	} else if () {
		console.log(data.toString());
	}
}

http.get(url1, callback);
http.get(url2, callback);
http.get(url3, callback);
