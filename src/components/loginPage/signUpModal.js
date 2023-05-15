import React from "react";
// import SignUpForm from "./SignUpForm";
import SignUpForm from "./signUpForm";

function signUpModal(props) {
  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close-button" onClick={props.onClose}>
          Close
        </button>
        <SignUpForm />
      </div>
    </div>
  );
}

export default signUpModal;
