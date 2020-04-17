import React, { Component } from "react";
import typical_parts1 from "../utils/typical_parts1.JPG";
import typical_parts2 from "../utils/typical_parts2.JPG";
import typical_parts3 from "../utils/typical_parts3.JPG";
import typical_parts4 from "../utils/typical_parts4.JPG";
import typical_parts5 from "../utils/typical_parts5.JPG";
import typical_parts6 from "../utils/typical_parts6.JPG";
import typical_parts7 from "../utils/typical_parts7.JPG";
import typical_parts8 from "../utils/typical_parts8.JPG";
import typical_parts9 from "../utils/typical_parts9.JPG";
import typical_parts10 from "../utils/typical_parts10.JPG";
import typical_parts11 from "../utils/typical_parts11.JPG";
import typical_parts12 from "../utils/typical_parts12.JPG";
import typical_parts13 from "../utils/typical_parts13.JPG";
import typical_parts14 from "../utils/typical_parts14.JPG";
import typical_parts15 from "../utils/typical_parts15.JPG";
import typical_parts16 from "../utils/typical_parts16.JPG";
import typical_parts17 from "../utils/typical_parts17.JPG";
import typical_parts18 from "../utils/typical_parts18.JPG";
import typical_parts19 from "../utils/typical_parts19.JPG";
import typical_parts20 from "../utils/typical_parts20.JPG";
import typical_parts21 from "../utils/typical_parts21.JPG";
import typical_parts22 from "../utils/typical_parts22.JPG";
import typical_parts23 from "../utils/typical_parts23.JPG";
import typical_parts24 from "../utils/typical_parts24.JPG";
import typical_parts25 from "../utils/typical_parts25.JPG";
import typical_parts26 from "../utils/typical_parts26.JPG";
import typical_parts27 from "../utils/typical_parts27.JPG";
import typical_parts28 from "../utils/typical_parts28.JPG";
import Background from "../utils/dark-paths.png"
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBContainer,
} from "mdbreact";

