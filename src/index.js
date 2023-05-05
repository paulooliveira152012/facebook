import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Left from './components/loginPage/left'
import Right from './components/loginPage/right'
import Footer from './components/loginPage/footer';

function RegistrationForm() {
  const [email, setEmail] = useState(''); //email
  const [password, setPassword] = useState(''); //password

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    if (response.ok) {
      console.log("success")
    } else {
      console.log(Error)
    }
  };

  return (
    <>
      <main>
        <div className='mainContainer'>
          <Left />
          <Right
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            handleSubmit={handleSubmit}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}

ReactDOM.render(<RegistrationForm />, document.getElementById('root'));
