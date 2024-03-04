import { useState } from "react";



const Counter = () => {
    const [count, setCount] = useState(0)

    const plus = () => {
        setCount(count + 1)
    }

    const minus = () => {
        if (count > 1) setCount(count - 1)
    }


    return (
        <div className="flex gap-4 text-xl justify-center">
           <button title="-" changeCount={minus} className="mx-10 bg-orange-500 rounded-lg text-white text-xl px-4 shadow-md" />
           <p className="">{count}</p>
           <button title="+" changeCount={plus} className="mx-10 bg-orange-500 rounded-lg text-white text-xl px-4 shadow-md"/>
        </div>
    )
}
export default Counter