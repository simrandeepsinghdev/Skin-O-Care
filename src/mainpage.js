import React from 'react';
import { Link } from "react-router-dom";
import Member from "./SECRETARY.png";

function App() {
  return (
    <>
      <header className="header">
        <div className="header-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-3 col-12">
                <div className="logo">
                  <a href="index.html">
                    <img src="newlogo.png" id="myimg" alt="#" />
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-9 col-12">
                <div className="main-menu">
                  <nav className="navigation">
                    <ul className="nav menu">
                      <li className="active">
                        <a href="index.html">
                          Home
                        </a>
                      </li>
                      <li>
                        <Link to="/Doctors">
                          Dermatologist
                        </Link>
                      </li>
                      <li>
                        <a href="index.html">
                          Login
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-lg-1 col-8">
                <div className="get-quote">
                  <btn className="btn">
                    <Link to="/Login">APPOINTMENT</Link>
                  </btn>
                </div>
              </div>
              <div className="col-lg-1 col-8"></div>
              <div className="col-lg-1 col-8">
                <div className="get-quote">
                  <btn className="btn">
                    <Link to="/Scan">DIAGNOSIS</Link>
                  </btn>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="Feautes section">
      
      </section>

      <div id="fun-facts" className="fun-facts section overlay">
     
      </div>

      <section className="why-choose section">
   
      </section>

      <section className="call-action overlay">
    
      </section>

      <section className="pricing-table section">
     
      </section>

      <img src={Member} style={{ width: '1600px', height: '600px' }} />

      <section className="appointment">
   
      </section>

      <footer id="footer" className="footer">
      </footer>
    </>
  );
}

export default App;
