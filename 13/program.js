var http = require('http')
var url = require('url');

var port = process.argv[2]

var server = http.createServer().listen(port)

server.on('request', function(req, res) {
  var url_parts = url.parse(req.url, true);
  res.writeHead(200, { 'Content-Type': 'application/json' })
  var time = new Date(url_parts.query.iso)
  switch(url_parts.pathname) {
    case '/api/parsetime':
      res.write(JSON.stringify({ hour: time.getHours(), minute: time.getMinutes(), second: time.getSeconds() }))
      break
    case '/api/unixtime':
      res.write(JSON.stringify({ unixtime: time.getTime() }))
      break
    default:
      res.write('Unknown path: ' + JSON.stringify(url_parts))
  }
  res.end()
})



