import React from "react";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
} from "mdbreact";

const MultiCarouselPage = () => {
  return (
    <div style={outsideDiv}>
      <h1 style={headerStyle}>Capabilities.</h1>
      <h2 style={headerTwoStyle}>
        We have a specialized set of capabilities we leverage in order to drive
        innovation and ingenuity for our customers.
      </h2>
      <MDBContainer>
        <MDBCarousel
          activeItem={1}
          length={3}
          slide={true}
          showControls={true}
          showIndicators={true}
          multiItem
        >
          <MDBCarouselInner style={innerStyle}>
            <MDBCarouselItem itemId="1" style={rowStyle}>
              <MDBRow style={rowStyle}>
                <MDBCard className="mb-2" style={cardStyle}>
                  <MDBCardImage
                    style={imageStyle}
                    className="img-fluid"
                    src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg"
                  />
                  <MDBCardBody>
                    <MDBCardTitle>PROTOTYPING & CONTRACT MANUFACTURING</MDBCardTitle>
                  </MDBCardBody>
                </MDBCard>

                <MDBCard className="mb-2" style={cardStyle}>
                  <MDBCardImage
                    style={imageStyle}
                    className="img-fluid"
                    src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg"
                  />
                  <MDBCardBody>
                    <MDBCardTitle>LASER CUTTING & TURRET PUNCHING</MDBCardTitle>
                  </MDBCardBody>
                </MDBCard>

                <MDBCard className="mb-2" style={cardStyle}>
                  <MDBCardImage
                    style={imageStyle}
                    className="img-fluid"
                    src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg"
                  />
                  <MDBCardBody>
                    <MDBCardTitle>CNC BENDING</MDBCardTitle>
                  </MDBCardBody>
                </MDBCard>

                <MDBCard className="mb-2" style={cardStyle}>
                  <MDBCardImage
                    style={imageStyle}
                    className="img-fluid"
                    src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg"
                  />
                  <MDBCardBody>
                    <MDBCardTitle>WELDING</MDBCardTitle>
                  </MDBCardBody>
                </MDBCard>
              </MDBRow>
            </MDBCarouselItem>

            <MDBCarouselItem itemId="3" style={rowStyle}>
              <MDBRow style={rowStyle}>
                <MDBCard className="mb-2" style={cardStyle}>
                  <MDBCardImage
                    style={imageStyle}
                    className="img-fluid"
                    src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg"
                  />
                  <MDBCardBody>
                    <MDBCardTitle>POWDER COATING, PAINTING & MEDIA BLASTING</MDBCardTitle>
                  </MDBCardBody>
                </MDBCard>

                <MDBCard className="mb-2" style={cardStyle}>
                  <MDBCardImage
                    style={imageStyle}
                    className="img-fluid"
                    src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg"
                  />
                  <MDBCardBody>
                    <MDBCardTitle>MDBCard title</MDBCardTitle>
                  </MDBCardBody>
                </MDBCard>

                <MDBCard className="mb-2" style={cardStyle}>
                  <MDBCardImage
                    style={imageStyle}
                    className="img-fluid"
                    src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg"
                  />
                  <MDBCardBody>
                    <MDBCardTitle>ASSEMBLY</MDBCardTitle>
                  </MDBCardBody>
                </MDBCard>

                <MDBCard className="mb-2" style={cardStyle}>
                  <MDBCardImage
                    style={imageStyle}
                    className="img-fluid"
                    src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg"
                  />
                  <MDBCardBody>
                    <MDBCardTitle>CONTROL & RELAY PANEL FABRICATION</MDBCardTitle>
                  </MDBCardBody>
                </MDBCard>
              </MDBRow>
            </MDBCarouselItem>

            <MDBCarouselItem itemId="2" style={rowStyle}>
              <MDBRow style={rowStyle}>
                <MDBCard className="mb-2" style={cardStyle}>
                  <MDBCardImage
                    style={imageStyle}
                    className="img-fluid"
                    src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg"
                  />
                  <MDBCardBody>
                    <MDBCardTitle>CUSTOM FABRICATION & ENGINEERING DESIGN</MDBCardTitle>
                  </MDBCardBody>
                </MDBCard>

                <MDBCard className="mb-2" style={cardStyle}>
                  <MDBCardImage
                    style={imageStyle}
                    className="img-fluid"
                    src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg"
                  />
                  <MDBCardBody>
                    <MDBCardTitle>CUSTOM ENCLOSURES</MDBCardTitle>
                  </MDBCardBody>
                </MDBCard>

                <MDBCard className="mb-2" style={cardStyle}>
                  <MDBCardImage
                    style={imageStyle}
                    className="img-fluid"
                    src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg"
                  />
                  <MDBCardBody>
                    <MDBCardTitle></MDBCardTitle>
                  </MDBCardBody>
                </MDBCard>

                <MDBCard className="mb-2" style={cardStyle}>
                  <MDBCardImage
                    style={imageStyle}
                    className="img-fluid"
                    src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg"
                  />
                  <MDBCardBody>
                    <MDBCardTitle></MDBCardTitle>
                  </MDBCardBody>
                </MDBCard>
              </MDBRow>
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>
      </MDBContainer>
    </div>
  );
};

export default MultiCarouselPage;

const rowStyle = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "nowrap",
  borderStyle: "none",
  border: "none",
};
const outsideDiv = {
  padding: "3%",
  backgroundColor: "white",
};
const imageStyle = {
  padding: "10px",
};
const cardStyle = {
  border: "none",
  borderRadius: "0rem",
  borderStyle: "none",
  margin: "15px",
};
const innerStyle = {
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
    color: 'silver'
}
