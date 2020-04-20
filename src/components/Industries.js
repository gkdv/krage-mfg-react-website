import React, { Component } from "react";
// import plant_floor_2_400x300 from "../utils/plant_floor_3_240x180.JPG";
// import plant_floor_2_400x300 from "../utils/electricUtility_400x267.jpg";
// import architecture400x267 from "../utils/architecture400_267.jpg";
// import commercialAC from "../utils/commercialAC.jpg";
// import construction400x244 from "../utils/construction400x244.jpg";
// import Card from "./Card";


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
              <MDBView>
                <img
                  className="d-block w-100"
                  src="https://mdbootstrap.com/img/Photos/Slides/img%20(45).jpg"
                  alt="First slide"
                />
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
              <MDBView>
                <img
                  className="d-block w-100"
                  src="https://mdbootstrap.com/img/Photos/Slides/img%20(46).jpg"
                  alt="Second slide"
                />
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="3">
              <MDBView>
                <img
                  className="d-block w-100"
                  src="https://mdbootstrap.com/img/Photos/Slides/img%20(47).jpg"
                  alt="Third slide"
                />
              </MDBView>
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>
      </MDBContainer>
    );
    // return (
    //   <div style={pizza}>
    //     <div className="row" style={headerStyle}>
    //       <h2 className="font-weight-bold my-5 text-center">Industries</h2>
    //     </div>
    //     <div className="row" style={style}>
    //       <Card
    //         cardInfo={{
    //           src: plant_floor_2_400x300,
    //           alt: "image",
    //           cardTitle: "Electric Utility",
    //         }}
    //         cardStyle={cardStyle}
    //       />
    //       <Card
    //         cardInfo={{
    //           src: commercialAC,
    //           alt: "image",
    //           cardTitle: "Commercial Cooling and Heating",
    //         }}
    //         cardStyle={cardStyle}
    //       />
    //       <Card
    //         cardInfo={{
    //           src: architecture400x267,
    //           alt: "image",
    //           cardTitle: "Industrial Design & Architecture",
    //         }}
    //         cardStyle={cardStyle}
    //       />
    //       <Card
    //         cardInfo={{
    //           src: construction400x244,
    //           alt: "image",
    //           cardTitle: "Commercial & Industrial Construction",
    //         }}
    //         cardStyle={cardStyle}
    //       />
    //     </div>
    //   </div>
    // );
  }
}

export default Industries;

const style = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-around",
  margin: "5%",
  // backgroundImage: 'linear-gradient(to bottom left,silver , white)'
};

const cardStyle = {
  width: "20rem",
  borderStyle: "none",
  backgroundImage: "linear-gradient(silver , white)",
};
const headerStyle = {
  display: "flex",
  justifyContent: "center",
  backgroundImage: "linear-gradient(to bottom left,silver , white)",
};
const pizza = {
  backgroundImage: "linear-gradient(white, silver)",
};
