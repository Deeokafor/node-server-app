console.log('Node is running on Android!');
var http = require('http');
http.createServer(function (req, res) {
	res.write('Hello World, Welcome to WeJapa Internships.');
	res.end();
}).listen(8080);
	
