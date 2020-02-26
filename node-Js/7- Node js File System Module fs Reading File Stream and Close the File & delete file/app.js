var http = require("http");
var fs = require("fs");
var printFun = function(req,res){

    fs.open("employees.json",'r+',function (err,fd) {   
        if(err)
            console.log("error",err)
        var buffer = new Buffer(1024);
        fs.read(fd,buffer,0,buffer.length,null,function (err,bytes) {
            if(err)
                console.log("error",err)
            console.log("bytes  in files=" + bytes);
            res.write("file state -> " + bytes);
            res.write("<br/> bytesin files ="+buffer.slice(0,100).toString());
            res.end();
        })

    })
    
};

http.createServer(printFun).listen(8080,'127.0.0.1');

