import React, { useState } from 'react';
import './styles.css';

function SignIn({ toggleForm }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;

    if (!email) {
      setEmailError('Enter the Email');
      valid = false;
    } else {
      setEmailError('');
    }

    if (!password) {
      setPasswordError('Enter the password');
      valid = false;
    } else {
      setPasswordError('');
    }

    if (valid) {
      console.log('Email:', email);

      console.log('Name:', password);
     
    }
  };

  return (
    <div className="centered-container">
      <div className="box">
        <form onSubmit={handleSubmit}>
          <span className="text-center">Login</span>
          <div className="input-container">
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label>Email</label>
            {emailError && <p className="error-message">{emailError}</p>}
          </div>
          <div className="input-container">
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label>Password</label>
            {passwordError && <p className="error-message">{passwordError}</p>}
          </div>
          <button type="submit" className="btn">Login</button>
        </form>
        <p>Not a member? <span onClick={toggleForm} className="toggle-link">Sign Up Now</span></p>
      </div>
    </div>
  );
}

export default SignIn;