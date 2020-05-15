import React, { Component } from "react";
import footerBackground1 from "../utils/footerBackground1.JPG";
import linkedin from "../utils/linkedin.png";
import facebook from "../utils/facebook.png";

export class FooterType2 extends Component {
  render() {
    return (
      <div>
        <div className="row" style={row1Style}>
          <text style={h1Style}>Ready to get started?</text>
          <text style={h2Style}>
            Contact us today and we'll put together a quote tailored to your
            needs.
          </text>
          <br />
          <br />
          <br />
          <br />
          <a
            href="mailto:sales@kragemanufacturing.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={styleButton}
          >
            Request a Quote
          </a>
        </div>
        <div className="row" style={row2Style}>
          <div style={infoStyle} className="col-md">
            <text style={infoHeaderStyle}>CALL</text>
            <br />
            <text style={infoTextStyle}>719.948.2002</text>
            <br />
            <br />
            <text style={infoHeaderStyle}>EMAIL</text>
            <br />
            <text style={infoTextStyle}>sales@kragemanufacturing.com</text>
          </div>
          <div style={infoStyle} className="col-md">
            <text style={infoHeaderStyle}>VISIT</text>
            <br />
            <text style={infoTextStyle}>1 Eaton Way</text>
            <br />
            <text style={infoTextStyle}>Pueblo, CO 81005</text>
            <br />
            <a href="/Contact">See Map</a>
          </div>
          <div style={socialContainer} className="col-md">
            <a href="https://www.linkedin.com/company/krage-manufacturing-llc/about/">
              <img
                style={socialMedia}
                className="social-media"
                src={linkedin}
                alt="logo"
              ></img>
            </a>
            <a href="https://www.facebook.com/pages/Krage-Manufacturing/169572146393723">
              <img
                style={socialMedia}
                className="social-media"
                src={facebook}
                alt="logo"
              ></img>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default FooterType2;
const row1Style = {
  padding: "10%",
  // background: 'linear-gradient(to right,rgba(192, 192, 192, 1), #01184100)',
  backgroundImage: `url(${footerBackground1})`,
  backgroundSize: "cover",
  display: "flex",
  //   alignItems: "center",
  justifyContent: "center",
};
const row2Style = {
  padding: "3%",
  background: "linear-gradient(to right,rgba(192, 192, 192, 1), #01184100)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
const h1Style = {
  padding: "5% 0% 0% 0%",
  color: "white",
  fontWeight: "bold",
  fontSize: "70px",
  alignItems: "center",
  justifyContent: "center",
};
const h2Style = {
  color: "white",
  fontWeight: "bold",
  fontSize: "130%",
  alignItems: "center",
  justifyContent: "center",
};

const socialMedia = {
  margin: "5px",
  height: "30px",
  width: "30px",
  borderRadius: "5%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "row",
};
const socialContainer = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "row",
};
const infoStyle = {
  paddingLeft: "70px",
};
const infoHeaderStyle = {
  color: "white",
  fontSize: "130%",
  fontWeight: "bold",
};
const infoTextStyle = {
  fontWeight: "bold",
  color: "white",
  fontSize: "110%",
};
const styleButton = {
  backgroundColor: "white",
  color: "silver",
  borderColor: "silver",
  display: "flex",
  justifyContent: "center",
  transitionDuration: "0.6s",
  marginLeft: "30%",
  marginRight: "30%",
  backgroundColor: "transparent",
  fontWeight: "bold",
};
