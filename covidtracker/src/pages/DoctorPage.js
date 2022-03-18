import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles/doctorpage.css';
function DoctorPage() {
  const [getpatients, setPatients] = useState()
  useEffect(() => {
    var request = new XMLHttpRequest()
    request.onreadystatechange = function () {
      if (request.readyState === 4 && request.status === 200) {
        const response = JSON.parse(request.response)
        setPatients(response)
        console.log('success')
      }
      if (request.readyState !== 4) {
        console.log(request.readyState)
      }
    };
    request.open('GET', 'http://localhost:1337/stored', true)
    request.send()
  }, [])
  useEffect(() => {
    console.log(getpatients)
  }, [getpatients])

  return (
    <body >
      <header >
        <nav>
          <ul>
            <li><Link to="/mainpatient">Home</Link></li>
            <li><Link to="/information">COVID-19 prevention</Link></li>
            <li><Link to="/homepage">Log out</Link></li>
          </ul>
        </nav>
      </header>
    <div>
      <table >
        <tr>
          <th>Temperature</th>
          <th>Saturation</th>
          <th>Cough</th>
          
        </tr>
        {getpatients && getpatients.map(getpatient =>
          <tr>
            <td>{getpatient && getpatient.temperature}</td>
            <td>{getpatient && getpatient.saturation}</td>
            <td>{getpatient && getpatient.cough}</td>
      
          </tr>)}
      </table>
    </div>
    </body>
  )
}
export default DoctorPage;