import React, { Component } from "react";
import "../components/Footer.css";
import LogoMakr_1 from "../utils/LogoMakr_1.png";
import Krage_Logo from "../utils/Krage_Logo.png";
import linkedin from "../utils/linkedin.png";
import facebook from "../utils/facebook.png";

export class Footer extends Component {
  render() {
    return (
      <div>
        <div className="container" style={styleContainer}>
          <div className="row" id="top-row">
            <div className="col" id="connect-logo-div">
              <img
                className="connect-with-us"
                src={LogoMakr_1}
                alt="logo"
              ></img>
            </div>

            <div className="col call-email">
              <text>CALL</text>
              <br />
              <text id="phone-number">719.948.2001</text>
              <br />
              <br />
              <text>EMAIL</text>
              <br />
              <text id="email-text">sales@kragemanufacturing.com</text>
            </div>
            <div className="col visit-address">
              <text>VISIT</text>
              <br />
              <text id="email-text">1 Eaton Way</text>
              <br />
              <text id="email-text">Pueblo, CO 81005</text>
              <br />
              <a href="/Contact" id="email-text">
                See Map
              </a>
            </div>
          </div>

          <div className="row" id="line-break">
            <div className="col-sm-12">
              <p></p>
            </div>
          </div>

          <div className="row" id="bottom-row">
            <div className="col" id="bottomLogo">
              <a href="/">
                <img
                  className="company-logo-bottom"
                  src={Krage_Logo}
                  alt="logo"
                  style={companyLogoStyle}
                ></img>
              </a>
            </div>
            <div className="col" id="bottom-middle-info">
              <p className="bottom-email-text">
                1 Eaton Way
                <br />
                Pueblo, CO 81005
              </p>
              <p className="bottom-email-text">
                719.948.2001
                <br />
                krage@kragemanufacturing.com
              </p>
            </div>
            <div className="col" id="socialMedia" style={divSocialMedia}>
              <a href="https://www.linkedin.com/company/krage-manufacturing-llc/about/">
                <img className="social-media" style={styleSocialMedia} src={linkedin} alt="logo"></img>
              </a>
              <a href="https://www.facebook.com/pages/Krage-Manufacturing/169572146393723">
                <img className="social-media" style={styleSocialMedia} src={facebook} alt="logo"></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;

const companyLogoStyle = {
  height: 'auto',
  width: '250px',
  borderRadius: '5%',
  paddingTop: '30px',
  paddingBottom: '40px'
}
const styleSocialMedia = {
  margin: '5px',
  height: '30px',
  width: '30px',
  borderRadius: '5%'
}
const divSocialMedia = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}
const styleContainer = {
  maxWidth: '100%'
}
