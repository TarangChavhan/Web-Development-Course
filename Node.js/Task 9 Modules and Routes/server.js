const http = require('http');
const login = require('./Modules/login');
const Home = require('./Modules/Home');
http.createServer((req,res)=>{
    if(req.url=="/"){
        login(req,res);
    }else if(req.url=="/submit"){
        Home(req,res);
    }
}).listen(4500);