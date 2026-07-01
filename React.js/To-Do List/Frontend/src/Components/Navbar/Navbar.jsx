import { Link } from 'react-router-dom';
import '../Navbar/Navbar.css'
import { useState } from 'react';
function Navbar(){
    const [login,setLogin] = useState(localStorage.getItem('login'))
    return(
        <div>
            <div className="Navbar">
                <h2 className="logo">List Application</h2>
                <ul className="list">
                    {
                        login?
                        <>
                        <li className = "item"><Link to="/">List</Link></li>
                        <li className = "item"><Link to="/AddList">AddList</Link></li>
                        <li className = "item"><Link to="/">Logout</Link></li>
                        </>:null
                    }
                </ul>
            </div>
        </div>
    )
}
export default Navbar;