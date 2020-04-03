import React, { Component } from "react";
import Header from "../Header";
import Footer from "../Footer";

export class Services extends Component {
  render() {
    return (
      <div>
        <Header />
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
