import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/security/AuthContext";

function LoginComponent() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // const [isAuthenticated, setIsAuthenticated] = useState(false);

    const [message, setMessage] = useState("")

    const navigate = useNavigate();

    const authContext = useContext(AuthContext);

    function handleUsernameChange(event) {
        setUsername(event.target.value);
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }

    function handleLogin() {

        if (authContext.login(username, password)) {
            setMessage("Loggedin successfully.");
            navigate(`/welcome/${username}`);
        } else {
            setMessage("Incorrect credentials.");
        }

    }

    return (
        <div className="loginComponent container">

            {
                authContext.isAuthenticated ? 
                    <div className="text-success">{message}</div>
                :
                    <div className="text-danger">{message}</div>
            }
            


            <div className="row">
                <div className="col">
                    <form action="">
                        <div className="row mb-3 justify-content-center">
                            <div className="col-4">
                                <label className="form-label" htmlFor="username">Username : </label>
                                <input type="text" className="form-control" name="username" id="username" value={username} onChange={handleUsernameChange} placeholder="email@domain.com"/>
                            </div>
                        </div>
                        <div className="row mb-3 justify-content-center">
                            <div className="col-4">
                                <label className="form-label" htmlFor="password">Password : </label>
                                <input className="form-control" type="password" name="password" id="password" value={password} onChange={handlePasswordChange}/>
                            </div>
                        </div>
                        <div className="row mb-3 justify-content-center">
                            <div className="col-4">
                                <button onClick={handleLogin} className="btn btn-primary" type="button" name="login">Login</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )

}

export default LoginComponent;