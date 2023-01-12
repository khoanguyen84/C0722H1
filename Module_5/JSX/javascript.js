// let h1 = document.createElement("h1");
// h1.innerText = "Heading 1";
// document.querySelector('#root').appendChild(h1);

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

let divLogin = document.createElement("div");
divLogin.className = "login-form";

let divFormGroup_1 = document.createElement("div");
divFormGroup_1.className = "form-group";

let label_1 = document.createElement('label');
label_1.innerText = "Username";
label_1.htmlFor = "email";
let input_1 = document.createElement("input");
input_1.type = "email";
input_1.id = "email";
input_1.className = "form-control";

divFormGroup_1.appendChild(label_1);
divFormGroup_1.appendChild(input_1);

let divFormGroup_2 = document.createElement("div");
divFormGroup_2.className = "form-group";

let label_2 = document.createElement('label');
label_2.innerText = "Password";
label_2.htmlFor = "password";
let input_2 = document.createElement("input");
input_2.type = "password";
input_2.id = "password";
input_2.className = "form-control";

divFormGroup_2.appendChild(label_2);
divFormGroup_2.appendChild(input_2);

let divFormGroup_3 = document.createElement("div");
divFormGroup_3.className = "form-group";

let input_3 = document.createElement("input");
input_3.type = "button";
input_3.value = "Login";

input_3.onclick = function(){
    alert("Login")
}
divFormGroup_3.appendChild(input_3);

divLogin.appendChild(divFormGroup_1);
divLogin.appendChild(divFormGroup_2);
divLogin.appendChild(divFormGroup_3);

document.querySelector('#root').appendChild(divLogin);