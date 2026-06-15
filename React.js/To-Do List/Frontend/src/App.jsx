import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import List from "./Components/Pages/list.jsx";
import AddList from "./Components/Pages/addList.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<List />} />

        <Route path="/AddList" element={<AddList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;