import React from "react";
import Pragraph from "./Paragraph/Paragraph";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './Layout/Header';
import Main from './Layout/Main';
import Footer from './Layout/Footer';

// function App(){
//     return (
//         <div className="container">
//             <h1 className="display-5 bg-warning">Hello anh em</h1>
//             <h3 className="display-3" style={{
//                 color: "red",
//                 backgroundColor: "blue"
//             }}>Learning React</h3>

//             <Pragraph/>
//         </div>
//     )
// }

function App() {
    return (
        <React.Fragment>
            <Header />
            <Main />
            <Footer/>
        </React.Fragment>
    )
}

export default App;