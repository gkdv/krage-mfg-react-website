import React, { Component } from "react";
import construction722x440 from "../utils/construction722x440.jpg";
import utilityElectrical722x481 from "../utils/utilityElectrical722x481.jpg";
import airCondition722x428 from "../utils/airCondition722x428.jpg";
import architecture722x481 from "../utils/architecture722x481.jpg";


import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBContainer,
} from "mdbreact";

export class Industries extends Component {
  render() {
    return (
      <div style={outsideDiv}>
        <h1 style={headerStyle}>Industries.</h1>
        <h2 style={headerTwoStyle}>
          With precision sheet metal fabrication, Powder Coating and Electrical
          Assembly we meet the needs of the industries we serve.
        </h2>

        <MDBContainer>
          <MDBCarousel
            activeItem={1}
            length={3}
            showControls={true}
            showIndicators={false}
            className="z-depth-1"
            slide
          >
            <MDBCarouselInner>
              <MDBCarouselItem itemId="1">
                <div className="row">
                  <MDBView className="col-sm-6">
                    <img
                      className="d-block w-100"
                      src={construction722x440}
                      alt="First slide"
                    />
                  </MDBView>
                  <div className="col-sm-6">
                    <h1 style={rightHeaderStyle}>
                      Commercial & Industrial Construction
                    </h1>
                    <h2 style={rightTextStyle}>
                      From OEM equipment parts to wall paneling and partitions,
                      Krage Mfg. delivers an array of building material
                      solutions.
                    </h2>
                    <a
                      href="/Industries"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                      style={styleButton}
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="2">
                <div className="row">
                  <MDBView className="col-sm-6">
                    <img
                      className="d-block w-100"
                      src={utilityElectrical722x481}
                      alt="Second slide"
                    />
                  </MDBView>
                  <div className="col-sm-6">
                    <h1 style={rightHeaderStyle}>Electric Utility</h1>
                    <h2 style={rightTextStyle}>
                      Our electronic equipment for OEMs includes PCB holders and
                      brackets, electrical enclosures, equipment covers and
                      frames, and more.
                    </h2>
                    <a
                      href="/Industries"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                      style={styleButton}
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="3">
                <div className="row">
                  <MDBView className="col-sm-6">
                    <img
                      className="d-block w-100"
                      src={airCondition722x428}
                      alt="Third slide"
                    />
                  </MDBView>
                  <div className="col-sm-6">
                    <h1 style={rightHeaderStyle}>
                      Commercial Cooling and Heating
                    </h1>
                    <h2 style={rightTextStyle}>
                      From high temperature burner and oven assemblies, to
                      extreme low temperature cryogenic tanks and components,
                      ABC can meet the needs of this industry.
                    </h2>
                    <a
                      href="/Industries"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                      style={styleButton}
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </MDBCarouselItem>
            </MDBCarouselInner>
          </MDBCarousel>
        </MDBContainer>
      </div>
    );
  }
}

export default Industries;

const outsideDiv = {
  padding: "3%",
  backgroundColor: "white",
};
const headerStyle = {
  margin: "2% 5% 5% 5%",
  fontWeight: "bold",
  fontSize: "4rem",
  // color: #01184100
};
const headerTwoStyle = {
  margin: "2% 5% 5% 5%",
  color: "silver",
};
const rightHeaderStyle = {
  fontWeight: "bold",
  fontSize: "3rem",
};
const rightTextStyle = {
  fontSize: "2rem",
  margin: "3% 0% 0% 0%",
  paddingBottom: "6%",
  color: "silver",
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

// const style = {
//   display: "flex",
//   flexDirection: "row",
//   flexWrap: "wrap",
//   justifyContent: "space-around",
//   margin: "5%",
//   // backgroundImage: 'linear-gradient(to bottom left,silver , white)'
// };

// const cardStyle = {
//   width: "20rem",
//   borderStyle: "none",
//   backgroundImage: "linear-gradient(silver , white)",
// };
// const headerStyle = {
//   display: "flex",
//   justifyContent: "center",
//   backgroundImage: "linear-gradient(to bottom left,silver , white)",
// };
// const pizza = {
//   backgroundImage: "linear-gradient(white, silver)",
// };
