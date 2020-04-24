import React, { Component } from "react";

class CapabilitiesHighlights extends Component {
  constructor() {
    super();
    this.state = {
      capabilityType: "",
      equipmentList: [],
      materialsUsed: [],
      industriesServed: [],
    };
  }

  listRender = () => {
    switch (this.props.collapseID) {
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
      this.listRender(this.props)
      console.log(this.props)
      
    return (
      <div style={container}>
        <div className="row" id="left-col1" style={styleLeft1}>
          <div className="col-md-3">
            <h2>Type of Service</h2>
          </div>
          <div className="col-md-9">
            <h4></h4>
          </div>
        </div>
        <div className="row" id="left-col2" style={styleLeft2}>
          <div className="col-md-3">
            <h2>Equipment List</h2>
          </div>
          <div className="col-md-9">
            <h4>hello1</h4>
          </div>
        </div>
        <div className="row" id="left-col3" style={styleLeft3}>
          <div className="col-md-3">
            <h2>Materials Used</h2>
          </div>
          <div className="col-md-9">
            <h4>hello1</h4>
          </div>
        </div>
        <div className="row" id="left-col4" style={styleLeft4}>
          <div className="col-md-3">
            <h2>Industries Served</h2>
          </div>
          <div className="col-md-9">
            <h4>hello1</h4>
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
