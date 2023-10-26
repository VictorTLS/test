var http = require('http')
var fs = require('fs')

let portNumber = process.argv[2];
let file = process.argv[3];

var server = http.createServer(function (req, res) {
  res.writeHead(200, { 'content-type': 'text/plain' })

  fs.createReadStream(file).pipe(res)
})

server.listen(Number(portNumber));