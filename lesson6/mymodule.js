//nodeschool.io/#workshoppers
//https://github.com/maxogden/art-of-node#callbacks
//file://C:\Users\preville\AppData\Roaming\npm\node_modules\learnyounode\node_apidoc\fs.html

module.exports = function findFiles (dirName, fileExt, callback) {
	var fs = require('fs');
	var path = require('path');
	fs.readdir(dirName, function (err, files) {
		var data = new Array();
		if (err) 
			return callback(err);
		files.forEach(function(file) {
			if (path.extname(file) == "."+fileExt) { 
				data.push(file);
			}
		});
		callback(null, data);
	});
}