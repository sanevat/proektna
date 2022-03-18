import React from 'react';
import { Link } from 'react-router-dom';
import './styles/homepage.css';
const Homepage = () => {
    return (
        <body className='body-home'>
            <header>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/login">Log in</Link></li>
                        <li><Link to="/register">Sign up</Link></li>
                    </ul>
                </nav>
            </header>
            <section class="hero">
                <div class="intro-text">
                    <h1>
                        <span class="hear">Dear patients,</span> <br />
                    </h1>
                    <p>
                        Lets controll the pandemic by self-isolation and tracking in real time how your disease progresses.
                        <br></br>
                        <br></br>
                        Register into COVID-19 Symptom Tracker app and record information about your health on a daily basis,
                        including temperature, tiredness and symptoms such as coughing, breathing problems or headaches.
                    </p>
                </div>
                <div class="i-frame">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/wT2m3kljcSU"
                        title="YouTube video player"
                        frameborder="10"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    ></iframe>
                </div>
            </section>
        </body>
    )
}
export default Homepage;