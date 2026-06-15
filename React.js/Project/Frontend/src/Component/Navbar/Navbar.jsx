import React from 'react'
import logo from '../../assets/logo.jpg'
import '../Navbar/Navbar.css'
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <div className='Navbar' >
                <div className='Logo'>
                    <img src={logo} alt="img here" height={"50px"} />
                    <h2 className='Title'>EarthMark</h2>
                </div>
                <ul className="NavLinks">
                    <li className="item">
                        <Link to="/">Home</Link>
                    </li>

                    <li className="item">
                        <Link to="/houses">Houses</Link>
                    </li>

                    <li className="item">
                        <Link to="/plots">Plots</Link>
                    </li>

                    <li className="item">
                        <Link to="/farms">Farms</Link>
                    </li>

                    <li className="item">
                        <Link to="/industrial">Industrial</Link>
                    </li>

                    <li className="item">
                        <Link to="/services">Services</Link>
                    </li>

                    <li className="item">
                        <Link to="/contact-us">Contact Us</Link>
                    </li>
                </ul>
                <button className='loginbtn'> <Link to="/login">Login</Link></button>
            </div>
            <hr></hr>
        </div>
    )
}

export default Navbar
