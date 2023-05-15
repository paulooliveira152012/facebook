import React, { useState } from "react";
import SignUpForm from "./signUpForm.js";
import "./style.css";

function Right() {
  const [showModal, setShowModal] = useState(false);

  const handleSignUpClick = (event) => {
    event.preventDefault();
    setShowModal(true);
  };

  return (
    <div className="right">
      <form>
        <input type="text" placeholder="Email or phone number"></input>
        <input type="password" placeholder="Password"></input>
        <button id="login">Log In</button>
        <a href="">Forgot password?</a>
        <div className="line"></div>
        <button id="signup" onClick={handleSignUpClick}>
          Create new account
        </button>
        {showModal && (
          <div className="modal-container">
            <div className="modal-background" onClick={() => setShowModal(false)}></div>
            <div className="modal">
              <SignUpForm onClose={() => setShowModal(false)} />
            </div>
          </div>
        )}
      </form>
    </div>
  );
}

export default Right;
