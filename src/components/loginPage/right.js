//import useState to render components when desired so
import React, { useState } from "react";
//import signup component
import SignUpForm from "./signUpForm.js";
import './style.css';

function Right() {
    const [showModal, setShowModal] = useState(false);

    const handleSignUpClick = () => {
        setShowModal(true)
    }

    return (
        <div className="right">
            <form>
                <input type="Text" placeholder="Email or phone number"></input>
                <input type="Password" placeholder="Password"></input>
                <button id="login">Log In</button>
                <a href="">Forgot password?</a>
                <div className="line"></div>
                <button id="signup" onClick={handleSignUpClick}>Create new account</button>
            </form>
        </div>
    )
}

export default Right