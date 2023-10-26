const fs = require('fs');
const path = require('path');

let pathName = process.argv[2];
let fileType = "." + process.argv[3];

fs.readdir(pathName, (err, files) => {
  if (err) throw err;
  for (let i = 0; i < files.length; i++) {
    let extension = path.extname(files[i]);
    if(extension === fileType) {
    console.log(files[i]);
    }
  }
});