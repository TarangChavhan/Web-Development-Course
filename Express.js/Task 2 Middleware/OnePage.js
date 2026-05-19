import express from 'express';

const app = express();

function checkAge(req,resp,next){
    if(!req.query.age ||req.query.age<=19){
        resp.send("<h1>The Page is not avilable Because Of you are under age</h1>")
    }
    else{
        next();
    }
}

app.get("/",checkAge,(req,resp)=>{
    resp.send("<h1>Hello </h1>")
})

app.get("/About",(req,resp)=>{
    resp.send("<h1>Hello About</h1>")
})

app.get("/Home",(req,resp)=>{
    resp.send("<h1>Hello Home</h1>")
})

app.get("/Login",(req,resp)=>{
    resp.send("<h1>Hello Login</h1>")
})
app.listen(3000);