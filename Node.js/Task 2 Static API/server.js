const http = require('http');

const user = [ {
    name:"Tarang",
    age:19,
    Department:"CSE(AI/ML)"
},
{
    name:"Aditya",
    age:20,
    Department:"CSE"
},
{
    name:"Meet",
    age:20,
    Department:"AI/DS"
}
];

http.createServer((req,resp)=>{
    resp.setHeader("Content-Type","application/json");
    resp.write(JSON.stringify(user));
resp.end()
    
}).listen(4000);
console.log("http://localhost:4000");