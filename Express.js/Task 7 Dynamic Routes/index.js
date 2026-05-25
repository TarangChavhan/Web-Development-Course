import express from 'express'
const app = express();
app.get("/", (req, resp) => {
    const User = ['Naman', 'Tarang', 'Om', 'Suraj', 'Yash'];
    let data = '<ul>';
    for (let i = 0; i < User.length; i++) {
        data += `
               <li>
               <a href="/User/${User[i]}">${User[i]}
               </a>
               </li>`;
    }
    resp.send(data)
})

app.get("/User/:name",(req,resp)=>{
    console.log(req.params.name);
    const display_name = req.params.name;
    resp.send(`Hello i am ${display_name}`)    
})

app.listen(3000)