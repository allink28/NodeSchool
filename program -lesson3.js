var fs = require('fs');
var filePath = process.argv[2];
console.log(fs.readFileSync(filePath).toString().split('\n').length - 1);