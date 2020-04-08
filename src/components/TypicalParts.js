import React, { Component } from "react";

export class LightBox extends Component {
  render() {
    return (
      <div>
        <h2 className="font-weight-bold my-5 text-center">My Projects</h2>

        {/* <!--First row--> */}
        <div className="row">
          {/* <!--First column--> */}
          <div className="col-md-12">
            <div id="mdb-lightbox-ui"></div>

            {/* <!--Full width lightbox--> */}
            <div className="mdb-lightbox" style={style}>
              <figure className="col-md-4">
                <a
                  href="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(63).jpg"
                  data-size="1600x1067"
                >
                  <img
                    src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(63).jpg"
                    className="img-fluid z-depth-1"
                  ></img>
                </a>
              </figure>

              <figure className="col-md-4">
                <a
                  href="https://mdbootstrap.com/img/Mockups/Lightbox/Original/img%20(66).jpg"
                  data-size="1600x1067"
                >
                  <img
                    src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(66).jpg"
                    className="img-fluid z-depth-1"
                  ></img>
                </a>
              </figure>

              <figure className="col-md-4">
                <a
                  href="https://mdbootstrap.com/img/Mockups/Lightbox/Original/img%20(65).jpg"
                  data-size="1600x1067"
                >
                  <img
                    src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(65).jpg"
                    className="img-fluid z-depth-1"
                  ></img>
                </a>
              </figure>

              <figure className="col-md-4">
                <a
                  href="https://mdbootstrap.com/img/Mockups/Lightbox/Original/img%20(67).jpg"
                  data-size="1600x1067"
                >
                  <img
                    src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg"
                    className="img-fluid z-depth-1"
                  ></img>
                </a>
              </figure>

              <figure className="col-md-4">
                <a
                  href="https://mdbootstrap.com/img/Mockups/Lightbox/Original/img%20(68).jpg"
                  data-size="1600x1067"
                >
                  <img
                    src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(68).jpg"
                    className="img-fluid z-depth-1"
                  ></img>
                </a>
              </figure>

              <figure className="col-md-4">
                <a
                  href="https://mdbootstrap.com/img/Mockups/Lightbox/Original/img%20(64).jpg"
                  data-size="1600x1067"
                >
                  <img
                    src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(64).jpg"
                    className="img-fluid z-depth-1"
                  ></img>
                </a>
              </figure>

              <figure className="col-md-4">
                <a
                  href="https://mdbootstrap.com/img/Mockups/Lightbox/Original/img%20(69).jpg"
                  data-size="1600x1067"
                >
                  <img
                    src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(69).jpg"
                    className="img-fluid z-depth-1"
                  ></img>
                </a>
              </figure>

              <figure className="col-md-4">
                <a
                  href="https://mdbootstrap.com/img/Mockups/Lightbox/Original/img%20(59).jpg"
                  data-size="1600x1067"
                >
                  <img
                    src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(59).jpg"
                    className="img-fluid z-depth-1"
                  ></img>
                </a>
              </figure>

              <figure className="col-md-4">
                <a
                  href="https://mdbootstrap.com/img/Mockups/Lightbox/Original/img%20(70).jpg"
                  data-size="1600x1067"
                >
                  <img
                    src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(70).jpg"
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