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
            "PROTOTYPING",
            "LASER CUTTING",
            "TURRET PUNCHING",
            "CNC BENDING",
            "CNC MACHINING",
            "FORM ROLLING",
            "WELDING",
            "POWDER COATING",
            "ASSEMBLY",
            "ELECTRIC PANEL",
            "ENGINEERING DESIGN",
            "ENCLOSURES",
          ]}
        />
        {/* <IndustriesExplained /> */}
        {/* <CapabilitiesDropDown /> */}
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



// "PROTOTYPING & CONTRACT MANUFACTURING",
// "LASER CUTTING",
// "TURRET PUNCHING",
// "CNC BENDING",
// "CNC MACHINING",
// "FORM ROLLING",
// "WELDING",
// "POWDER COATING",
// "ASSEMBLY",
// "CONTROL & RELAY PANEL FABRICATION",
// "CUSTOM FABRICATION & ENGINEERING DESIGN",
// "CUSTOM ENCLOSURES",
