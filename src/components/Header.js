import React, { Component } from "react";
import logo from '../utils/Krage_Logo.png'
import '../components/Header.css'
export class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light">
        <img className="company-logo" src={logo}></img>       
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ml-auto">
              <a className="nav-item nav-link" href="/">
                About<span className="sr-only">(current)</span>
              </a>
              <a className="nav-item nav-link" href="/portfolio">
                Services
              </a>
              <a className="nav-item nav-link" href="/contact">
                Portfolio
              </a>
              <a className="nav-item nav-link" href="/contact">
                Careers
              </a>
              <a className="nav-item nav-link" href="/contact">
                Contact
              </a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
