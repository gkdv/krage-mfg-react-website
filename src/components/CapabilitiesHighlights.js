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
          capabilityType: "Prototyping & Contract Manufacturing",
          equipmentList: [],
          materialsUsed: [],
          industriesServed: [],
        });
        break;
      case "collapse2":
        this.setState({
          capabilityType: "Laser Cutting",
          equipmentList: [],
          materialsUsed: [],
          industriesServed: [],
        });
        break;
      case "collapse3":
        this.setState({
          capabilityType: "Turret Punching",
          equipmentList: [],
          materialsUsed: [],
          industriesServed: [],
        });
        break;
      case "collapse4":
        this.setState({
          capabilityType: "CNC Bending",
          equipmentList: [],
          materialsUsed: [],
          industriesServed: [],
        });
        break;
      case "collapse5":
        this.setState({
          capabilityType: "CNC Machining",
          equipmentList: [],
          materialsUsed: [],
          industriesServed: [],
        });
        break;
      case "collapse6":
        this.setState({
          capabilityType: "Welding",
          equipmentList: [],
          materialsUsed: [],
          industriesServed: [],
        });
        break;
      case "collapse7":
        this.setState({
          capabilityType: "Powder Coating, Painting & Media Blasting",
          equipmentList: [],
          materialsUsed: [],
          industriesServed: [],
        });
        break;
      case "collapse8":
        this.setState({
          capabilityType: "Assembly",
          equipmentList: [],
          materialsUsed: [],
          industriesServed: [],
        });
        break;
      case "collapse9":
        this.setState({
          capabilityType: "Control & Relay Panel Fabrication",
          equipmentList: [],
          materialsUsed: [],
          industriesServed: [],
        });
        break;
      case "collapse10":
        this.setState({
          capabilityType: "Custom Fabrication & Engineering Design",
          equipmentList: [],
          materialsUsed: [],
          industriesServed: [],
        });
        break;
      case "collapse11":
        this.setState({
          capabilityType: "Custom Enclosures",
          equipmentList: [],
          materialsUsed: [],
          industriesServed: [],
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
            <h2>Equipment List</h2>
          </div>
          <div className="col-md-9">
            <ul>{this.createList(this.state.equipmentList)}</ul>
          </div>
        </div>
        <div className="row" id="left-col3" style={styleLeft3}>
          <div className="col-md-3">
            <h2>Materials Used</h2>
          </div>
          <div className="col-md-9">
            <ul>{this.createList(this.state.materialsUsed)}</ul>
          </div>
        </div>
        <div className="row" id="left-col4" style={styleLeft4}>
          <div className="col-md-3">
            <h2>Industries Served</h2>
          </div>
          <div className="col-md-9">
            <ul>{this.createList(this.state.industriesServed)}</ul>
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
