import React from "react";
import { useParams } from "react-router-dom";

function NewsDetail() {

    const { newsid, lang } = useParams();
    return (
        <div className="container">
            <h1>News ID: {lang}-{newsid}</h1>
        </div>
    )
}

export default NewsDetail;