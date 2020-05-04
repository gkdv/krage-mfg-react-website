import React, { Component } from "react";
import Header from "../Header";
import Footer from "../FooterType2";
import IndustriesExplained from "../IndustriesExplained";

export class Industries extends Component {
  render() {
    return (
      <div>
        <Header />
        <IndustriesExplained />
        <Footer />
      </div>
    );
  }
}

export default Industries;
