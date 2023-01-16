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


function TwoWayBinding2() {
    const [state, setState] = useState({
        email: "",
        password: "",
        usename: "",
        age: 0
    })

    const handleInput = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    const handleRegister = () => {
        console.log(state);
    }

    const { email, password, usename, age } = state;
    return (
        <div className="container">
            <div className="form-group">
                <input type="email" name="email" value={email} className="form-control"
                    onChange={handleInput}
                />
            </div>
            <div className="form-group">
                <input type="password" value={password} name="password" className="form-control"
                    onChange={handleInput}
                />
            </div>
            <div className="form-group">
                <input type="text" name="usename" value={usename} className="form-control"
                    onChange={handleInput}
                />
            </div>
            <div className="form-group">
                <input type="number" name="age" value={age} className="form-control"
                    onChange={handleInput}
                />
            </div>
            <div className="form-group">
                <button className="btn btn-dark"
                    onClick={handleRegister}
                >Register</button>
                <button className="btn btn-danger"
                    onClick={() => setState({
                        email: "a@gmail.com",
                        password: "1234",
                        usename: "k",
                        age: 10
                    })}>Update</button>
            </div>
        </div>
    )
}

export default TwoWayBinding2;