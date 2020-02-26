var http = require("http");
var url = require("url");

var printFun = function(req,res){
    res.writeHead(200,{'content-Type':'text/html'});
    res.write('<h2>Node.js server runing</h2>')
    var q = url.parse( req.url , true ).query;
    res.write( "name = "+q.name )
    res.write( "<br/>" )
    res.write( "email= "+q.email )
    res.end();
};

http.createServer(printFun).listen(8080,'127.0.0.1');

