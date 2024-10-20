/*require('dotenv').config()
console.log("HI, updating the message") // remove this after you've confirmed it is working
LESSON 2*/


/*Doing PORT FOR FIRST TASK
var http = require('http');
var fs = require('fs');

http.createServer(function(req,res) {
  fs.readFile('demo.html', function (err,data){
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  })
}).listen(8080);
*/

var fs = require('fs');
fs.writeFile('message.txt', 'Delete the previous text', function (err) {
  if (err) throw err;
  console.log('Data successfully append to file!')
})