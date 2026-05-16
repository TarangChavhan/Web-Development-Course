const http = require('http');
const fs = require('fs');
const queryString = require('querystring');
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
            //chunks Getting Here
            let databody = [];
            req.on('data',(chunks)=>{
                databody.push(chunks);
            });

            // converting into readable format 
            req.on('end',()=>{
                let rawdata = Buffer.concat(databody).toString();
                let readable = queryString.parse(rawdata);
                console.log(readable);
            });


            res.write("Login Sucessfully");
            res.end()
        }
    });

}).listen(3000);