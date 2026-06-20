import React, { Fragment, useEffect, useState } from 'react'
import '../Style/list.css'
const List = () => {

  const [taskData, setTaskData] = useState([]);

  useEffect(() => {
    getListedData();
  }, [])


  const getListedData = async () => {
    let result = await fetch('http://localhost:3000/tasks');
    let list = await result.json();
    if (list.success) {
      setTaskData(list.result)
    }
  }

  const deleteTask = async (id) => {
    let item = await fetch('http://localhost:3000/delete/'+id,{method:'delete'});
    item = await item.json();
    if (item.success) {
      getListedData();
      console.log("item Deleted Successfully");
    }
  }

  return (
    <div>
      <h2>Your Work List Is </h2>
      <ul className='task-list'>
        <li className='list-header'>Sr No.</li>
        <li className='list-header'>Title</li>
        <li className='list-header'>Description</li>
        <li className='list-header'>Action</li>

        {
          taskData && taskData.map((item, index) => (
            <Fragment key={item._id}>
              <li className='list-item'>{index + 1}</li>
              <li className='list-item'>{item.title}</li>
              <li className='list-item'>{item.Description}</li>
              <li className='list-item'><button onClick={()=>deleteTask(item._id)}>Delete</button> <button>Update</button></li>
            </Fragment>
          ))
        }
      </ul>
    </div>
  )
}

export default List;
