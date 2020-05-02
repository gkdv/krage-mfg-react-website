import React, { Component } from "react";
import "../components/ContactInfo.css";
import phone_1 from "../utils/phone_1.png";
import email_1 from "../utils/email_1.png";

export class ContactInfo extends Component {
  render() {
    return (

        <div className="container" style={{maxWidth: '100%', paddingRight: '0px', paddingLeft: '0px', margin: '0px'}}>
          {/* row 1 */}
          <div className="row" id="row1-content-style">
            <p id="p1">Get in touch</p>
            <p id="p2">Want to get in touch? Here's how you can reach us...</p>
          </div>
          {/* row 2 */}
          <div className="row">
            <div className="col-sm-6">
              <div className="card" style={cardStyle}>
                <div className="card-body">
                  <h5 className="card-title" id="title-content-style">
                    <img
                      className="social-media"
                      src={phone_1}
                      alt="phone"
                    ></img>
                    Talk to our design team
                  </h5>
                  <p className="card-text" id="para-content-style">
                    Interested in seeing what we can build for you? Just pick
                    up the phone to chat with a member of our design team.
                    <br />
                    <br />
                  </p>
                  <p id="para-content-style">719.948.2001</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card" style={cardStyle}>
                <div className="card-body">
                  <h5 className="card-title" id="title-content-style">
                    <img
                      className="social-media"
                      src={email_1}
                      alt="phone"
                    ></img>
                    Send us an email
                  </h5>
                  <p className="card-text" id="para-content-style">
                    Reach out to or our sales and design team via email. We'll
                    get back to you with how our services can help you.
                  </p>
                  <a href="mailto:sales@kragemanufacturing.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    email us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

    );
  }
}

export default ContactInfo;

const cardStyle = {
  backgroundImage: 'linear-gradient(silver , white)'
}