import React, { Component } from "react";
import "../components/Footer.css";
import LogoMakr_1 from "../utils/LogoMakr_1.png";
import Krage_Logo from "../utils/Krage_Logo.png";
import linkedin from "../utils/linkedin.png";
import facebook from "../utils/facebook.png";
import phone from "../utils/phone.png";
import email from "../utils/email.png";


export class Footer extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row" id="top-row">
            <div className="col">
              <img className="company-logo" src={LogoMakr_1} alt="logo"></img>
            </div>

            <div className="col call-email">
              <text>CALL</text>
              <br />
              <text id="phone-number">719.948.2001</text>
              <br />
              <br />
              <text>EMAIL</text>
              <br />
              <text id="email-text">krage@kragemanufacturing.com</text>
            </div>
            <div className="col visit-address">
              <text>VISIT</text>
              <br />
              <text id="email-text">1 Eaton Way</text>
              <br />
              <text id="email-text">Pueblo, CO 81005</text>
              <br />
              <a id="email-text">See Map</a>
            </div>
          </div>

          <div className="row" id="line-break">
            <div className="col-sm-12">
              <p></p>
            </div>
          </div>

          <div className="row" id="bottom-row">
            <div className="col" id="bottomLogo">
              <img className="company-logo" src={Krage_Logo} alt="logo"></img>
            </div>
            <div className="col" id="bottom-middle-info">
              <p className="bottom-email-text">1 Eaton Way<br/>Pueblo, CO 81005</p>
              <p className="bottom-email-text">719.948.2001<br/>krage@kragemanufacturing.com</p>
            </div>
            <div className="col" id="socialMedia">
              <img className="social-media" src={linkedin} alt="logo"></img>
              <img className="social-media" src={facebook} alt="logo"></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
