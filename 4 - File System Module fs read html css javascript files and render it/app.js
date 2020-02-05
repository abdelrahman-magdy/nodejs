var http = require("http");
var fs = require("fs");
var path = require("path")
var printFun = function(req,res){

    var filePath = "./startbootstrap"+req.url

    if(filePath == './startbootstrap/home')
        filePath = './startbootstrap/index.html';

    var extname = path.extname(filePath);
    var contentType;
    switch (extname) {
        case '.js':
            contentType = "text/javascript"
            break;
        case '.css':
            contentType = "text/css"
            break;
        default:
            contentType = "text/html"
            break;
    }
    
    fs.readFile(filePath,function (error,pgRes) {   
        if(error){
            res.writeHead(404,{'content-Type':contentType});
            res.write("content noot found")
        }else{
            res.writeHead(200,{'content-Type':contentType});
            res.write(pgRes,'utf-8')
        }         
        res.end();
    })
    
};

http.createServer(printFun).listen(8080,'127.0.0.1');

