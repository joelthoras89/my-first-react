import React from 'react';
// import { Link } from 'react-router-dom';


export default props => (<div className="main-header">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div to={'/'} className="navbar-brand"></div>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                  <div to={'/'} className="nav-link">Home</div>
                </li>
                <li className="nav-item">
                  <div to={'/about-us'} className="nav-link">About Us</div>
                </li>
                <li className="nav-item">
                  <div to={'/contact-us'} className="nav-link">Contact Us</div>
                </li>
              </ul>
            </div>
          </nav>
      </div>);