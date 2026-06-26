import express from 'express'
import { collectionName, connection } from './dbConfig.js';
import cors from 'cors'
import { ObjectId } from 'mongodb';
import jwt from 'jsonwebtoken'

const app = express();

app.use(cors())
app.use(express.json());

app.delete("/delete/:id", async(req,resp)=>{
    const db = await connection()
    const collection = await db.collection(collectionName);
    const result = await collection.deleteOne({_id:new ObjectId(req.params.id)});
    if(result){
        resp.send({message:"Task Deleted",success:true,result})
    } else{
        resp.send({message:"Task Not Deleted, Try again After Sometime...",sucess:false})
    }
    resp.send("Working...");
})

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



app.get("/task/:id", async(req,resp)=>{
    const db = await connection()
    const collection = await db.collection(collectionName);
    const id = req.params.id;
    const result = await collection.findOne({_id:new ObjectId(id)});
    if(result){
        resp.send({message:"Task Listed Sucessfully",success:true,result})
    } else{
        resp.send({message:"Error While Fetching Data",success:false})
    }
    resp.send("Working...");
})

app.put("/update-task", async(req,resp)=>{
    const db = await connection()
    const collection =  db.collection(collectionName);
    const {_id,...fields} = req.body;
    const update = {$set:fields}
    console.log(fields);
    
    const result = await collection.updateOne({_id:new ObjectId(_id)},update);

    if(result){
        resp.send({message:"Task Updated Sucessfully",success:true,result})
    } else{
        resp.send({message:"Error While Updating Data",success:false})
    }
})

app.delete("/delete-multiple", async(req,resp)=>{
    const db = await connection()
    const collection =  db.collection(collectionName);
    const Ids = req.body;
    const deleteTaskIDS =  Ids.map((item)=>new ObjectId(item))
    const result = await collection.deleteMany({_id:{$in:deleteTaskIDS}});
    if(result){
        resp.send({message:"Task Deleted",success:true,result})
    } else{
        resp.send({message:"Task Not Deleted, Try again After Sometime...",sucess:false})
    }
})

app.post("/singUp",async (req,resp)=>{
    const UserData = req.body;
    if(UserData.email && UserData.password){
        const db = await connection();
        const collection = await db.collection('users');
        const result = await collection.insertOne(UserData);
        if(result){
            jwt.sign(UserData,'Google',{expiresIn:'5d'},(error,token)=>{
                resp.send({
                    success: true,
                    msg: 'singup done',
                    token
                })
            })
        }
    } else{
        resp.send({
            success: false,
            msg: 'signup not done'
        })
    }
})


app.post("/Login",async (req,resp)=>{
    const UserData = req.body;
    if(UserData.email && UserData.password){
        const db = await connection();
        const collection = await db.collection('users');
        const result = await collection.findOne({email: UserData.email,
    password: UserData.password});
        if(result){
            jwt.sign(UserData,'Google',{expiresIn:'5d'},(error,token)=>{
                resp.send({
                    success: true,
                    msg: 'Login Successfully',
                    token
                })
            })
        }
    } else{
        resp.send({
            success: false,
            msg: 'signup not done',
        })
    }

})


app.listen(3000);