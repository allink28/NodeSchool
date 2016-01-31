//nodeschool.io/#workshoppers
//https://github.com/maxogden/art-of-node#callbacks
//file://C:\Users\preville\AppData\Roaming\npm\node_modules\learnyounode\node_apidoc\fs.html
var fs = require('fs');
var path = require('path');
var pathname = process.argv[2];
var fileExt = process.argv[3];

fs.readdir(pathname, function (err, files) {
  if (err) throw err;
  for (i in files) {
	if (path.extname(files[i]) == "."+fileExt) { 
		console.log(files[i]);
	} else {
		//console.log("Does not match " + path.extname(files[i]) + " with " + fileExt);
	}
  }
//  console.log(files + ". \nFileExt: " + fileExt);
});