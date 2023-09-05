import { useState } from "react"

export default function Counter({value}) {
    const [count,setCount] = useState(value);
    function incrementHandler(){
        setCount(count+1);
    }
    function decrementHandler(){
        setCount(count-1);
    }
    return(
        <>
            <div>Counter Component</div>
            <div>{count}</div>
            <div>
                <button onClick={incrementHandler}>Increment</button>
                <button onClick={decrementHandler}>Decrement</button>
            </div>
        </>
    )
}