// React.createElement(type,props,children)
// 1. type:
//      + element name
//      + component
// 2. props: một object
// 3. children
//      + text node
//      + react element khác

// lưu ý: khi sử dụng react.createElement thì sẽ được tạo trong DOM ảo (Vitual DOM)
// let h1 = React.createElement("h1", { 
//         className: "h_1",
//         id: "h1"
//     }, "Heading 1");

// let root = ReactDOM.createRoot(document.querySelector('#root'));
// root.render(h1);

// <div class="login-form">
//     <div class="form-group">
//         <label for="email">Username</label>
//         <input type="email" id="email">
//     </div>
//     <div class="form-group">
//         <label for="password">Password</label>
//         <input type="password" id="password">
//     </div>
//     <div class="form-group">
//         <input type="button" value="Login">
//     </div>
// </div>

let div = React.createElement("div",
    {
        className: "login-form"
    },
    React.createElement("div", { className: "form-group" },
        React.createElement("label", { htmlFor: "password" }, "Pasword"),
        React.createElement("input", { type: "password", id: "password", className:"form-control" })),
    React.createElement("div", { className: "form-group" },
        React.createElement("label", { htmlFor: "email" }, "Email"),
        React.createElement("input", { type: "email", id: "email", className:"form-control" })
    ),
        React.createElement("div", { className: "form-group" },
        React.createElement("input", { 
            type: "button", 
            value: "Login",
            onClick : () => alert("hello")
        })
    ))

let root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(div);