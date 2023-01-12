const pw = "Password";
const handleLogin = () => alert("Login");
const error = 'error';
let formLogin = (
    <div className="form-login">
        <div className="from-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" className="form-control" />
        </div>
        <div className="from-group">
            <label htmlFor="password">{pw}</label>
            <input type="password" id="password" className="form-control" />
            <span class={`${error == 'error' ? 'error' : 'valid'}`}>This field is required</span>
        </div>
        <div className="from-group">
            <input type="button" value="Login"
                onClick={handleLogin}
            />
        </div>
    </div>
)

let h1 = (
    <div>
        <h1>Heading 1</h1>
    </div>
)

const root = ReactDOM.createRoot(document.querySelector('#root'));
// root.render(formLogin)
// root.render(h1);
root.render(
    <React.Fragment>
        {formLogin}
        {h1}
    </React.Fragment>
);