var http = require('http');
var lanthu=0;
function Xulyweb (req, res) {
    lanthu++;
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!'
  +"<BR>http://127.0.0.1:8080/"
  +"<BR>localhost:8080"
  +"<BR>lan thu-"+lanthu);
};
http.createServer(Xulyweb).listen(8080);
console.log("Nodejs dang run o server!"+lanthu);
