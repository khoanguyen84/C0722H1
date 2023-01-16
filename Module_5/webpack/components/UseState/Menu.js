import React, { useState } from "react";

const menus = ["Dashboard", "Staff Manager", "Product Manager", "Bill Manager", "Revenue Manager"]
function Menu() {
    const [menu, setMenu] = useState("Dashboard")
    return (
        <div className="container">
            <ul className="list-group">
                {
                    menus.map(item => (
                        <li key={item} role='button' 
                            className={`${item === menu ? 'bg-danger' : 'bg-success'} list-group-item text-white`}
                            onClick={() => setMenu(item)}
                        >{item}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Menu;