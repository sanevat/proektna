import React from 'react';
import { Link } from 'react-router-dom';
import './styles/register.css';
import { useState } from 'react';

function Register() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [radio, setRadio] = useState('');

  async function registerUser(event) {
    event.preventDefault();
    const response = await fetch('http://localhost:1337/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        surname,
        email,
        password,
        radio,
      }),
    });
    const data = await response.json();
    console.log(data);
    window.location.href = '/login';
  }
  return (
    <body className='bodyRegister'>
      <header >
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Log in</Link></li>
            <li><Link to="/register">Sign up</Link></li>
          </ul>
        </nav>
      </header>

      <div className='signupForm'>
        <form onSubmit={registerUser} className="form">
          <h1 className='title'>Sign Up</h1>
          <p className='title'>Please fill in this form to create an account.</p>
          <div className='inputContainer'>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Enter your name"
              className='input'
            />
            <label for="name" className='label'>Name</label><br/>
          </div>
          <div className='inputContainer'>
            <input
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              type="text"
              placeholder="Enter your surname"
              className='input'
            />
            <label for="surname" className='label'>Surname</label><br />
          </div>
          <div className='inputContainer'>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter your email"
              className='input'
            />
            <label for="email" className='label'>Email</label><br />
          </div>
          <div className='inputContainer'>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter your password"
              className='input'
            />
            <label for="password" className='label'>Password</label><br />
          </div>
          <div className='inputContainer'>
            <input
              id="izbor1"
              value="Doctor"
              onChange={(e) => setRadio(e.target.value)}
              type="radio"
              name="choose"
              className='radio'
            />
            <label for="password" className='radio-label'>Doctor</label>
            <input
              id="izbor2"
              value="Patient"
              onChange={(e) => setRadio(e.target.value)}
              type="radio"
              name="choose"
              className='radio'
            />
            <label for="password" className='radio-label'>Patient</label><br />
          </div>
          <input type="submit" className='submitBtn' value='Sign up' />
          <p className='backBtn'>Already have an account?<Link to="/login">  Login here</Link></p>
        </form>
      </div>
      <div>
      </div>
    </body>
  );
}

export default Register;
