import React, { Component } from "react";
import logo from "../utils/Krage_Logo.png";
import "../components/Header.css";
import linkedin from "../utils/linkedin.png";
import facebook from "../utils/facebook.png";

export class Header extends Component {
  render() {
    return (
      <div>
        <div className="row" id="top-break">
          <div className="col-sm-12">
            <div id="socialMedia-header">
              <img className="social-media" src={linkedin} alt="logo"></img>
              <img className="social-media" src={facebook} alt="logo"></img>
            </div>
          </div>
        </div>
        <nav className="navbar navbar-expand-lg navbar-light">
          <img className="company-logo" src={logo} alt="logo"></img>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ml-auto">
              <a className="nav-item nav-link" href="/">
                About<span className="sr-only">(current)</span>
              </a>
              <a className="nav-item nav-link" href="/Services">
                Services
              </a>
              <a className="nav-item nav-link" href="/Portfolio">
                Portfolio
              </a>
              <a className="nav-item nav-link" href="/Careers">
                Careers
              </a>
              <a className="nav-item nav-link" href="/Contact">
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
