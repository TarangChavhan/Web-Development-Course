import express from 'express'
import {MongoClient} from 'mongodb'

const app = express()

const url = "mongodb://127.0.0.1:27017";
const dbName = 'studentDB'
const client = new MongoClient(url);

app.set('view engine','ejs');


app.get("/", async (req,resp)=>{   
    await client.connect();

    const db = client.db(dbName);
    const collection = db.collection('students');

    const result = await collection.find().toArray();
    resp.render('home',{result})
})
app.listen(3200)