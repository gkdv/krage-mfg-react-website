import React, { Component } from "react";
import Card from "./Card";
import LogoMakr_laser from "../utils/LogoMakr_laser.png";
import LogoMakr_design from "../utils/LogoMakr_design.png";
import LogoMakr_cnc from "../utils/LogoMakr_cnc.png";
import LogoMakr_roboWelding from "../utils/LogoMakr_roboWelding.png";
import LogoMakr_paint from "../utils/LogoMakr_paint.png";
import LogoMakr_electric from "../utils/LogoMakr_electric.png";
import LogoMakr_punching from "../utils/LogoMakr_punching.png";
import LogoMakr_roll from "../utils/LogoMakr_roll.png";
import LogoMakr_pressBrake from "../utils/LogoMakr_pressBrake.png";

export class Capabilities extends Component {
  render() {
    return (
      <div style={style}>
        <div className="row">
          <h2 className="font-weight-bold my-5 text-center">Capabilities</h2>
        </div>
        <div className="row" style={style}>
          <Card
            cardInfo={{
              src: LogoMakr_laser,
              alt: "image",
              cardTitle: "Laser Cutting",
            }}
            imageStyle={imageStyle}
            titleStyle={titleStyle}
            cardStyle={cardStyle}
          />
          <Card
            cardInfo={{
              src: LogoMakr_design,
              alt: "image",
              cardTitle: "Engineering Design",
            }}
            imageStyle={imageStyle}
            titleStyle={titleStyle}
            cardStyle={cardStyle}
          />
          <Card
            cardInfo={{
              src: LogoMakr_cnc,
              alt: "image",
              cardTitle: "CNC Machining",
            }}
            imageStyle={imageStyle}
            titleStyle={titleStyle}
            cardStyle={cardStyle}
          />
          <Card
            cardInfo={{
              src: LogoMakr_roboWelding,
              alt: "image",
              cardTitle: "Robotic Welding",
            }}
            imageStyle={imageStyle}
            titleStyle={titleStyle}
            cardStyle={cardStyle}
          />
          <Card
            cardInfo={{
              src: LogoMakr_paint,
              alt: "image",
              cardTitle: "Paint & Powder Coating",
            }}
            imageStyle={imageStyle}
            titleStyle={titleStyle}
            cardStyle={cardStyle}
          />
          <Card
            cardInfo={{
              src: LogoMakr_electric,
              alt: "image",
              cardTitle: "Control Panel Wiring",
            }}
            imageStyle={imageStyle}
            titleStyle={titleStyle}
            cardStyle={cardStyle}
          />
          <Card
            cardInfo={{
              src: LogoMakr_punching,
              alt: "image",
              cardTitle: "CNC Punching",
            }}
            imageStyle={imageStyle}
            titleStyle={titleStyle}
            cardStyle={cardStyle}
          />
          <Card
            cardInfo={{
              src: LogoMakr_roll,
              alt: "image",
              cardTitle: "Steel Rolling",
            }}
            imageStyle={imageStyle}
            titleStyle={titleStyle}
            cardStyle={cardStyle}
          />
          <Card
            cardInfo={{
              src: LogoMakr_pressBrake,
              alt: "image",
              cardTitle: "Hydraulic Press Brake",
            }}
            imageStyle={imageStyle}
            titleStyle={titleStyle}
            cardStyle={cardStyle}
          />
        </div>
      </div>
    );
  }
}

export default Capabilities;

const style = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-around",
  margin: "5%",
};
const imageStyle = {
  height: "6.25em",
  width: "6.25em",
};
const cardStyle = {
  width: "18rem",
  borderStyle: "none",
};

const titleStyle = {};

const headerStyle = {
  display: 'flex',
  justifyContent: 'center',
  backgroundImage: 'linear-gradient(to bottom left,silver , white)'
}