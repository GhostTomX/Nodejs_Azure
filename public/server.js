var http = require('http');
var fs =  require('fs');

var port = process.env.PORT || 1337 ;

var url = require('url');
var path = require('path');

var file_content;

var webPath = 'public';

var server = http.createServer((req,res) => {
    let url_path = url.parse(req.url);

    let pathname = url_path.pathname;

    if (pathname ==="/" || pathname ==="/index.htm"){
        pathname = 'index.html';
    }
var filePath = path.join();
console.log(filePath);
fs.readFile(filePath,'utf8',(err,content) => {
    if(err){
        res.writeHead(404,{'Content-Type':'text/html'});
        res.end();
        return;
    }
    res.write(content);
    res.end();
})
});

server.listen(port);
console.log('server running'+port);