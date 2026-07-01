import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../Style/addList.css";

function UpdateTask () {

    const [taskData,setTaskData] = useState({
  title: "",
  Description: ""
});
    const navigate = useNavigate();

    const {id} = useParams()

    useEffect(()=>{
        getTask(id);

    },[]);

    const getTask = async (id)=>{
        let result = await fetch(`http://localhost:3000/task/`+id,)
        let list = await result.json();
         if (list.success) {
        setTaskData(list.result)
    }
    }
    const upDateTask = async ()=>{
      let result = await fetch(`http://localhost:3000/update-task`,{
        method:'put',
        credentials:'include',
        body:JSON.stringify(taskData),
        headers:{
          'Content-Type':'Application/Json'
        }});
      result = await result.json();
      if(result){
        navigate('/')
      }
    }
  
  return (
    <div className="addTaskContainer">

      <div className="taskCard">
        <h2 className="title">Update Task</h2>
        <input
          type="text"
          value={taskData.title}
          placeholder="Enter Task Heading"
          className="taskInput"
          onChange={(e)=>setTaskData({...taskData,title:e.target.value})}
        />
        <textarea
          placeholder="Enter The Description Here"
          value={taskData.Description}
          rows={5}
          className="taskTextarea"
           onChange={(e)=>setTaskData({...taskData,Description:e.target.value})}
        ></textarea>

       <button className="addBtn" onClick={upDateTask}>Update Task</button>
      </div>

    </div>
  );
};

export default UpdateTask;