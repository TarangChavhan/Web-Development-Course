import { Link, Links, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import NavBar from "./NavBar";

function App() {
  return (

    <div>
      <Routes>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Login" element={<Login/>}/>
 
      </Routes>

      <NavBar/>
      <hr></hr>

      <h1>Index Page</h1>
    </div>
  )
}
export default App;