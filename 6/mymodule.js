var fs = require('fs')
var path = require('path')

var filterFiles = function (dir, ext, callback) {
  fs.readdir(dir, function (err, list) {
    if (err)
      return callback(err)

    var data = list.filter(f => path.extname(f) === '.'+ext)
    callback(null, data)
  })
}

module.exports.filterFiles = filterFiles
