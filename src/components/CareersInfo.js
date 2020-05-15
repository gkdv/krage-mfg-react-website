import React, { Component } from "react";
import "../components/CareersInfo.css";
import thumb_trump_laser400 from "../utils/thumb_trump_laser400.JPG";
import plant_floor_2_400x300 from "../utils/plant_floor_2_400x300.JPG";
import bystronic_press1_400x300 from "../utils/bystronic_press1_400x300.JPG";
// import press_brake_1259x841 from "../utils/press_brake_1259x841.jpg";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBContainer
} from "mdbreact";

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
          <br/>
          <a
            href="mailto:sales@kragemanufacturing.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={styleButton}
          >
            Apply here
          </a>
        </div>
        <div className="row">
          <div className="col-sm-6" id="careers-small-img-carousel">
            <MDBContainer id="gallery-container">
              <MDBCarousel
                activeItem={1}
                length={3}
                showControls={true}
                showIndicators={true}
                className="z-depth-1"
              >
                <MDBCarouselInner>
                  <MDBCarouselItem itemId="1">
                    <MDBView>
                      <img
                        className="d-block w-100"
                        src={thumb_trump_laser400}
                        alt="First slide"
                      />
                    </MDBView>
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId="2">
                    <MDBView>
                      <img
                        className="d-block w-100"
                        src={plant_floor_2_400x300}
                        alt="Second slide"
                      />
                    </MDBView>
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId="3">
                    <MDBView>
                      <img
                        className="d-block w-100"
                        src={bystronic_press1_400x300}
                        alt="Third slide"
                      />
                    </MDBView>
                  </MDBCarouselItem>
                </MDBCarouselInner>
              </MDBCarousel>
            </MDBContainer>
          </div>
          <div className="col-sm-6" id="careers-small-carousel-text">
            <p id="careers-small-carousel-right-text">Our Facility</p>
            <p>text describing our facility and work environment</p>
          </div>
        </div>
      </div>
    );
  }
}

export default CareersInfo;

const styleButton = {
  backgroundColor: 'white',
  color: 'silver',
  borderColor: 'silver',
  display: 'flex',
  justifyContent: 'center',
  transitionDuration: '0.6s',
  marginLeft: '30%',
  marginRight: '30%',
  // backgroundColor: "transparent",
  fontWeight: "bold"
}