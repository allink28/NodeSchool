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

 -Allen's Note: This solution uses the http on 'end' event.
*/
/* http module Documentation
 * file://C:\Users\preville\AppData\Roaming\npm\node_modules\learnyounode\node_apidoc\http.html
 */
var http = require('http');

var urls = [process.argv[2], process.argv[3], process.argv[4]];
var completedCalls = 0;
var results = [];

// console.log("Start: " + urls );

var collectResponses = function(i) {
	// console.log("calling get " + i);
	http.get(urls[i], function(response) {
  // console.log("http get response: " + response);

    var fullResponse = "";
    response.on('data', function(data) {
      // console.log("response on data: " + data);
      fullResponse += data.toString();
    })
    response.on('end', function() {
      // console.log("response on end called. fullResponse: " + fullResponse);
      results[i] = fullResponse;
      completedCalls++;
      if (completedCalls == 3){
        printResults(results);
      }
      // console.log("Results length: " + results.length);
    })
	})
}

for (var j = 0; j < 3; j++) {
	collectResponses(j);
}

var printResults = function(array) {
  array.forEach(function(entry) {
    console.log(entry);
  })
}
