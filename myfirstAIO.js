var fs = require('fs');
var path = process.argv[2];

fs.readFile(path, function(error, data){
	var result = data.toString().split('\n').length - 1;
	console.log(result);
});
