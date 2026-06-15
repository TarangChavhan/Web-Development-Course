import { MongoClient } from "mongodb";
const url="mongodb+srv://chavhannaman2:Naman@cluster0.bjitj.mongodb.net/?appName=Cluster0";
const DBName ="ToDoList";
const clint = new MongoClient(url);
export const collectionName = "todo";
export const connection = async ()=>{
    const connect = await clint.connect();
    return connect.db(DBName)
}