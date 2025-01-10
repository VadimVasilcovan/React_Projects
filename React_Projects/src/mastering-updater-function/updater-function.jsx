// updater function = A function passed as an argument to setState() usually
//                                  Allow for safe updates based on the previous state
//                                  Used with multiple state updates and asynchronous functions
//                                  Good practice to use updater functions



//When to use the Updater Function ((prevState) => newState)
//1. When the state update depends on the previous state:


import { useState } from "react"


const UpdaterFunction = () => {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(c => c + 1)
        setCount(c => c + 1)
        setCount(c => c + 1)
    }
    

    const decrementCount = () => {
        setCount(c => c - 1)
        setCount(c => c - 1)
        setCount(c => c - 1)
    }

    return(<>
    <div>
        <p>{count}</p>
        <button onClick={incrementCount}>+3</button>
        <button onClick={decrementCount}>-3</button>
    </div>
    </>)
}

export default UpdaterFunction