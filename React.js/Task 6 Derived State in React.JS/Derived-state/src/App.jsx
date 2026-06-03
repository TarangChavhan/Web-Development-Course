import { useState } from "react";

function App(){
  const [Users,setUsers]=useState([]);
  const [User,setUser] = useState("");

  const Total = Users.length;
  const Last = Users[Total-1];
 const unique= [...new Set(Users)].length;

  function AddUser(){
    setUsers([...Users,User])
  }
  return(
    <div>
      <input type="text" placeholder="Enter The name" onChange={(e)=>setUser(e.target.value)}></input>
      <button onClick={AddUser}>Add User</button>
      <h2><ul><li>Original Data</li></ul></h2>
      {
        Users.map((item,index)=>(
          <h4 key={index}>{item}</h4>
        ))
      }
      <h2><ul><li>Information</li></ul></h2>
      <h4>Total is :{Total}</h4>
      <h4>Last Enter Value is : {Last}</h4>
      <h4>Unique Values in Array is : {unique}</h4>
    </div>
  )
}
export default App;