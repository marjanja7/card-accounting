import { useState } from "react";


const Counter = () => {
    const [count, setCount] = useState(1)

    const plus = () => {
        setCount(count + 1)
    }

    const minus = () => {
        if (count > 1) setCount(count - 1)
    }

    return (
        <div className="flex gap-4 text-xl">
            <button onClick={minus}>
                {''}
            </button>
            <p className="">{count}</p>
            <button onClick={plus}>
                {''}
            </button>
        </div>
    )
}
export default Counter