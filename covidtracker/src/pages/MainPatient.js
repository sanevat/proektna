import React from 'react';
import { Link } from "react-router-dom";
import './styles/mainpatient.css';
const MainPatient = () => {
    return (
        <body className='body-main'>
            <header >
                <nav>
                    <ul>
                        <li><Link to="/mainpatient">Home</Link></li>
                        <li><Link to="/patientpage">Check your symptoms</Link></li>
                        <li><Link to="/information">COVID-19 prevention</Link></li>
                        <li><Link to="/">Log out</Link></li>
                    </ul>
                </nav>
            </header>
            <main>
                <p>Dear patients lets act aginst COVID-19 together!</p>
            </main>
        </body>
    );
}
export default MainPatient;