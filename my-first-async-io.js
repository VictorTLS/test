const fs = require('fs');

fs.readFile(process.argv[2],  (err, data) => {
  if (err) throw err;
  let strLineCount = data.toString().split('\n').length - 1;
  console.log(strLineCount);
});