var http = require('http')
var map = require('through2-map');

let portNumber = process.argv[2];
let file = process.argv[3];

var server = http.createServer(function (req, res) {
  if (req.method == "POST")
  req.pipe(map(function (data) {
    return data.toString().toUpperCase();
  })).pipe(res);
});

server.listen(Number(portNumber));