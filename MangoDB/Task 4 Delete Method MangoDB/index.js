import express, { urlencoded } from 'express'
import mongodb, { MongoClient } from 'mongodb'

const app = express();

const url = "mongodb://localhost:27017";
const DBName = "studentDB"
const client = new MongoClient(url);

app.use(urlencoded({extended:true}))

app.set('view engine','ejs');
client.connect().then((connection)=>{
    const db = connection.db(DBName);
    app.get("/",(req,resp)=>{
        resp.render('DeleteUSer')
    })
    app.post("/submit", async (req,resp)=>{
        const rollnumber = req.body;
        const collection = db.collection('students')

        const result = await collection.deleteOne({rollNumber: req.body.rollNumber});

        console.log(result);
        resp.send(result)
        
    })
})

app.listen(3000)