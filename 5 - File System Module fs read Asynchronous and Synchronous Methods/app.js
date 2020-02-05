var http = require("http");
var fs = require("fs");
var printFun = function(req,res){

    fs.readFile("employees.json",function (error,data) {   
        if(error){
            res.writeHead(404,{'content-Type':"text/json"});
            res.write("content not found")
        }else{
            // res.writeHead(200,{'content-Type':contentType});
            // res.write(pgRes,'utf-8')
            console.log("-Asynchronous- Read , content=" + data)
        }         
        res.end();
    })
    var data = fs.readFileSync("employees.json");
    console.log("_synchronous_ Read , content=" + data)
    res.writeHead(200,{'content-Type':"text/json"});
    res.write("_synchronous_ Read , content=" + data)
    
};

http.createServer(printFun).listen(8080,'127.0.0.1');

