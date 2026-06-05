import { NavLink } from "react-router-dom";

function NavBar(){
    return(
        <div>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/Home">Home</NavLink>
            <NavLink to="/Login">Login</NavLink>
        </div>
    )
}
export default NavBar;