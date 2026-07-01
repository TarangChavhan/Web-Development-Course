import React, { useEffect, useState } from 'react'
import '../Style/Login.css'
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [userData,setUserData] = useState({ email: '',
  password: ''
})

  useEffect(()=>{
    if(localStorage.getItem('login')){
      navigate("/");
    }
  })
  const navigate = useNavigate();
  const HandleLogin = async ()=>{
    console.log(userData);
    let result = await fetch('http://localhost:3000/Login',{
      method:'Post',
      body:JSON.stringify(userData),
      headers:{
        'Content-Type':'Application/Json'
      }
    })    
    result = await result.json()
    if(result.success){
        document.cookie ="token="+result.token;
        localStorage.setItem('login',userData.email)
        navigate("/");
    }else{
      alert("Try After Sometime...")
    }
  }

  return (
    <div className='Container'>
      <div className='Card'>
        <h2>Login Here...</h2>
        <p className='Paragraph'>Email</p>     
        <input 
        onChange={(event)=>setUserData({...userData,email:event.target.value})}
        className='Input' type='text' placeholder='Enter Email'></input>   
        <p className='Paragraph'>Password</p>
        <input 
        onChange={(event)=>setUserData({...userData,password:event.target.value})}
        className='Input' type='text' placeholder='Enter Password'></input>
        <button onClick={HandleLogin} className='btnLogin'>Login</button>
        <p className='SingUp'><Link to={'/singUp'}>Don't Have Account? SingUp</Link></p>
      </div>
    </div>
  )
}
export default Login;