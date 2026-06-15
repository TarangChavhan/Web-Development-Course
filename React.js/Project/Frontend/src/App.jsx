import { Route, Routes } from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";
import Farms from "./Component/Pages/Farms.jsx";
import Home from "./Component/Pages/Home.jsx";
import Houses from "./Component/Pages/Houses.jsx"
import Industrial from "./Component/Pages/Industrial.jsx";
import LoiginSingnUp from "./Component/Pages/LoginSingUp.jsx";
import Plots from './Component/Pages/Plots.jsx'
import Services from "./Component/Pages/Services.jsx"
import ContactUs from './Component/Pages/Contact_Us.jsx'


function App(){
  return(
  <div>
     <Navbar/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/houses" element={<Houses />} />
        <Route path="/plots" element={<Plots />} />
        <Route path="/farms" element={<Farms />} />
        <Route path="/industrial" element={<Industrial />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/login" element={<LoiginSingnUp />} />
      </Routes>

  </div>
  )
}
export default App;