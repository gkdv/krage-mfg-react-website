import React, { Component } from "react";
import Header from "../Header";
import Footer from "../Footer";
import TypicalParts from "../TypicalParts";


export class Portfolio extends Component {
  render() {
    return (
      <div>
        <Header />
        <TypicalParts />
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
