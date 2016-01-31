//https://github.com/maxogden/art-of-node#callbacks
//file://C:\Users\preville\AppData\Roaming\npm\node_modules\learnyounode\node_apidoc\fs.html
var fs = require('fs');
var filePath = process.argv[2];

fs.readFile(filePath, 'utf8', function (err, data) {
  if (err) throw err;
  console.log(data.split('\n').length - 1);
});