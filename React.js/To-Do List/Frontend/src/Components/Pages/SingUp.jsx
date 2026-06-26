import React, { useState } from 'react'
import '../Style/SingUp.css'
import { Link } from 'react-router-dom';

const SingUp = () => {
    const [UserData,setUserData] = useState();
    const SingUpUser= async()=>{
    console.log(UserData);
    let result = await fetch('http://localhost:3000/singUp',{
      method:'Post',
      body:JSON.stringify(UserData),
      headers:{
        'Content-Type':'Application/Json'
      }
    })    
    result = await result.json()
    if(result){
        document.cookie ="token="+result.token;
    }
    }
  return (
    <div className='Container'>
      <div className='Card'>
        <h2>SingUp Here...</h2>
        <p className='Paragraph'>Name</p>     
        <input 
        onChange={(event)=>setUserData({...UserData,name:event.target.value})}
        className='Input' type='text' placeholder='Enter Name'></input>
        <p className='Paragraph'>Email</p>     
        <input
        onChange={(event)=>setUserData({...UserData,email:event.target.value})}
        className='Input' type='text' placeholder='Enter Email'></input>   
        <p className='Paragraph'>Password</p>
        <input 
        onChange={(event)=>setUserData({...UserData,password:event.target.value})}
        className='Input' type='text' placeholder='Enter Password'></input>
        <button 
        onClick={SingUpUser}
        className='btnLogin'>SingUp</button>
        <p className='SingUp'><Link to={'/Login'}>Already Have Account? Login</Link></p>
      </div>
    </div>
  )
}
export default SingUp;