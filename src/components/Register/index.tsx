import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "./styles";


export interface LoginProps {

}


const LoginPage: React.FunctionComponent<LoginProps> = (props) => {

    const [email, setEmail] = useState("")
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    
    const navigate = useNavigate();

    return (
        <div style={Container}>
            <div className={"titleContainer"}>
                <div>Register</div>
            </div>
            <br />
            <div className={"inputContainer"}>
                <input
                    value={email}
                    placeholder="Enter your email here"
                    onChange={ev => setEmail(ev.target.value)}
                    className={"inputBox"} />
                <label className="errorLabel">{emailError}</label>
            </div>
            <br />
            <div className={"inputContainer"}>
                <input
                    value={email}
                    placeholder="Enter your user name here"
                    onChange={ev => setUserName(ev.target.value)}
                    className={"inputBox"} />
                <label className="errorLabel">{emailError}</label>
            </div>
            <br />
            <div className={"inputContainer"}>
                <input
                    value={password}
                    placeholder="Enter your password here"
                    onChange={ev => setPassword(ev.target.value)}
                    className={"inputBox"} />
                <label className="errorLabel">{passwordError}</label>
            </div>
            <br />
            <div className={"inputContainer"}>
                <input
                    className={"inputButton"}
                    type="button"
                    // onClick={}
                    value={"Sign In"} />
            </div>
        </div>
    )
}

export default LoginPage
    
