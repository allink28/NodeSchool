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

 -Allen's Note: This solution uses buffer list piping to wait until the data is finished.
 	-I'm not fully happy with this solution and will create another one using the http on 'end' event.
*/
/* http module Documentation
 * file://C:\Users\preville\AppData\Roaming\npm\node_modules\learnyounode\node_apidoc\http.html
 */
/* Buffer list
 * http://npm.im/bl
 * To install: npm install bl
 * Location: file://C:\Users\preville\AppData\Roaming\npm\node_modules\learnyounode\node_modules\bl
 * Documentation: file://C:\Users\preville\AppData\Roaming\npm\node_modules\learnyounode\docs\bl.html
 */
var bufferlist = require('bl');
var http = require('http');

var urls = [process.argv[2], process.argv[3], process.argv[4]];
var completedCalls = 0;
var results = [];

// console.log("Start: " + urls );

var collectResponses = function(i) {
	// console.log("calling get");
	http.get(urls[i], function(response) {
		response.pipe(bufferlist(function (err, data) {
			if (err) {
				console.error(err);
			}
			results[i] = data.toString();
			completedCalls++;
			// console.log("Completed calls: " + completedCalls);
			if (completedCalls == 3) {
				results.forEach(function(entry) {
					console.log(entry);
				})
			}
		}))
		// response.on('end', function() {
		// 	if (count )
		// }
	})
}

for (var j = 0; j < 3; j++) { //using piping
	collectResponses(j);
}
