import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import brakePress from "../utils/bystronic_press1_290x218.JPG";
import welding from "../utils/welding300x192.jpg";
import powder from "../utils/powderCoat300x200.jpg";
import turretPress from "../utils/turretPress300x225.JPG";
import customEnclosures from "../utils/customEnclosures300x225.JPG";
import relayPanel from "../utils/relayPanel300x225.jpg";
import customFabrication from "../utils/customFabrication300x225.JPG";
import wireAssembly from "../utils/wireAssembly300x225.JPG";
import designPlans from "../utils/designPlans300x225.jpg";
import haasMill from "../utils/haasMill300x199.jpg";
import pressBrakes from "../utils/pressBrakes300x225.JPG";
import roll from "../utils/daviRoll2_300x203.jpg";
import laser from "../utils/trumpf_laser300x225.JPG";
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
        We have a specialized set of capabilities we leverage to drive
        innovation and ingenuity for our customers.
      </h2>
      <MDBContainer>
        <MDBCarousel
          activeItem={1}
          length={4}
          slide={true}
          showControls={true}
          showIndicators={true}
          className="z-depth-1"
          indicatorColor="blue"
          style={containerStyle}
        >
          <MDBCarouselInner style={innerStyle}>
            {/* //////////////////////////////////////////////// item 1 //////////////////////////////////////////////// */}
            <MDBCarouselItem itemId="1" style={itemStyle}>
              <MDBRow style={rowStyle}>
                <MDBCard className="col-sm-3" style={cardStyle}>
                  <Link to="/Services">
                    <MDBCardImage
                      style={imageStyle}
                      className="img-fluid"
                      src={wireAssembly}
                    />
                  </Link>
                  <MDBCardBody>
                    <MDBCardTitle>
                      PROTOTYPING & CONTRACT MANUFACTURING
                    </MDBCardTitle>
                  </MDBCardBody>
                </MDBCard>
                {/* TURRET PUNCHING &  */}
                <MDBCard className="col-sm-3" style={cardStyle}>
                <Link to="/Services">
                  <MDBCardImage
                    style={imageStyle}
                    className="img-fluid"
                    src={laser}
                  />
                  </Link>
                  <MDBCardBody>
                    <MDBCardTitle>LASER CUTTING</MDBCardTitle>
                  </MDBCardBody>
                </MDBCard>

                <MDBCard className="col-sm-3" style={cardStyle}>
                <Link to="/Services">
                  <MDBCardImage
                    style={imageStyle}
                    className="img-fluid"
                    src={turretPress}
                  />
                  </Link>
                  <MDBCardBody>
                    <MDBCardTitle>TURRET PUNCHING</MDBCardTitle>
                  </MDBCardBody>
                </MDBCard>
              </MDBRow>
            </MDBCarouselItem>
            {/* //////////////////////////////////////////////// item 2 //////////////////////////////////////////////// */}
            <MDBCarouselItem itemId="2" style={itemStyle}>
              <MDBRow style={rowStyle}>
                <MDBCard className="col-sm-3" style={cardStyle}>
                <Link to="/Services">
                  <MDBCardImage
                    style={imageStyle}
                    className="img-fluid"
                    src={pressBrakes}
                  />
                  </Link>
                  <MDBCardBody>
                    <MDBCardTitle>CNC BENDING</MDBCardTitle>
                  </MDBCardBody>
                </MDBCard>

                <MDBCard className="col-sm-3" style={cardStyle}>
                <Link to="/Services">
                  <MDBCardImage
                    style={imageStyle}
                    className="img-fluid"
                    src={haasMill}
                  />
                  </Link>
                  <MDBCardBody>
                    <MDBCardTitle>CNC MACHINING</MDBCardTitle>
                  </MDBCardBody>
                </MDBCard>

                <MDBCard className="col-sm-3" style={cardStyle}>
                <Link to="/Services">
                  <MDBCardImage
                    style={imageStyle}
                    className="img-fluid"
                    src={welding}
                  />
                  </Link>
                  <MDBCardBody>
                    <MDBCardTitle>WELDING</MDBCardTitle>
                  </MDBCardBody>
                </MDBCard>
              </MDBRow>
            </MDBCarouselItem>
            {/* //////////////////////////////////////////////// item 3 //////////////////////////////////////////////// */}
            <MDBCarouselItem itemId="3" style={itemStyle}>
              <MDBRow style={rowStyle}>
                <MDBCard className="col-sm-3" style={cardStyle}>
                <Link to="/Services">
                  <MDBCardImage
                    style={imageStyle}
                    className="img-fluid"
                    src={roll}
                  />
                  </Link>
                  <MDBCardBody>
                    <MDBCardTitle>FORM ROLLING</MDBCardTitle>
                  </MDBCardBody>
                </MDBCard>

                <MDBCard className="col-sm-3" style={cardStyle}>
                <Link to="/Services">
                  <MDBCardImage
                    style={imageStyle}
                    className="img-fluid"
                    src={customEnclosures}
                  />
                  </Link>
                  <MDBCardBody>
                    <MDBCardTitle>ASSEMBLY</MDBCardTitle>
                  </MDBCardBody>
                </MDBCard>

                <MDBCard className="col-sm-3" style={cardStyle}>
                <Link to="/Services">
                  <MDBCardImage
                    style={imageStyle}
                    className="img-fluid"
                    src={powder}
                  />
                  </Link>
                  <MDBCardBody>
                    <MDBCardTitle>
                      POWDER COATING, PAINTING & MEDIA BLASTING
                    </MDBCardTitle>
                  </MDBCardBody>
                </MDBCard>
              </MDBRow>
            </MDBCarouselItem>
            {/* //////////////////////////////////////////////// item 4 //////////////////////////////////////////////// */}
            <MDBCarouselItem itemId="4" style={itemStyle}>
              <MDBRow style={rowStyle}>
                <MDBCard className="col-sm-3" style={cardStyle}>
                <Link to="/Services">
                  <MDBCardImage
                    style={imageStyle}
                    className="img-fluid"
                    src={designPlans}
                  />
                  </Link>
                  <MDBCardBody>
                    <MDBCardTitle>
                      CUSTOM FABRICATION & ENGINEERING DESIGN
                    </MDBCardTitle>
                  </MDBCardBody>
                </MDBCard>

                <MDBCard className="col-sm-3" style={cardStyle}>
                <Link to="/Services">
                  <MDBCardImage
                    style={imageStyle}
                    className="img-fluid"
                    src={customFabrication}
                  />
                  </Link>
                  <MDBCardBody>
                    <MDBCardTitle>CUSTOM ENCLOSURES</MDBCardTitle>
                  </MDBCardBody>
                </MDBCard>

                <MDBCard className="col-sm-3" style={cardStyle}>
                <Link to="/Services">
                  <MDBCardImage
                    style={imageStyle}
                    className="img-fluid"
                    src={relayPanel}
                  />
                  </Link>
                  <MDBCardBody>
                    <MDBCardTitle>
                      CONTROL & RELAY PANEL FABRICATION
                    </MDBCardTitle>
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
const containerStyle = {
  display: 'flex',
  justifyContent: 'center'
}
const itemStyle = {
  padding: '10%',
  display: 'flex',
  justifyContent: 'center'
}
const rowStyle = {
  display: "flex",
  justifyContent: "space-around",
  flexDirection: "row",
  flexWrap: "nowrap",
  borderStyle: "none",
  border: "none",
};
const outsideDiv = {
  padding: "1%",
  backgroundColor: "white",
};
const imageStyle = {
  padding: "20px",
};
const cardStyle = {
  border: "none",
  borderRadius: "0rem",
  borderStyle: "none",
  margin: "10px",
  padding: "0%",
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
  color: "silver",
};

// TURRET PUNCHING &
