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
              <a href="https://www.linkedin.com/company/krage-manufacturing-llc/about/">
                <img className="social-media" src={linkedin} alt="logo"></img>
              </a>
              <a href="https://www.facebook.com/pages/Krage-Manufacturing/169572146393723">
                <img className="social-media" src={facebook} alt="logo"></img>
              </a>
            </div>
          </div>
        </div>
        <nav className="navbar navbar-expand-lg navbar-light col-sm-12">
          <a style={styleLogo} href="/">
            <img className="company-logo" src={logo} alt="logo"></img>
          </a>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ml-auto">
              <a className="nav-item nav-link" style={styleText} href="/">
                About<span className="sr-only">(current)</span>
              </a>
              <a className="nav-item nav-link" style={styleText} href="/Industries">
                Industries
              </a>
              <a className="nav-item nav-link" style={styleText} href="/Capabilities">
                Capabilities
              </a>
              <a className="nav-item nav-link" style={styleText} href="/Portfolio">
                Portfolio
              </a>
              <a className="nav-item nav-link" style={styleText} href="/Careers">
                Careers
              </a>
              <a className="nav-item nav-link" style={styleText} href="/Contact">
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

const styleText = {
 fontSize: '20px'
}

const styleLogo = {
  marginLeft: '2%'
}