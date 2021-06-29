import React from 'react';
import './Login.css'
import logo from './images/pngegg.png';

import { auth , provider} from './firebase';

function Login() {

  const signIn = () => {
    auth.signInWithPopup(provider)
    .catch(error => alert(error.message));
  }


  return (
    <div className='login'>
      <div className="login__logo">
      <img src={logo} alt="logo" />
      <h1>iMessage</h1>
      </div>
      <button onClick={signIn}>Sign In</button>
    </div>
  );
}

export default Login;