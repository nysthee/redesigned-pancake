var mymodule = require('./mymodule')

var dir = process.argv[2]
var ext = process.argv[3]

mymodule.filterFiles(dir, ext, function(err, data) {
  if (err)
    return consol.error('There was an error:', err)

  data.forEach(function(file) {
    console.log(file)
  })
})