export class LightBox extends Component {
  render() {
    return (
      <>
        <div style={headerBackgroundStyle}>
          <h2 className="font-weight-bold my-5 text-center" style={headerStyle}>
            TYPICAL PARTS
          </h2>
        </div>
        <MDBContainer>
          <MDBCarousel
            activeItem={1}
            length={3}
            showControls={true}
            showIndicators={true}
            className="z-depth-1"
          >
            <MDBCarouselInner>
              <MDBCarouselItem itemId="1">
                {/* //////////////////////////////////// Item 1 /////////////////////////////////////// */}
                <MDBView>
                  {/* <!--First row--> */}
                  <div className="row">
                    {/* <!--First column--> */}
                    <div className="col-md-12">
                      <div id="mdb-lightbox-ui"></div>

                      {/* <!--Full width lightbox--> */}
                      <div className="mdb-lightbox" style={style}>
                        <figure className="col-md-4">
                          <a href={"/Portfolio"} data-size="1600x1067">
                            <img
                              src={typical_parts1}
                              className="img-fluid z-depth-1"
                            ></img>
                          </a>
                        </figure>

                        <figure className="col-md-4">
                          <a href={"/Portfolio"} data-size="1600x1067">
                            <img
                              src={typical_parts2}
                              className="img-fluid z-depth-1"
                            ></img>
                          </a>
                        </figure>

                        <figure className="col-md-4">
                          <a href={"/Portfolio"} data-size="1600x1067">
                            <img
                              src={typical_parts3}
                              className="img-fluid z-depth-1"
                            ></img>
                          </a>
                        </figure>

                        <figure className="col-md-4">
                          <a href={"/Portfolio"} data-size="1600x1067">
                            <img
                              src={typical_parts8}
                              className="img-fluid z-depth-1"
                            ></img>
                          </a>
                        </figure>

                        <figure className="col-md-4">
                          <a href={"/Portfolio"} data-size="1600x1067">
                            <img
                              src={typical_parts7}
                              className="img-fluid z-depth-1"
                            ></img>
                          </a>
                        </figure>

                        <figure className="col-md-4">
                          <a href={"/Portfolio"} data-size="1600x1067">
                            <img
                              src={typical_parts6}
                              className="img-fluid z-depth-1"
                            ></img>
                          </a>
                        </figure>

                        <figure className="col-md-4">
                          <a href={"/Portfolio"} data-size="1600x1067">
                            <img
                              src={typical_parts5}
                              className="img-fluid z-depth-1"
                            ></img>
                          </a>
                        </figure>

                        <figure className="col-md-4">
                          <a href={"/Portfolio"} data-size="1600x1067">
                            <img
                              src={typical_parts10}
                              className="img-fluid z-depth-1"
                            ></img>
                          </a>
                        </figure>

                        <figure className="col-md-4">
                          <a href={"/Portfolio"} data-size="1600x1067">
                            <img
                              src={typical_parts9}
                              className="img-fluid z-depth-1"
                            ></img>
                          </a>
                        </figure>
                      </div>
                      {/* <!--/Full width lightbox--> */}
                    </div>
                    {/* <!--/First column--> */}
                  </div>
                </MDBView>
              </MDBCarouselItem>
              {/* //////////////////////////////////// Item 2 /////////////////////////////////////// */}
              <MDBCarouselItem itemId="2">
                <MDBView>
                  {/* <!--First row--> */}
                  <div className="row">
                    {/* <!--First column--> */}
                    <div className="col-md-12">
                      <div id="mdb-lightbox-ui"></div>

                      {/* <!--Full width lightbox--> */}
                      <div className="mdb-lightbox" style={style}>
                        <figure className="col-md-4">
                          <a href={"/Portfolio"} data-size="1600x1067">
                            <img
                              src={typical_parts28}
                              className="img-fluid z-depth-1"
                            ></img>
                          </a>
                        </figure>

                        <figure className="col-md-4">
                          <a href={"/Portfolio"} data-size="1600x1067">
                            <img
                              src={typical_parts27}
                              className="img-fluid z-depth-1"
                            ></img>
                          </a>
                        </figure>

                        <figure className="col-md-4">
                          <a href={"/Portfolio"} data-size="1600x1067">
                            <img
                              src={typical_parts11}
                              className="img-fluid z-depth-1"
                            ></img>
                          </a>
                        </figure>

                        <figure className="col-md-4">
                          <a href={"/Portfolio"} data-size="1600x1067">
                            <img
                              src={typical_parts12}
                              className="img-fluid z-depth-1"
                            ></img>
                          </a>
                        </figure>

                        <figure className="col-md-4">
                          <a href={"/Portfolio"} data-size="1600x1067">
                            <img
                              src={typical_parts13}
                              className="img-fluid z-depth-1"
                            ></img>
                          </a>
                        </figure>

                        <figure className="col-md-4">
                          <a href={"/Portfolio"} data-size="1600x1067">
                            <img
                              src={typical_parts14}
                              className="img-fluid z-depth-1"
                            ></img>
                          </a>
                        </figure>

                        <figure className="col-md-4">
                          <a href={"/Portfolio"} data-size="1600x1067">
                            <img
                              src={typical_parts15}
                              className="img-fluid z-depth-1"
                            ></img>
                          </a>
                        </figure>

                        <figure className="col-md-4">
                          <a href={"/Portfolio"} data-size="1600x1067">
                            <img
                              src={typical_parts16}
                              className="img-fluid z-depth-1"
                            ></img>
                          </a>
                        </figure>

                        <figure className="col-md-4">
                          <a href={"/Portfolio"} data-size="1600x1067">
                            <img
                              src={typical_parts17}
                              className="img-fluid z-depth-1"
                            ></img>
                          </a>
                        </figure>
                      </div>
                      {/* <!--/Full width lightbox--> */}
                    </div>
                    {/* <!--/First column--> */}
                  </div>
                </MDBView>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="3">
                {/* //////////////////////////////////// Item 3 /////////////////////////////////////// */}
                <MDBView>
                  {/* <!--First row--> */}
                  <div className="row">
                    {/* <!--First column--> */}
                    <div className="col-md-12">
                      <div id="mdb-lightbox-ui"></div>

                      {/* <!--Full width lightbox--> */}
                      <div className="mdb-lightbox" style={style}>
                        <figure className="col-md-4">
                          <a href={"/Portfolio"} data-size="1600x1067">
                            <img
                              src={typical_parts18}
                              className="img-fluid z-depth-1"
                            ></img>
                          </a>
                        </figure>

                        <figure className="col-md-4">
                          <a href={"/Portfolio"} data-size="1600x1067">
                            <img
                              src={typical_parts19}
                              className="img-fluid z-depth-1"
                            ></img>
                          </a>
                        </figure>

                        <figure className="col-md-4">
                          <a href={"/Portfolio"} data-size="1600x1067">
                            <img
                              src={typical_parts20}
                              className="img-fluid z-depth-1"
                            ></img>
                          </a>
                        </figure>

                        <figure className="col-md-4">
                          <a href={"/Portfolio"} data-size="1600x1067">
                            <img
                              src={typical_parts21}
                              className="img-fluid z-depth-1"
                            ></img>
                          </a>
                        </figure>

                        <figure className="col-md-4">
                          <a href={"/Portfolio"} data-size="1600x1067">
                            <img
                              src={typical_parts22}
                              className="img-fluid z-depth-1"
                            ></img>
                          </a>
                        </figure>

                        <figure className="col-md-4">
                          <a href={"/Portfolio"} data-size="1600x1067">
                            <img
                              src={typical_parts23}
                              className="img-fluid z-depth-1"
                            ></img>
                          </a>
                        </figure>

                        <figure className="col-md-4">
                          <a href={"/Portfolio"} data-size="1600x1067">
                            <img
                              src={typical_parts24}
                              className="img-fluid z-depth-1"
                            ></img>
                          </a>
                        </figure>

                        <figure className="col-md-4">
                          <a href={"/Portfolio"} data-size="1600x1067">
                            <img
                              src={typical_parts25}
                              className="img-fluid z-depth-1"
                            ></img>
                          </a>
                        </figure>

                        <figure className="col-md-4">
                          <a href={"/Portfolio"} data-size="1600x1067">
                            <img
                              src={typical_parts26}
                              className="img-fluid z-depth-1"
                            ></img>
                          </a>
                        </figure>
                      </div>
                      {/* <!--/Full width lightbox--> */}
                    </div>
                    {/* <!--/First column--> */}
                  </div>
                </MDBView>
              </MDBCarouselItem>
            </MDBCarouselInner>
          </MDBCarousel>
        </MDBContainer>
      </>
    );
  }
}

export default LightBox;

const style = {
  display: "flex",
  flexWrap: "wrap",
};
const headerStyle = {
  display: "flex",
  justifyContent: "center",
  // backgroundImage: "linear-gradient(to bottom left,silver , white)",
};
const headerBackgroundStyle = {
  padding: '5%',
  // backgroundImage: "linear-gradient(silver , white)",
  // background: 'linear-gradient(to right,rgba(192, 192, 192, 1), rgba(1, 23, 63, 0))',
  backgroundImage: ('linear-gradient(to right,rgba(192, 192, 192, 1), rgba(1, 23, 63, 0))', `url(${Background})`)
}