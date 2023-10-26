const net = require('net');
let portNumber = process.argv[2];

let date = new Date();
let year = date.getFullYear();
let month = date.getMonth() + 1;
let day = date.getDate();
let hour = date.getHours();
let minutes = date.getMinutes();

if (day < 10) {
  day = `0${day}`;
}
if (month < 10) {
  month = `0${month}`;
}
if (hour < 10) {
  hour = `0${hour}`;
 }
if (minutes < 10) {
  minutes = `0${minutes}`;
}

let data = `${year}-${month}-${day} ${hour}:${minutes}\n`;

const server = net.createServer(function (socket) {
  socket.end(data);
});
server.listen(portNumber);

// const net = require('net')

//     function zeroFill (i) {
//       return (i < 10 ? '0' : '') + i
//     }

//     function now () {
//       const d = new Date()
//       return d.getFullYear() + '-' +
//         zeroFill(d.getMonth() + 1) + '-' +
//         zeroFill(d.getDate()) + ' ' +
//         zeroFill(d.getHours()) + ':' +
//         zeroFill(d.getMinutes())
//     }

//     const server = net.createServer(function (socket) {
//       socket.end(now() + '\n')
//     })

//     server.listen(Number(process.argv[2]))