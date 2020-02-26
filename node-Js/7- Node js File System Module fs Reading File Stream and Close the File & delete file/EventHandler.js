var http = require("http");

var events = require("events");
var eventEmitter = new events.EventEmitter();

var printFun = function(req,res){

    // EventHandler
    var connected = function (){
        console.log("now i am connected to database");
    };
    
    // disconnect
    eventEmitter.on("disconnect",()=>{console.log("now i am disconnected to database")});
    
    // connect
    eventEmitter.on("connect",connected);
    
    //to fire an event call emit
    eventEmitter.emit("connect");
    setTimeout(()=>{
        eventEmitter.emit("disconnect");
    },3000)
    
};

http.createServer(printFun).listen(8070,'127.0.0.1');

