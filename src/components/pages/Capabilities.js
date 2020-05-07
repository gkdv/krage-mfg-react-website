import React, { Component } from "react";
import Header from "../Header";
// import Footer from "../Footer";
import Footer from '../FooterType2';
import CapabilitiesDropDown from "../CapabilitiesDropDown";
import TabBarCapabilities from "../TabBarCapabilities.js";
// import IndustriesExplained from "../IndustriesExplained";

export class Capabilities extends Component {
  render() {
    return (
      <div>
        <Header />
        <TabBarCapabilities
          Tabs={[
            "PROTOTYPING & CONTRACT MANUFACTURING",
            "LASER CUTTING",
            "TURRET PUNCHING",
            "CNC BENDING",
            "CNC MACHINING",
            "FORM ROLLING",
            "WELDING",
            "POWDER COATING, PAINTING 7 MEDIA BLASTING",
            "ASSEMBLY",
            "CONTROL & RELAY PANEL FABRICATION",
            "CUSTOM FABRICATION & ENGINEERING DESIGN",
            "CUSTOM ENCLOSURES",
          ]}
        />
        {/* <IndustriesExplained /> */}
        <CapabilitiesDropDown />
        <Footer style={style} />
      </div>
    );
  }
}

export default Capabilities;

const style = {
  bottom: 0,
  position: "fixed"
};
