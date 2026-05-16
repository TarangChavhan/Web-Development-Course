const fs = require('fs');
function login(req,res){
    fs.readFile('Pages/login.html','utf-8',(error,data)=>{
            if(error){
                res.write("Server Error");
                res.end();
            }else{
                 res.writeHead(200,{"content-type":"text/html"});
                res.write(data);
                res.end();
            }
        })
}
module.exports = login;