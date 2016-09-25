var http = require('http')
var urlA = process.argv[2]
var urlB = process.argv[3]
var urlC = process.argv[4]

var urls = [urlA, urlB, urlC]

var strings = []

var getData = function(url, position) {
  http.get(url, function(response) {
    var string = ''
    response.setEncoding('utf8')
    response.on('data', data => string += data)
    response.on('end', function() {
      strings[position] = string
      print()
    })
  }).on('error', console.error)
}


var print = function () {
  if(strings.length === 3) {
    console.log(strings[0])
    console.log(strings[1])
    console.log(strings[2])
  }
}

urls.forEach(function(url, index) {
  getData(url, index)
})
