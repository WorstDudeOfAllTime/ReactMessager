import './Login.css'
import {useState} from 'react';

const Login = ({login, setLoginStatus, setLoggedIn}) => {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const loginHandler = (e) => {
        e.preventDefault();
        login(userName, password);
        setPassword("")
        setUserName("");
        setLoggedIn(true);
    }
    return(
        <div className="loginContainer">
            <input value={userName} type="email" placeholder="Enter your Email" onChange={(e)=>{setUserName(e.target.value)}}></input>
            <input value={password} type="password" placeholder="Enter your Password" onChange={(e)=>{setPassword(e.target.value)}}></input>
            <button onClick={(e)=> loginHandler(e)}>Login</button>
            <p>Don't have an account?</p>
            <button onClick={()=>{setLoginStatus(false)}}>Signup!</button>
        </div>
    )
}

export default Login;