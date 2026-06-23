import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import List from "./Components/Pages/list.jsx";
import AddList from "./Components/Pages/addList.jsx";
import UpdateTask from "./Components/Pages/UpdateTask.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<List />} />

        <Route path="/AddList" element={<AddList />} />
         <Route path="/Update/:id" element={<UpdateTask />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;