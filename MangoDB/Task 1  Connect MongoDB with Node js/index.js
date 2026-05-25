import express from "express";
import mangoDB, { MongoClient } from "mongodb";

const app = express();      

const dbName = 'studentDB';
const url = 'mongodb://127.0.0.1:27017';

const client = new MongoClient(url);

async function dbConnection() {
    await client.connect();
    const db = client.db(dbName);
    
    const collection = db.collection('students')

    const result = await collection.find().toArray()

    console.log(result)
}
dbConnection();

app.get("/",(rep,resp)=>{
    resp.send("Serer is Running")
    
})

app.listen(3000)