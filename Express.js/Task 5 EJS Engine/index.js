import express from 'express';

const app = express();

app.use(express.urlencoded({extended:false}))
app.set('view engine','ejs');

app.get("/",(req,resp)=>{
    resp.render('login')
})
app.post("/addUser",(req,resp)=>{
    resp.render('Details',req.body)
})

app.get("/user",(req,resp)=>{
    const user = ['naman','om','suraj','yash'];
    resp.render('users',{user:user});
})

app.listen(3000);