import React, { Component } from "react";
import Header from "../Header";
// import Footer from "../Footer";
import Footer from '../FooterType2';
import Capabilities from "../Capabilities";
import IndustriesExplained from "../IndustriesExplained";

export class Services extends Component {
  render() {
    return (
      <div>
        <Header />
        {/* <IndustriesExplained /> */}
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
