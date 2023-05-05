import React from "react";
import './style.css';

function Right() {
    return (
        <div className="right">
            <form>
                <input type="Text" placeholder="Email or phone number"></input>
                <input type="Password" placeholder="Password"></input>
                <button id="login">Log In</button>
                <a href="">Forgot password?</a>
                <div className="line"></div>
                <button id="signup">Create new account</button>
            </form>
        </div>
    )
}

export default Right