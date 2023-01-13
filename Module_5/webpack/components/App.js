import React from "react";
import Pragraph from "./Paragraph/Paragraph";
function App(){
    return (
        <div className="container">
            <h1 className="display-5 bg-warning">Hello anh em</h1>
            <h3 className="display-3" style={{
                color: "red",
                backgroundColor: "blue"
            }}>Learning React</h3>

            <Pragraph/>
        </div>
    )
}

export default App;