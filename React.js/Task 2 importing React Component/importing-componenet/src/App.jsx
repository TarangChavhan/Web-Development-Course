import User, { Setting, Login, Name } from "./User";
function App(){
  return (
    <div>
     <User/>
    <h1>Hello from App.jsx</h1>
    <Setting/>
    <Login/>
    <h1>{Name}</h1>
    </div>
  )
}


export default App