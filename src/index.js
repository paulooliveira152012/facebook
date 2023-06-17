import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Left from './components/loginPage/left';
import Right from './components/loginPage/right';
import Footer from './components/loginPage/footer';

function MyApp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();

    axios
      .post('/signup', { name, email, password })
      .then((response) => {
        console.log(response.data); // handle success response
      })
      .catch((error) => {
        console.error(error); // handle error
      });
  };

  const handleSignIn = (e) => {
    e.preventDefault();

    axios
      .post('/signin', { email, password })
      .then((response) => {
        console.log(response.data); // handle success response
      })
      .catch((error) => {
        console.error(error); // handle error
      });
  };

  return (
    <>
      <main>
        <div className="mainContainer">
          <Left />
          <Right handleSignup={handleSignup} handleSignIn={handleSignIn} />
        </div>
      </main>
      <Footer />
    </>
  );
}

ReactDOM.render(<MyApp />, document.getElementById('root'));
