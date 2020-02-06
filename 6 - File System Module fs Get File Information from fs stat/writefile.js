var http = require("http");
var fs = require("fs");
var printFun = function(req,res){

    fs.stat("employees.json",function (err,stat) {   
        if(err){
            console.log("error",err)
        }else{

            res.writeHead(200,{'content-Type':"text/html"});
            console.log("file state -> " + stat + "<br/>")
            res.write("file state -> " + stat + "<br/>")
            res.write("is file -> " + stat.isFile() + "<br/>")
            res.write("is folder -> " + stat.isDirectory() + "<br/>")

        }         
    })
    
};

http.createServer(printFun).listen(8080,'127.0.0.1');

