import React from "react";
import './style.css';

function RegistrationForm() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const response = await fetch('/api/register', {
      method: 'POST',
      body: formData
    });
    if (response.ok) {
      // Handle successful registration
    } else {
      // Handle failed registration
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" />
      <input type="text" name="username" placeholder="Username" />
      <input type="email" name="email" placeholder="Email" />
      <input type="password" name="password" placeholder="Password" />
      <button type="submit">Create Account</button>
    </form>
  );
}

function Right() {
    return (
      <div className="right">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Email or phone number"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button id="login">Log In</button>
          <a href="">Forgot password?</a>
          <div className="line"></div>
          <button id="signup" type="submit">
            Create new account
          </button>
        </form>
        <p>
          <span>Create a Page </span> for a celebrity, brand or business.
        </p>
      </div>
    );
  }
  

export default Right;
