import './Signup.css'
import {useState} from 'react';

const SignUp = ({signUp, setSignUpStatus, setLoginStatus}) => {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const signUpHandler = (e) => {
        e.preventDefault();
        signUp(userName, password);
        setPassword("")
        setUserName("");
    }
    return(
        <div className="signupContainer">
            <input value={userName} type="email" placeholder="Enter your Email" onChange={(e)=>{setUserName(e.target.value)}}></input>
            <input value={password} type="password" placeholder="Enter your Password" onChange={(e)=>{setPassword(e.target.value)}}></input>
            <button onClick={(e)=> signUpHandler(e)}>Sign Up.</button>
            <p>Already have an account?</p>
            <button onClick={()=>{setLoginStatus(true)}}>Login!</button>
        </div>
    )
}

export default SignUp;