import React,{useState} from 'react';
import { logoJS01,logoJS02,logoJS03,logoJS04,logoJS05 } from './logosJS';


const NavBarJS =({ isCollapsed, toggleNavbar })=> {

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand text-warning" href="#">Start Bootstrap</a>
          <button
                    className="navbar-toggler bg-warning"
                    type="button"
                    onClick={toggleNavbar}
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded={!isCollapsed}
                    aria-label="Toggle navigation"
                >
            <span className="navbar-toggler-icon"></span>
            
          </button>
          {/* <div className="collapse navbar-collapse" id="navbarNavAltMarkup"> */}
          <div className={`collapse navbar-collapse ${isCollapsed ? '' : 'show'}`} id="navbarNavAltMarkup">
            <div className="navbar-nav text-white ms-auto">
              <a className="nav-link active text-white" aria-current="page" href="#">
                Home  
                <img src={logoJS01} alt="" width="30" height="24" className="d-inline-block align-text-top"/>
              </a>
              <a className="nav-link text-white" href="#">
                About 
                <img src={logoJS02} alt="" width="30" height="24" className="d-inline-block align-text-top"/>
              </a>
              <a className="nav-link text-white" href="#">
                Services
                <img src={logoJS03} alt="" width="30" height="24" className="d-inline-block align-text-top"/>
                </a>
              <a className="nav-link text-white" href="#">
                Contact
                <img src={logoJS04} alt="" width="30" height="24" className="d-inline-block align-text-top"/>
              </a>
            </div>
          </div>
        </div>
      </nav>
    )
};

export default NavBarJS;