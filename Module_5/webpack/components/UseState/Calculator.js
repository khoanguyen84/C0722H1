import React, { useState } from "react";

function Calculator(){
    const [number_1, setNumber_1] = useState(0)
    const [number_2, setNumber_2] = useState(0)
    const [result, setResult] = useState(0)
    return (
        <div className="container">
            <div className="row">
                <label>Number 1</label>
                <input type="number" name="number_1" className="form-control"
                    onInput={(e) => setNumber_1(Number(e.target.value))}
                />
            </div>
            <div className="row">
                 <label>Number 2</label>
                <input type="number" name="number_2" className="form-control"
                    onInput={(e) => setNumber_2(Number(e.target.value))}
                />
            </div>
            <div className="row">
                <label>Result</label>
                <input type="number" name="result" value={result} className="form-control"/>
            </div>
            <div className="row">
                <button className="btn btn-primary"
                    onClick={() => setResult(number_1 + number_2)}
                >Sum</button>
            </div>
        </div>
    )
}

export default Calculator;