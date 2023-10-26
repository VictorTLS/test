const fs = require('fs');
const path = require('path');

module.exports = function (dirPath, fileExt, callback) {

  fs.readdir(dirPath, function (err, data) {
    if(err) {
      return callback(err);
    }
    data = data.filter(function (file) {
      return path.extname(file) === '.' + fileExt;
    })

    callback(null, data);
  })
}