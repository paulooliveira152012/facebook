import React from "react";
import "./style.css";
import x from "../../assets/images/x.png"

function SignUpForm({ onClose }) {
    return (
        <div className="signUp">
            <div className="top">
                <h2>Sign Up</h2> <img src={x} onClick={onClose}></img>
                <p>It's quick and easy</p>
            </div>

            <div className="line"></div>
            
            <div className="bottom">

            </div>
            
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