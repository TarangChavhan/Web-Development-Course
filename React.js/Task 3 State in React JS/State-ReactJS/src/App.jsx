import { useState } from "react";
import Counter from "./Counter";
function App(){
  const [fruit, setFruit] = useState("Mango")
  function ChangeName(){
     setFruit("Bannana")
  }
  function resetFruit(){
    setFruit("Mango")
  }
  return(
    <div>
      <h1>Fruit Name is :{fruit}</h1>
      <button onClick={ChangeName}>Change Fruit Name</button>
      <button onClick={resetFruit}>Reset</button>
       <Counter/>
    </div>
  )
}
export default App;