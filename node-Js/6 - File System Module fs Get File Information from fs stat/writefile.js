var http = require("http");
var fs = require("fs");
var printFun = function(req,res){

    fs.writeFile("employees.json",'customer=younen sami',function (err) {   
        if(err){
            console.log("error",err)
        }else{

            fs.readFile('customer.txt',function (err,data){
                if(err)
                    return console.log(err)

                console.log('data>>>>>' + stat + "<br/>")
                fs.write(200,{'content-Type':"text/html"});
                res.write("file state -> " + data.toStrong() + "<br/>")
            });

        }         
    })
    
};

http.createServer(printFun).listen(8080,'127.0.0.1');

