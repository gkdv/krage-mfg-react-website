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



export class LightBox extends Component {
  render() {
    return (
      <div>
        <h2 className="font-weight-bold my-5 text-center" style={headerStyle}>Typical Parts</h2>

        {/* <!--First row--> */}
        <div className="row">
          {/* <!--First column--> */}
          <div className="col-md-12">
            <div id="mdb-lightbox-ui"></div>

            {/* <!--Full width lightbox--> */}
            <div className="mdb-lightbox" style={style}>
              <figure className="col-md-4">
                <a
                  href={'/Portfolio'}
                  data-size="1600x1067"
                >
                  <img
                    src={typical_parts1}
                    className="img-fluid z-depth-1"
                  ></img>
                </a>
              </figure>

              <figure className="col-md-4">
                <a
                  href={'/Portfolio'}
                  data-size="1600x1067"
                >
                  <img
                    src={typical_parts2}
                    className="img-fluid z-depth-1"
                  ></img>
                </a>
              </figure>

              <figure className="col-md-4">
                <a
                  href={'/Portfolio'}
                  data-size="1600x1067"
                >
                  <img
                    src={typical_parts3}
                    className="img-fluid z-depth-1"
                  ></img>
                </a>
              </figure>

              <figure className="col-md-4">
                <a
                  href={'/Portfolio'}
                  data-size="1600x1067"
                >
                  <img
                    src={typical_parts8}
                    className="img-fluid z-depth-1"
                  ></img>
                </a>
              </figure>

              <figure className="col-md-4">
                <a
                  href={'/Portfolio'}
                  data-size="1600x1067"
                >
                  <img
                    src={typical_parts7}
                    className="img-fluid z-depth-1"
                  ></img>
                </a>
              </figure>

              <figure className="col-md-4">
                <a
                  href={'/Portfolio'}
                  data-size="1600x1067"
                >
                  <img
                    src={typical_parts6}
                    className="img-fluid z-depth-1"
                  ></img>
                </a>
              </figure>

              <figure className="col-md-4">
                <a
                  href={'/Portfolio'}
                  data-size="1600x1067"
                >
                  <img
                    src={typical_parts5}
                    className="img-fluid z-depth-1"
                  ></img>
                </a>
              </figure>

              <figure className="col-md-4">
                <a
                  href={'/Portfolio'}
                  data-size="1600x1067"
                >
                  <img
                    src={typical_parts10}
                    className="img-fluid z-depth-1"
                  ></img>
                </a>
              </figure>

              <figure className="col-md-4">
                <a
                  href={'/Portfolio'}
                  data-size="1600x1067"
                >
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
      </div>
    );
  }
}

export default LightBox;

const style = {
    display: "flex",
    flexWrap: "wrap"
}
const headerStyle = {
  display: 'flex',
  justifyContent: 'center',
  backgroundImage: 'linear-gradient(to bottom left,silver , white)'
}
