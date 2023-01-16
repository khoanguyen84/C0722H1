import React, { useState } from "react";

function Counter(){
    const [count, setCount] = useState(100);
    return (
        <div className="container">
            <h1 className="display-1">{count}</h1>
            <button className="btn btn-warning"
                onClick={() => setCount(count + 1)}
                >Increament</button>
        </div>
    )
}

export default Counter;