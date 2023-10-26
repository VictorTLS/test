const fs = require('fs');

const buf = fs.readFileSync(process.argv[2]);
let str = buf.toString();
str = str.split('\n');

console.log(str.length - 1);
