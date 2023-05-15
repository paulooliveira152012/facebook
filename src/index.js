import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import loginPage from './login.html'
// import loginPage from './'
import Left from './components/loginPage/left'
import Right from './components/loginPage/right'
import Footer from './components/loginPage/footer';

function MyApp() {
  return (
      <><main>
      <div className='mainContainer'>
        <Left />
        <Right />
      </div>
    </main>
    <Footer />
    
    </>
  );
}

ReactDOM.render(<MyApp />, document.getElementById('root'));
