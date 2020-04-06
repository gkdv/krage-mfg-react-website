import React, { Component } from "react";
import plant_floor_2_400x300 from "../utils/plant_floor_3_240x180.JPG";
import Card from "./Card";

export class Industries extends Component {
  render() {
    return (
      <div style={style}>
        <Card
          cardInfo={{
              src: plant_floor_2_400x300,
              alt: "image",
              cardTitle: "Electric Utility",
            }}
            cardStyle={cardStyle}
        />
        <Card
          cardInfo={{
              src: plant_floor_2_400x300,
              alt: "image",
              cardTitle: "Commercial Cooling and Heating",
            }}
            cardStyle={cardStyle}
        />
        <Card
          cardInfo={{
              src: plant_floor_2_400x300,
              alt: "image",
              cardTitle: "Industrial Design & Architecture",
            }}
            cardStyle={cardStyle}
        />
        <Card
          cardInfo={{
              src: plant_floor_2_400x300,
              alt: "image",
              cardTitle: "Commercial & Industrial Construction",
            }}
            cardStyle={cardStyle}
            />
      </div>
    );
  }
}

export default Industries;

const style = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-around",
  margin: "5%",
};

const cardStyle = {
  width: "18rem",
  borderStyle: "none",
};
