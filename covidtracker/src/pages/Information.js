import React from 'react';
import { Link } from "react-router-dom";
import './styles/information.css';
const Information = () => {
  return (
    <body className='body-main1'>
      <header >
        <nav>
          <ul>
            <li><Link to="/mainpatient">Home</Link></li>
            <li><Link to="/patientpage">Check your symptoms</Link></li>
            <li><Link to="/information">COVID-19 prevention</Link></li>
            <li><Link to="/register">Log out</Link></li>
          </ul>
        </nav>
      </header>
      <main class="grid">
        <article>
          <img src="https://cdn.iconscout.com/icon/free/png-256/sanitize-door-handle-2374551-1988101.png" alt="Sample photo" />
          <div class="text">
            <h3>CLEAN AND DESINFECT</h3>
            <p>Clean your hands often. Use soap and water, or an alcohol-based hand rub.</p>
          </div>
        </article>
        <article>
          <img src="https://cdn.iconscout.com/icon/free/png-256/sneeze-2263203-1882920.png" alt="Sample photo" />
          <div class="text">
            <h3>SNEEZING/COUGHING ETIQUETTE</h3>
            <p>Cover your nose and mouth with your bent elbow or a tissue when you cough or sneeze.</p>
          </div>
        </article>
        <article>
          <img src="https://cdn.iconscout.com/icon/free/png-256/face-mask-2332173-1938998.png" alt="Sample photo" />
          <div class="text">
            <h3>WEAR A MASK</h3>
            <p>Wear a mask in public, especially indoors or when physical distancing is not possible.</p>
          </div>
        </article>
        <article>
          <img src="https://cdn.iconscout.com/icon/free/png-256/social-distance-2374553-1988086.png" alt="Sample photo" />
          <div class="text">
            <h3>KEEP A DISTANCE</h3>
            <p>Maintain a safe distance from others (at least 1 metre), even if they don’t appear to be sick.</p>
          </div>
        </article>
        <article>
          <img src="https://cdn.iconscout.com/icon/free/png-256/twenty-second-wash-hand-2374585-1988131.png" alt="Sample photo" />
          <div class="text">
            <h3>WASH YOUR HANDS PROPERLY</h3>
            <p>Clean your hands often. Use soap and water, or an alcohol-based hand rub.</p>
          </div>
        </article>
        <article>
          <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/handshake-178-1095591.png" alt="Sample photo" />
          <div class="text">
            <h3>CONTACT</h3>
            <p>Avoid close contact with people with rithinis or flu symptoms</p>
          </div>
        </article>
        <article>
          <img src="https://images.vexels.com/media/users/3/200159/isolated/lists/83823d3dff2803062ce25d409adfab93-stay-home-textured.png" alt="Sample photo" />
          <div class="text">
            <h3>STAY HOME</h3>
            <p>Stay home if you feel unwell.</p>
          </div>
        </article>
        <article>
          <img src="https://cdn1.iconfinder.com/data/icons/medical-concepts-1/72/125-256.png" alt="Sample photo" />
          <div class="text">
            <h3>GET VACCINATED</h3>
            <p>Get vaccinated when it’s your turn. Follow local guidance about vaccination.</p>
          </div>
        </article>
        <article>
          <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/qr-code-for-vaccination-3784589-3159885.png" alt="Sample photo" />
          <div class="text">
            <h3>USE THIS APP</h3>
            <p>Write your symptoms in this app everyday so we can have evidence for your condition, if you feel unwell call your doctor.</p>
          </div>
        </article>
      </main>
    </body>
  );
}
export default Information;