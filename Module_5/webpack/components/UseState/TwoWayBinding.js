import React, { useState } from "react";

// useState: quản lý việc thay đổi trạng thái của dữ liệu
// mỗi khi thay đổi state thì component sẽ được re-render

// const [state, setState] = useState(initState)
// + initState: trạng thái khởi tạo.
//      Gồm các loại: 
//              + các kiểu dữ liệu của JS (number, string, boolean, array, object,..)
//              + Callback
// + Lần đâu tiên state = initState
// + setState sẽ dùng để thay đổi state (từ lần thứ 2 trở đi)


function TwoWayBinding() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [usename, setUsename] = useState("");
    const handleRegister = () => {
        console.log({
            "email": email,
            "password": password,
            "usename": usename
        });
    }
    return (
        <div className="container">
            <div className="form-group">
                <input type="email" value={email} className="form-control"
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="form-group">
                <input type="password" className="form-control"
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className="form-group">
                <input type="text" className="form-control"
                    onChange={(e) => setUsename(e.target.value)}
                />
            </div>
            <div className="form-group">
                <button className="btn btn-dark"
                    onClick={handleRegister}
                >Register</button>
                <button className="btn btn-danger"
                    onClick={() => setEmail("duy@gmail.com")}>Update</button>
            </div>
        </div>
    )
}

export default TwoWayBinding;