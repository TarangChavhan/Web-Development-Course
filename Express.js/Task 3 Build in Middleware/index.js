import express from 'express';
import morgan from 'morgan';
import path from 'path';

const app = express();

// Built in Middleware
app.use(express.urlencoded({extends:false}));
app.use(express.static('public'));

//External Middleware
app.use(morgan('dev'));

app.get("/",(req,resp)=>{
    const absPath = path.resolve('Pages/login.html')
    resp.sendFile(absPath);
});

app.post("/submit",(req,resp)=>{
    const absHome = path.resolve('Pages/home.html')
    resp.sendFile(absHome);
    console.log("The body is ",req.body);
});

app.get("/wait",(req,resp)=>{
    setTimeout(()=>{
        resp.send("Run After 5 Second")
    },5000);
})


app.listen(3000);