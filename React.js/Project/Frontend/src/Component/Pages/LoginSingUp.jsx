import React, { useState } from 'react'
import '../CSS/LoginSignUp.css'

const LoginSignUp = () => {

  const [action, setAction] = useState("Login")

  return (
    <div className='container'>

      <div className='form-box'>

        <h1>EarthMark</h1>

        {/* Buttons */}

        <div className='btn-box'>

          <button
            onClick={() => setAction("Login")}
          >
            Login
          </button>

          <button
            onClick={() => setAction("Sign Up")}
          >
            Sign Up
          </button>

        </div>

        {/* Form */}

        <div className='inputs'>

          {action === "Sign Up" && (
            <input
              type="text"
              placeholder='Enter Your Name'
            />
          )}

          <input
            type="email"
            placeholder='Enter Your Email'
          />

          <input
            type="password"
            placeholder='Enter Password'
          />

        </div>

        <button className='submit-btn'>
          {action}
        </button>

      </div>

    </div>
  )
}

export default LoginSignUp;