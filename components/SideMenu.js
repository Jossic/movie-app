import React, { useState } from 'react'


const SideMenu = () => {
    const [count, setCount] = useState(0)

    const increment = () => {
        const plus = count + 1
        setCount(plus)
    }

    const decrement = () => {
        const moins = count - 1
        setCount(moins)
    }

    return (
        <>
            <h1 className="my-4">Baby-Hoshi</h1>
            <div className="list-group">
                <a href="#" className="list-group-item">Category 1</a>
                <a href="#" className="list-group-item">Category 2</a>
                <a href="#" className="list-group-item">Category 3</a>
            </div>
            <div>
                <button onClick={() => increment()} className='btn btn-primary'>+ num</button>
                <button onClick={decrement} className='btn btn-primary'>- num</button>

                <h1>{count}</h1>
            </div>
        </>
    )
}

export default SideMenu
