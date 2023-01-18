import React, { useState } from "react";
import DataManager from './DataManager';

// Side effect
// mounted - unmouted: gắn vào DOM và gở ra khỏi DOM
// useEffect(callback, deps)
// + callback:  + luôn thực hiện khi component được mounted vào DOM
//              + Ưu tiên render UI trước, rồi mới thực hiện callback        
// + Cleanup Function: sẽ được thực thi, khi component được unmouted khỏi DOM
// + deps (dependency) là 1 mảng và có 3 trường hợp
//      + useEffect(callback)
//          - Khi cập nhật state (component sẽ được re-render) thì callback sẽ được gọi lại
//      + useEffect(callback, [])
//          - callback chỉ được gọi 1 lần duy nhất, khi component được mounted vào DOM
//      + useEffect(callback, [deps,..])
//          - callback chỉ được gọi gọi lại khi danh sách state trong mảng deps thay đổi

function UseEffect() {
    const [toogle, setToogle] = useState(false);
    return (
        <div className="container">
            <button className="btn btn-dark"
                onClick={() => setToogle(!toogle)}
            >Toogle Post Component</button>
            {toogle && <DataManager />}
        </div>
    )
}

export default UseEffect;