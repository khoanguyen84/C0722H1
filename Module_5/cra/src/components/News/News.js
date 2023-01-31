import React from "react";
import { Link } from "react-router-dom";

function News(){
    return (
        <div className="container">
            <h1>News Page</h1>
            <ul>
                <li>
                    <Link to={"/news-detail/1/vn"}>Tin quốc tế</Link>
                </li>
                <li>
                    <Link to={"/news-detail/2/vn"}>Tin trong nước</Link>
                </li>
                <li>
                    <Link to={"/news-detail/3/vn"}>Tin thể thao</Link>
                </li>
            </ul>
        </div>
    )
}

export default News;