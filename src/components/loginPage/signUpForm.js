import React from "react";
import "./style.css";

function SignUpForm({ onClose }) {
    return (
        <div className="signUp">
            <h2>Sign Up</h2> <span>X</span>
            <p>It's quick and easy</p>
            <div className="line"></div>
            <div className="name">
                <div className="firstName">
                    <div>
                        <input 
                        type="text" 
                        className="inputText"
                        name="firstName"
                        placeholder="First name"
                        ></input>
                    </div>
                </div>
                <div className="secondName">
                    <div>
                    <input 
                        type="text" 
                        className="inputText"
                        name="lastName"
                        placeholder="Last name"
                        ></input>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUpForm;