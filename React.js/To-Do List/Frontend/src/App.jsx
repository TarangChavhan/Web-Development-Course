import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import List from "./Components/Pages/list.jsx";
import AddList from "./Components/Pages/addList.jsx";
import UpdateTask from "./Components/Pages/UpdateTask.jsx";
import Login from "./Components/Pages/Login.jsx";
import SingUp from "./Components/Pages/SingUp.jsx";
import Protected from "./Components/Pages/Protected.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>

        <Route path="/" element={<Protected><List /></Protected>} />

        <Route path="/AddList" element={<Protected><AddList /></Protected>} />
        <Route path="/Update/:id" element={<Protected><UpdateTask /></Protected>} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SingUp" element={<SingUp />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;