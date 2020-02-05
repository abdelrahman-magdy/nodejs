var http = require("http");
// var url = require("url");
var fs = require("fs");

var printFun = function(req,res){
    if(req.url == '/home'){
        fs.readFile("index.html",function (error,pgRes) {   
            if(error){
                res.writeHead(404,{'content-Type':'text/html'});
                res.write("content noot found")
            }else{
                res.writeHead(200,{'content-Type':'text/html'});
                res.write(pgRes)
            }         
            res.end();
        })
    }
};

http.createServer(printFun).listen(8080,'127.0.0.1');

