import React, { Component } from "react";

class CapabilitiesHighlights extends Component {
  constructor(props) {
    super(props);
    this.state = {
      capabilityType: "This is the capability type",
      equipmentList: ["Laser", "trumpf", "Press Brake"],
      materialsUsed: ["sheet metal", "wood"],
      industriesServed: ["manufacturing", "electrical industry"],
    };


  }

  createList = (items) => {
    let List = [];
    for (let i = 0; i < items.length; i++) {
      List.push(<ul>{`${items[i]}`}</ul>);
    }
    return List;
  };

  componentWillMount() {
    switch (this.props.props) {
      case "collapse1":
        this.setState({
          capabilityType: "Prototyping & Contract Manufacturing Key Features",
          equipmentList: [],
          materialsUsed: [],
          industriesServed: [],
        });
        break;
      case "collapse2":
        this.setState({
          capabilityType: "Laser Cutting Key Features",
          equipmentList: ['Bystronic BySprint Fiber Laser with Bytrans Extended loader and ByTower material storage', 'Trumpf TruLaser 2030'],
          materialsUsed: ['Sheet Metal gauge: 4-12', 'Cold Rolled Steel', 'Galvanized Steel', 'Stainless Steel', 'Aluminum'],
          industriesServed: ['Cooling and Heating', 'Electrical Utility', 'Mining', 'Building Materials & Construction', 'Industrial Design', 'Oil & Gas', 'Engineering'],
        });
        break;
      case "collapse3":
        this.setState({
          capabilityType: "Turret Punching Key Features",
          equipmentList: ['Muratec FG-Series Turret Press', 'Strippit LVD Smart Stroke Turret Press'],
          materialsUsed: ['Aluminum', 'Stainless Steel', 'Galvanized Steel', 'Cold Rolled Steel', 'Lexan Sheet Stock', 'Polycarbonate Sheet Stock'],
          industriesServed: ['Cooling and Heating', 'Electrical Utility', 'Mining', 'Building Materials & Construction', 'Industrial Design', 'Oil & Gas', 'Engineering'],
        });
        break;
      case "collapse4":
        this.setState({
          capabilityType: "CNC Bending Key Features",
          equipmentList: ['Bystronic Xpert 40', '(4) Bystronic Xpert 150', 'Bystronic Xpert 250'],
          materialsUsed: ['Aluminum', 'Stainless Steel', 'Galvanized Steel', 'Cold Rolled Steel', 'Lexan Sheet Stock', 'Polycarbonate Sheet Stock'],
          industriesServed: ['Cooling and Heating', 'Electrical Utility', 'Mining', 'Building Materials & Construction', 'Industrial Design', 'Oil & Gas', 'Engineering'],
        });
        break;
      case "collapse5":
        this.setState({
          capabilityType: "CNC Machining Key Features",
          equipmentList: ['HAAS ST 25Y Lathe', 'HAAS VF4 Mill', 'Piranha Shear press', 'AccuShear'],
          materialsUsed: ['Bus Bar', 'Brass', 'Copper', 'Aluminum', 'Stainless Steel', 'Galvanized Steel', 'Other Non Ferrous Alloys'],
          industriesServed: ['Cooling and Heating', 'Electrical Utility', 'Mining', 'Building Materials & Construction', 'Industrial Design', 'Oil & Gas', 'Engineering'],
        });
        break;
      case "collapse6":
        this.setState({
          capabilityType: "Form Rolling Key Features",
          equipmentList: ['DAVI MCA Four Roll 2020'],
          materialsUsed: ['Aluminum', 'Stainless Steel', 'Galvanized Steel', 'Cold Rolled Steel'],
          industriesServed: ['Cooling and Heating', 'Electrical Utility', 'Mining', 'Building Materials & Construction', 'Industrial Design', 'Oil & Gas', 'Engineering'],
        });
        break;
      case "collapse7":
        this.setState({
          capabilityType: "Welding Key Features",
          equipmentList: ['PerformArc side-by-side Robotic Welding System', 'ArcWorld By Motoman Robotic Welding System', 'MIG Welding', 'TIG Welding'],
          materialsUsed: ['Aluminum', 'Stainless Steel', 'Galvanized Steel', 'Cold Rolled Steel'],
          industriesServed: ['Cooling and Heating', 'Electrical Utility', 'Mining', 'Building Materials & Construction', 'Industrial Design', 'Oil & Gas', 'Engineering'],
        });
        break;
      case "collapse8":
        this.setState({
          capabilityType: "Powder Coating, Painting & Media Blasting Key Features",
          equipmentList: ['(3) Ovens', '(4) Powder Booths', '(3) Wash Bays'],
          materialsUsed: ['Aluminum', 'Stainless Steel', 'Galvanized Steel', 'Cold Rolled Steel'],
          industriesServed: ['Cooling and Heating', 'Electrical Utility', 'Mining', 'Building Materials & Construction', 'Industrial Design', 'Oil & Gas', 'Engineering'],
        });
        break;
      case "collapse9":
        this.setState({
          capabilityType: "Assembly Key Features",
          equipmentList: [],
          materialsUsed: [],
          industriesServed: ['Cooling and Heating', 'Electrical Utility', 'Mining', 'Building Materials & Construction', 'Industrial Design', 'Oil & Gas', 'Engineering'],
        });
        break;
      case "collapse10":
        this.setState({
          capabilityType: "Control & Relay Panel Fabrication Key Features",
          equipmentList: [],
          materialsUsed: [],
          industriesServed: ['Cooling and Heating', 'Electrical Utility', 'Mining', 'Building Materials & Construction', 'Industrial Design', 'Oil & Gas', 'Engineering'],
        });
        break;
      case "collapse11":
        this.setState({
          capabilityType: "Custom Fabrication & Engineering Design Key Features",
          equipmentList: [],
          materialsUsed: [],
          industriesServed: ['Cooling and Heating', 'Electrical Utility', 'Mining', 'Building Materials & Construction', 'Industrial Design', 'Oil & Gas', 'Engineering'],
        });
        break;
      case "collapse12":
        this.setState({
          capabilityType: "Custom Enclosures Key Features",
          equipmentList: [],
          materialsUsed: [],
          industriesServed: ['Cooling and Heating', 'Electrical Utility', 'Mining', 'Building Materials & Construction', 'Industrial Design', 'Oil & Gas', 'Engineering'],
        });
        break;
      default:
        console.log("default");
    }

  }

