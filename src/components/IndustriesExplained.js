import React, { Component } from "react";
import TabBar from "./TabBar.js";
import TabButton from "./TabButton.js";

export class IndustriesExplained extends Component {
  render() {
    return (
      <div>
        <TabBar
          Tabs={[
            "Commercial & Industrial Construction",
            "Electric Utility",
            "Commercial Cooling & Heating",
          ]}
        />
        {/* <TabButton
          data={[
            "Electric Utility",
            "Krage manufactures components and assemblies used by various electrical and electronic equipment OEMs. Products include PCB holders and brackets, electrical enclosures, automated assembly equipment covers and frames, robotic machine frames and enclosures, motor mount brackets, adapter plates, and electronic frames and chassis, and machine tool covers.",
          ]}
        /> */}
      </div>
    );
  }
}

export default IndustriesExplained;

const styleDiv = {
  display: "flex",
};
