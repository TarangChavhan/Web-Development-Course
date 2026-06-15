import express from 'express'
import { collectionName, connection } from './dbConfig.js';
import cors from 'cors'

const app = express();

app.use(cors())
app.use(express.json());

app.post("/add-task", async(req,resp)=>{
    const db = await connection()
    const collection = await db.collection(collectionName);
    const result = await collection.insertOne(req.body);
    if(result){
        resp.send({message:"New Task Added",sucess:true,result})
    } else{
        resp.send({message:"Task Not Added",sucess:false})
    }
    resp.send("Working...");
})
app.get("/tasks", async(req,resp)=>{
    const db = await connection()
    const collection = await db.collection(collectionName);
    const result = await collection.find().toArray();
    if(result){
        resp.send({message:"Task Listed Sucessfully",success:true,result})
    } else{
        resp.send({message:"Error While Fetching Data",success:false})
    }
    resp.send("Working...");
})
app.listen(3000);