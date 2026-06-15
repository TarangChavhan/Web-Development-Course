import { Link } from 'react-router-dom';
import '../Navbar/Navbar.css'
function Navbar(){
    return(
        <div>
            <div className="Navbar">
                <h2 className="logo">List Application</h2>
                <ul className="list">
                    <li className = "item"><Link to="/">List</Link></li>
                    <li className = "item"><Link to="/AddList">AddList</Link></li>
                </ul>
            </div>
        </div>
    )
}
export default Navbar;