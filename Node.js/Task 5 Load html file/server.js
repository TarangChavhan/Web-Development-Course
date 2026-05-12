const http = require('http');
const fs = require('fs');

http.createServer((req,resp)=>{
    fs.readFile('Pages/site.html','utf-8',(err,data)=>{
        if(err){
            resp.writeHead(200,{"content-Type":"text/plain"});
            resp.write("Server Error Try again after some time");
            resp.end();
        }
        resp.writeHead(200,{"content-Type":"text/html"});
        resp.write(data);
        resp.end();

    })
}).listen(5000);