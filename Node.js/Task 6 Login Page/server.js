const http = require('http');
const fs = require('fs');

http.createServer((req,res)=>{
    fs.readFile('Pages/login.html','utf-8',(error,data)=>{
        if(error){
            res.write("Server Error");
            res.end();
        }
        if(req.url=="/"){
            res.writeHead(200,{"content-type":"text/html"});
            res.write(data);
            res.end()
        }
        if(req.url=="/submit"){
            res.write("Login Sucessfully");
            res.end()
        }
    });

}).listen(5000);