  componentDidUpdate(prevProps) {
    if (this.props.props !== prevProps.props) {
      this.componentWillMount();
    }
  }

  listRender = () => {
    switch (this.props.props) {
      case "collapse1":
        this.setState({
          capabilityType: "sd",
          equipmentList: [],
          materialsUsed: [],
          industriesServed: [],
        });
        break;
      case "collapse2":
        this.setState({
          capabilityType: "hgdfbfb",
          equipmentList: [],
          materialsUsed: [],
          industriesServed: [],
        });
        break;
      case "collapse3":
        this.setState({
          capabilityType: "dvds dsvd",
          equipmentList: [],
          materialsUsed: [],
          industriesServed: [],
        });
        break;
      case "collapse4":
        this.setState({
          capabilityType: "dd",
          equipmentList: [],
          materialsUsed: [],
          industriesServed: [],
        });
        break;
      case "collapse5":
        this.setState({
          capabilityType: "d",
          equipmentList: [],
          materialsUsed: [],
          industriesServed: [],
        });
        break;
      case "collapse6":
        this.setState({
          capabilityType: "ssdsddsd",
          equipmentList: [],
          materialsUsed: [],
          industriesServed: [],
        });
        break;
      case "collapse7":
        this.setState({
          capabilityType: "sdssdfsdfsdfsfsd",
          equipmentList: [],
          materialsUsed: [],
          industriesServed: [],
        });
        break;
      case "collapse8":
        this.setState({
          capabilityType: "sdfsdfdsffsfsd",
          equipmentList: [],
          materialsUsed: [],
          industriesServed: [],
        });
        break;
      case "collapse9":
        this.setState({
          capabilityType: "",
          equipmentList: [],
          materialsUsed: [],
          industriesServed: [],
        });
        break;
      default:
        console.log("default");
    }
  };
  render() {
    console.log(this.props);
    console.log(this.state)

    return (
      <div style={container}>
        <div className="row" id="left-col1" style={styleLeft1}>
          <div className="col-md-12">
            <h1>{this.state.capabilityType}</h1>
          </div>
          <div className="col-md">
            <h4></h4>
          </div>
        </div>
        <div className="row" id="left-col2" style={styleLeft2}>
          <div className="col-md-3">
            <h2 style={styleLeftAll} >Equipment List</h2>
          </div>
          <div className="col-md-9" style={rightDivStyle}>
            <ul style={styleListItems} >{this.createList(this.state.equipmentList)}</ul>
          </div>
        </div>
        <div className="row" id="left-col3" style={styleLeft3}>
          <div className="col-md-3">
            <h2 style={styleLeftAll} >Materials Used</h2>
          </div>
          <div className="col-md-9" style={rightDivStyle}>
            <ul style={styleListItems} >{this.createList(this.state.materialsUsed)}</ul>
          </div>
        </div>
        <div className="row" id="left-col4" style={styleLeft4}>
          <div className="col-md-3">
            <h2 style={styleLeftAll} >Industries Served</h2>
          </div>
          <div className="col-md-9" style={rightDivStyle}>
            <ul style={styleListItems} >{this.createList(this.state.industriesServed)}</ul>
          </div>
        </div>
      </div>
    );
  }
}

export default CapabilitiesHighlights;

const container = {
  display: "flex",
  // flexWrap: 'nowrap',
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  padding: '5% 2%'
};
const styleLeft1 = {
  borderBottom: "solid",
  borderWidth: "1px",
  width: "100%",
};
const styleLeft2 = {
  borderBottom: "solid",
  borderWidth: "1px",
  width: "100%",
};
const styleLeft3 = {
  borderWidth: "1px",
  width: "100%",
};
const styleLeft4 = {
  borderTop: "solid",
  borderWidth: "1px",
  width: "100%",
};
const styleLeftAll = {
  padding: '15% 0% 15% 5%'
}
const styleListItems = {
  display: 'flex',
  alignContent: 'flex-start',
  flexDirection: 'column'
}
const rightDivStyle = {
  display: 'flex',
  alignItems: 'center',
  alignContent: 'center',
  padding: '2%'
}