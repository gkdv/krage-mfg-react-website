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
            <div id="socialMedia-header" style={socialMediaHeaderStyle}>
              <a href="https://www.linkedin.com/company/krage-manufacturing-llc/about/">
                <img className="social-media" style={socialMediaStyle} src={linkedin} alt="logo"></img>
              </a>
              <a href="https://www.facebook.com/pages/Krage-Manufacturing/169572146393723">
                <img className="social-media" src={facebook} style={socialMediaStyle} alt="logo"></img>
              </a>
            </div>
          </div>
        </div>
        <nav className="navbar navbar-expand-lg navbar-light col-sm-12" style={navbarStyle}>
          <a style={styleLogo} href="/">
            <img className="company-logo" style={companyLogo} src={logo} alt="logo"></img>
          </a>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup" style={altMarkupStyle}>
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
 fontSize: '20px',

 marginBottom: '0em',
 paddingBottom: '0em'
}

const styleLogo = {
  marginLeft: '2%'
}
const companyLogo = {
  height: 'auto',
  width: '250px',
  borderRadius: '5%',
  paddingBottom: '0px'
}

const navbarStyle = {
  backgroundImage: 'linear-gradient(lightgrey , white)',
  backgroundImage: 'linear-gradient(left to right, white , black)',
  paddingBottom: '3%'
}

const socialMediaStyle = {
  margin: '5px',
  height: '20px',
  width: '20px',
  borderRadius: '5%'
}

const socialMediaHeaderStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  paddingRight: '2%',
  paddingBottom: '0.5%',
  paddingTop: '0.5%'
}

const altMarkupStyle = {
  marginTop: 'auto'
}