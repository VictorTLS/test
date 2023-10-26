// const http = require('http');
// const bl = require('bl');
// let url1 = process.argv[2];
// let url2 = process.argv[3];
// let url3 = process.argv[4];

// http.get(url1, function (response) {
//   response.pipe(bl(function (err, data1) {
//     if (err) {
//       return console.error(err);
//     }

//     data1 = data1.toString();
//     console.log(data1);

//     http.get(url2, function (response) {
//       response.pipe(bl(function (err, data2) {
//         if (err) {
//           return console.error(err);
//         }
//         data2 = data2.toString();
//         console.log(data2);

//         http.get(url3, function (response) {
//           if (err) {
//             return console.error(err);
//           }
//           response.pipe(bl(function (err, data3) {
//             if (err) {
//               return console.error(err);
//             }
//             data3 = data3.toString();
//             console.log(data3);
//           }));
//         });

//       }));

//     });

//   }));
// });

'use strict'
const http = require('http')
const bl = require('bl')
const results = []
let count = 0

function printResults () {
  for (let i = 0; i < 3; i++) {
    console.log(results[i])
  }
}

function httpGet (index) {
  http.get(process.argv[2 + index], function (response) {
    response.pipe(bl(function (err, data) {
      if (err) {
        return console.error(err)
      }

      results[index] = data.toString()
      count++

      if (count === 3) {
        printResults()
      }
    }))
  })
}

for (let i = 0; i < 3; i++) {
  httpGet(i)
}