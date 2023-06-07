import React, { useState } from "react";
// import SignUpForm from "../components/SignUpForm";
import SignUpForm from "../components/loginPage/signUpForm";

function SignUp() {
  const [showSignUpForm, setShowSignUpForm] = useState(false);

  const handleSignUpClick = (e) => {
    e.preventDefault()
    setShowSignUpForm(true);
  };

  return (
    <div>
      {showSignUpForm ? (
        <SignUpForm />
      ) : (
        <button onClick={handleSignUpClick}>Sign Up</button>
      )}
    </div>
  );
}

export default SignUp;
