import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
// Function component
// Class component

function App(){
    return (
        <div className="container">
            <h1 className="display-5 bg-warning">Hello anh em</h1>
            <h3 className="display-3" style={{
                color: "red",
                backgroundColor: "blue"
            }}>Learning React</h3>
        </div>
    )
}

// class App extends React.Component {
//     render() {
//         return (
//             <div className="container">
//                 <h1 className="display-5 bg-warning">Hello anh em</h1>
//                 <h3 className="display-3" style={{
//                     color: "red",
//                     backgroundColor: "blue"
//                 }}>Learning React</h3>
//             </div>
//         )
//     }
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)