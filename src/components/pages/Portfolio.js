import React, { Component } from "react";
import Header from "../Header";
import Footer from "../Footer";

export class Portfolio extends Component {
  render() {
    return (
      <div>
        <Header />
        <Footer style={style} />
      </div>
    );
  }
}

export default Portfolio;

const style = {
  bottom: 0,
  position: "fixed"
};
