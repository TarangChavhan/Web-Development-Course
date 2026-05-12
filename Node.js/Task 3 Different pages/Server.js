const http = require('http');

http.createServer((req,resp)=>{
    if(req.url=="/"){
        resp.write("<h1>this is page 1</h1>");
    }
    else if(req.url=="/login"){
        resp.write("<h1> Login Here...</h1>")
    }
    else if(req.url == "/register")
    {
        resp.write("Register Here...");
    }
    resp.end();
}).listen(4000);