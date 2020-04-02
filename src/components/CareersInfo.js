import React, { Component } from "react";
import "../components/CareersInfo.css";
import thumb_trump_laser400 from "../utils/thumb_trump_laser400.JPG";


export class CareersInfo extends Component {
  render() {
    return (
      <div>
        <div className="row" id="row1-careers-style">
          <p id="p1-careers">CAREERS</p>
          <p>
            Krage Manufacturing, our locally owned family business providing
            sheet metal fabrication, is seeking an individual who has excellent
            communication skills, the ability to work under pressure, possess
            good time management, self-motivation and conflict resolution. The
            ability to be a leader and adapt to every situation. This person
            should be able to utilize a variety of hand and power tools and
            carpentry and electrical skills are a plus.
          </p>
          <p>
            Krage will train the right person. We offer competitive wages,
            benefits, 401K, vacation time and much more...
            <br /> If you would like to be considered a candidate for the Krage
            Team please submit your resume for review.
          </p>
          <p>
            You can submit your resume by emailing
            careers@kragemanufacturing.com or click the link below!
          </p>
        </div>
        <div className="row">
            <p>dkdkdkdk</p>
            <img className="careers-400px-img" src={thumb_trump_laser400} alt="logo"></img>
        </div>
      </div>
    );
  }
}

export default CareersInfo;
