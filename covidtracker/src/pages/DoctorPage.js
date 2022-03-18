import React, { useState, useEffect } from 'react';
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
    <div>
      <table >
        <tr>
          <th>Temperature</th>
          <th>Saturation</th>
          <th>Cough</th>
          <th>Score</th>
          <th>Score</th>
        </tr>
        {getpatients && getpatients.map(getpatient =>
          <tr>
            <td>{getpatient && getpatient.temperature}</td>
            <td>{getpatient && getpatient.saturation}</td>
            <td>{getpatient && getpatient.cough}</td>
            <td>{getpatient && getpatient.score}</td>
          </tr>)}
      </table>
    </div>
  )
}
export default DoctorPage;