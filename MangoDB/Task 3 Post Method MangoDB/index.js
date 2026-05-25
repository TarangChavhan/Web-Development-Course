import express, { urlencoded } from 'express'
import mongoDB, { MongoClient } from 'mongodb'

const app = express()

const url = "mongodb://127.0.0.1:27017"
const DBName = "studentDB"
const client = new MongoClient(url);

app.set('view engine','ejs');
app.use(urlencoded({extended:true}))

client.connect().then((connection)=>{
     const db = connection.db(DBName);

     app.get("/", (req,resp)=>{
        resp.render('Add_user');
     })

     app.post("/Details",async (req,resp)=>{
        const collection = db.collection('students');
        const result = await collection.insertOne(req.body)
        const student = req.body;
        resp.render('User',{student});
     })
     app.get("/Alluser",async (req,resp)=>{
        const collection = db.collection('students');
        const result = await collection.find().toArray();
        resp.send(result);
        console.log(result);
        
     })
})

app.listen(3000)