import React, { Component } from "react";
import Header from "../Header";
import Footer from "../Footer";
import Capabilities from "../Capabilities";

export class Services extends Component {
  render() {
    return (
      <div>
        <Header />
        <Capabilities />
        <Footer style={style} />
      </div>
    );
  }
}

export default Services;

const style = {
  bottom: 0,
  position: "fixed"
};
