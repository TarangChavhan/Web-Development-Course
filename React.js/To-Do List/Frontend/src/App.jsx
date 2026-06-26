import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import List from "./Components/Pages/list.jsx";
import AddList from "./Components/Pages/addList.jsx";
import UpdateTask from "./Components/Pages/UpdateTask.jsx";
import Login from "./Components/Pages/Login.jsx";
import SingUp from "./Components/Pages/SingUp.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<List />} />

        <Route path="/AddList" element={<AddList />} />
        <Route path="/Update/:id" element={<UpdateTask />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SingUp" element={<SingUp />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;