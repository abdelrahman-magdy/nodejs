var http = require("http");
var dtm = require("./module");

var printFun = function(req,res){
    res.writeHead(200,{'content-Type':'text/plain'});
    res.end('<h1>Node.js server runing</h1>' + dtm.getDate());
};

http.createServer(printFun).listen(8080,'127.0.0.1');


