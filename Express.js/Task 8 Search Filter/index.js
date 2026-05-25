import express from 'express';
import UserData from './User.json' with {type:'json'} ;

const app = express();
console.log(UserData);

app.get("/",(req,resp)=>{
    resp.send(UserData)
})

app.get('/user/:name',(req,resp)=>{
    const name = req.params.name;
    const filteData = UserData.filter((user)=>user.name==name)
    resp.send(filteData)
})

app.get('/id/:id',(req,resp)=>{
    const id = req.params.id;
    const filteData = UserData.filter((user)=>user.id==id)
    resp.send(filteData)
})

app.listen(4000)