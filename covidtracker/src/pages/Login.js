import React from 'react';
import { Link } from 'react-router-dom';
import { useState} from 'react';
function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [radio, setRadio] = useState('');

  async function loginUser(event) {
    event.preventDefault()
    const response = await fetch('http://localhost:1337/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password,
        radio,
      }),
    })
    const data = await response.json();
    if (data.user) {
      console.log('Success');
      if (radio === 'Doctor') {
        window.location.href = '/doctorpage';
      }
      else if (radio === 'Patient') {
        window.location.href = '/mainpatient';
      }
    }
    else {
      //  alert('Information incorect') 
      var error = document.getElementById("error");
      error.innerHTML = "<br><span style='color: red;'>" +
        "Please enter a valid email or password!</span>";
    }
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
        <form onSubmit={loginUser} className='form'>
          <h1 className='title'>Log in</h1>
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
            <label for="password" className='radio-label'>Patient</label> <br />
          </div>
          <input type="submit" className='submitBtn' value='LogIn' /><br></br>
          <span id='error'></span>
        </form>
      </div>
    </body>
  );
}
export default App;