import React, { Component } from "react";
import "../components/Gallery.css";
import laser_1262x841 from "../utils/laser_1262x841.jpg";
import laser_2_1262x841 from "../utils/laser_2_1262x841.jpg";
import press_brake_1259x841 from "../utils/press_brake_1259x841.jpg";
// import brake_press_1 from "../utils/brake_press_1.jpg";
// import powder_coat_1 from "../utils/powder_coat_1.jpg";
// import { Carousel } from "react-bootstrap";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBContainer,
} from "mdbreact";

export class Gallery extends Component {
  render() {
    return (
      <div>
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
                    src={laser_1262x841}
                    alt="First slide"
                  />
                </MDBView>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="2">
                <MDBView>
                  <img
                    className="d-block w-100"
                    src={press_brake_1259x841}
                    alt="Second slide"
                  />
                </MDBView>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="3">
                <MDBView>
                  <img
                    className="d-block w-100"
                    src={laser_2_1262x841}
                    alt="Third slide"
                  />
                </MDBView>
              </MDBCarouselItem>
            </MDBCarouselInner>
          </MDBCarousel>
        </MDBContainer>
      </div>
    );
  }
}

export default Gallery;
