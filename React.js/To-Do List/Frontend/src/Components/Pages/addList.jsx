import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Style/addList.css";

function AddList () {
  const [taskData,setTaskData] = useState();
  const navigate = useNavigate();

  const SendData=async ()=>{
    console.log(taskData);
    let result = await fetch('http://localhost:3000/add-task',{
      method:'Post',
      body:JSON.stringify(taskData),
      credentials:'include',
      headers:{
        'Content-Type':'Application/Json'
      }
    })    
    result = await result.json()
    if(result){
      navigate("/");
    }
  }
  return (
    <div className="addTaskContainer">

      <div className="taskCard">
        <h2 className="title">Add Task</h2>
        <input
          type="text"
          placeholder="Enter Task Heading"
          className="taskInput"
          onChange={(e)=>setTaskData({...taskData,title:e.target.value})}
        />
        <textarea
          placeholder="Enter The Description Here"
          rows={5}
          className="taskTextarea"
           onChange={(e)=>setTaskData({...taskData,Description:e.target.value})}
        ></textarea>

       <button className="addBtn" onClick={SendData}>Add Task</button>
      </div>

    </div>
  );
};

export default AddList;