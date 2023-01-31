import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-success">
            <div className="container">
                <Link className="navbar-brand" to={"/"}>
                    <h3>
                        <i className="fa fa-home text-warning me-2"></i>
                        Homestay
                    </h3>
                </Link>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link" to={"/news"}>News</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={"/about"}>About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link"to={"/foods"}>Foods</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;