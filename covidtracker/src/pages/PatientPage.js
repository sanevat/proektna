import { useState } from 'react';
import { Link } from "react-router-dom";
function PatientPage() {
  const [temperature, setTemperature] = useState('');
  const [saturation, setSaturation] = useState('');
  const [cough, setCough] = useState('');
  async function handleSubmit(event) {
    event.preventDefault();
    const response = await fetch('http://localhost:1337/stored', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        temperature,
        saturation,
        cough,

      }),
    })
    const data = await response.json();
  }
  return (
    <body className='bodyRegister'>
      <header >
        <nav>
          <ul>
            <li><Link to="/mainpatient">Home</Link></li>
            <li><Link to="/patientpage">Check your symptoms</Link></li>
            <li><Link to="/information">COVID-19 prevention</Link></li>
            <li><Link to="/homepage">Log out</Link></li>
          </ul>
        </nav>
      </header>
      <div className='signupForm'>
        <form onSubmit={handleSubmit} className='form'>
          <p>Please enter your temperature today</p>
          <div className='inputContainer'>
            <input
              value={temperature}
              onChange={(e) => setTemperature(e.target.value)}
              type="number"
              placeholder="Temperature"
              className='input'
            />
            <label for="temperature" className='label'>Temperature</label><br />
          </div>
          <p>Please enter your saturation today</p>
          <div className='inputContainer'>
            <input
              value={saturation}
              onChange={(e) => setSaturation(e.target.value)}
              type="number"
              placeholder="Saturation"
              className='input'
            />
            <label for="name" className='label'>Saturation</label><br />
          </div>
          <p>Do you have cough?
            <input
              id="izbor1"
              value="Yes"
              onChange={(e) => setCough(e.target.value)}
              type="radio"
              name="choose"
            />YES
            <input
              id="izbor2"
              value="No"
              onChange={(e) => setCough(e.target.value)}
              type="radio"
              name="choose"
            />NO
          </p>
          <br />
          <input type="submit" value='Submit Information' />
        </form>
      </div>
    </body>
  )
}
export default PatientPage;
