import React, { useState } from "react";

const gifts = ["Laptop", "iPhone 14", "App Watch", "Keyboard", "Mouse"];

function RandomGift() {
    const [gift, setGift] = useState(null);

    const handleGetGift = () => {
        let randomNumber = Math.floor(Math.random() * gifts.length);
        setGift(randomNumber)
    }
    return (
        <div className="container">
            <h1>{gifts[gift] || "Click on button bellow to get gift"}</h1>
            <button className="btn btn-dark"
                onClick={handleGetGift}
            >Get Gift</button>
        </div>
    )
}

export default RandomGift;