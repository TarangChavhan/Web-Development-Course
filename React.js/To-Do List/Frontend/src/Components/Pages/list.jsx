import React, { Fragment, useEffect, useState } from 'react'
import '../Style/list.css'
import { Link } from 'react-router-dom';
const List = () => {

  const [taskData, setTaskData] = useState([]);
  const [selectTask,setSelectTask] = useState([]);

  useEffect(() => {
    getListedData();
  }, [])


  const getListedData = async () => {
    let result = await fetch('http://localhost:3000/tasks',{credentials:'include'});

    let list = await result.json();
    if (list.success) {
      setTaskData(list.result)
    }
  }

  const deleteTask = async (id) => {
    let item = await fetch('http://localhost:3000/delete/' + id, { method: 'delete',credentials:'include' });
    item = await item.json();
    if (item.success) {
      getListedData();
      console.log("item Deleted Successfully");
    }
  }
  const SelectAllItem = (event)=>{
    if(event.target.checked){
      let item = taskData.map((item)=>item._id)
      setSelectTask(item);
    }
    else{
      setSelectTask([])
    }
  }
  const selectSingleItem= (id)=>{
    console.log(id);
    if(selectTask.includes(id)){
      let items = selectTask.filter((item)=>item!=id)
      setSelectTask([items]);
    }else{
      setSelectTask([id,...selectTask])
    }
  }

  const DeletMultipleTask = async()=>{
    console.log("Your Selected ID is :-",selectTask)
    let DeletedItem = await fetch('http://localhost:3000/delete-multiple',{
      method:'delete',
      body:JSON.stringify(selectTask),
      credentials:'include',
      headers:{
        'Content-Type':'Application/JSON'
      }
    })
    let item = await DeletedItem.json();
    if (item.success) {
      getListedData();
      console.log("item Deleted Successfully");
    }
  }

  return (
    <div>
      <h2>Your Work List Is </h2>
      <button onClick={DeletMultipleTask} className='DeleteMultiple'>Delete</button>
      <ul className='task-list'>
        <li className='list-header'><input onChange={SelectAllItem} type='checkbox'/></li>
        <li className='list-header'>Sr No.</li>
        <li className='list-header'>Title</li>
        <li className='list-header'>Description</li>
        <li className='list-header'>Action</li>

        {
          taskData && taskData.map((item, index) => (
            <Fragment key={item._id}>
              <li className='list-item'><input   onChange={() => selectSingleItem(item._id)} checked={selectTask.includes(item._id)} type='checkbox'/></li>
              <li className='list-item'>{index + 1}</li>
              <li className='list-item'>{item.title}</li>
              <li className='list-item'>{item.Description}</li> 
              <li
                className='list-item'>
                <button onClick={() => deleteTask(item._id)}>Delete</button>
                <button><Link to={`/Update/${item._id}`}>Update</Link></button>
              </li>
            </Fragment>
          ))
        }
      </ul>
    </div>
  )
}
export default List;