import { useState } from "react";
function Counter(){
    const [counter,setCounter] = useState(0);
    function Increment(){
        setCounter(counter+1)
    }
    function Decrement(){
        setCounter(counter-1)
    }
    function Reset(){
        setCounter(0);
    }
    return (
        <div>
            <h1>Counter Value is : {counter}</h1>
            <button onClick={Increment}>Increment Counter</button>
            <button onClick={Decrement}>Decrement Counter</button>
            <button onClick={Reset}>Reset</button>
        </div>
    )
}
export default Counter;